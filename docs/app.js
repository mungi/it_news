const state = {
  data: null,
  query: "",
  category: "All",
  importance: "All",
  region: "All",
};

const CATEGORY_ORDER = ["All", "AI", "Cloud", "Infra", "Security", "DevTools", "Data", "Open Source", "Korea", "IT"];
const IMPORTANCE_ORDER = ["All", "must-know", "high", "medium"];
const REGION_ORDER = ["All", "Global", "Korea"];
const FALLBACK_BY_CATEGORY = {
  AI: "assets/images/fallback-ai.svg",
  Cloud: "assets/images/fallback-cloud.svg",
  Infra: "assets/images/fallback-infra.svg",
  Security: "assets/images/fallback-security.svg",
  DevTools: "assets/images/fallback-infra.svg",
  Data: "assets/images/fallback-cloud.svg",
  Korea: "assets/images/fallback-ai.svg",
  IT: "assets/images/fallback-infra.svg",
};

const $ = (selector) => document.querySelector(selector);

function normalize(value) {
  return String(value || "").toLowerCase();
}

function imageFor(item) {
  return item.local_image || item.image_url || FALLBACK_BY_CATEGORY[item.category] || "assets/images/fallback-infra.svg";
}

function badgeClass(value) {
  const v = normalize(value).replace(/\s+/g, "-");
  if (v.includes("ai")) return "ai";
  if (v.includes("cloud")) return "cloud";
  if (v.includes("infra") || v.includes("dev")) return "infra";
  if (v.includes("security")) return "security";
  if (v.includes("korea")) return "korea";
  if (v.includes("must")) return "must-know";
  return "";
}

function makeBadge(text) {
  const span = document.createElement("span");
  span.className = `badge ${badgeClass(text)}`;
  span.textContent = text;
  return span;
}

function renderFilterButtons(container, values, active, onClick) {
  container.innerHTML = "";
  values.forEach((value) => {
    const button = document.createElement("button");
    button.className = `filter-button ${value === active ? "active" : ""}`;
    button.type = "button";
    button.textContent = value;
    button.addEventListener("click", () => onClick(value));
    container.appendChild(button);
  });
}

function updateHeader() {
  const data = state.data;
  $("#weekBadge").textContent = data.week || "-";
  $("#coverageText").textContent = `${data.coverage_start_kst || "-"} → ${data.coverage_end_kst || "-"}`;
  $("#updatedText").textContent = `${data.last_updated_kst || "-"} KST`;
  $("#presentationText").textContent = data.presentation_window_kst || "Monday 13:00-17:00 KST";
  $("#itemCountText").textContent = `${(data.items || []).length}개`;
  const freezeBadge = $("#freezeBadge");
  freezeBadge.textContent = data.frozen ? "Presentation Frozen" : "Auto Update Active";
  freezeBadge.className = `pill ${data.frozen ? "pill-frozen" : "pill-hot"}`;
}

function renderSummary() {
  const list = $("#summaryList");
  list.innerHTML = "";
  (state.data.executive_summary || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function renderDeepDives() {
  const container = $("#deepDiveList");
  container.innerHTML = "";
  (state.data.deep_dives || []).slice(0, 2).forEach((item) => {
    const div = document.createElement("article");
    div.className = "deep-dive";
    div.innerHTML = `<h3>${escapeHtml(item.title || "Deep Dive")}</h3>
      <p><strong>요약:</strong> ${escapeHtml(item.summary || "")}</p>
      <p>${escapeHtml(item.why_it_matters || item.details || "")}</p>`;
    container.appendChild(div);
  });
}

function itemMatches(item) {
  const haystack = normalize([
    item.title_ko,
    item.title_original,
    item.summary,
    item.detail,
    item.why_it_matters,
    item.category,
    ...(item.tags || []),
  ].join(" "));
  const categoryMatch = state.category === "All" || item.category === state.category || (item.tags || []).includes(state.category);
  const importanceMatch = state.importance === "All" || item.importance === state.importance;
  const regionMatch = state.region === "All" || item.region === state.region || (item.tags || []).includes(state.region);
  const queryMatch = !state.query || haystack.includes(normalize(state.query));
  return categoryMatch && importanceMatch && regionMatch && queryMatch;
}

function renderCards() {
  const grid = $("#newsGrid");
  const template = $("#cardTemplate");
  grid.innerHTML = "";
  const items = (state.data.items || []).filter(itemMatches).sort((a, b) => (a.rank || 999) - (b.rank || 999));
  const mustKnowCount = items.filter((item) => item.importance === "must-know").length;
  $("#resultText").textContent = `${items.length}개 표시 / 전체 ${(state.data.items || []).length}개 · Must Know ${mustKnowCount}개`;

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "조건에 맞는 뉴스가 없습니다.";
    grid.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const img = node.querySelector(".card-image");
    img.src = imageFor(item);
    img.alt = `${item.title_ko || item.title_original || "뉴스"} 이미지`;
    img.onerror = () => { img.src = FALLBACK_BY_CATEGORY[item.category] || "assets/images/fallback-infra.svg"; };

    const badges = node.querySelector(".badges");
    [item.category, item.region, item.importance].filter(Boolean).forEach((value) => badges.appendChild(makeBadge(value)));
    node.querySelector("h3").textContent = item.title_ko || item.title_original || "제목 없음";
    node.querySelector(".original-title").textContent = item.title_original ? `Original: ${item.title_original}` : "";
    node.querySelector(".summary").textContent = item.summary || "";
    node.querySelector(".why").textContent = item.why_it_matters ? `왜 중요한가: ${item.why_it_matters}` : "";
    const sourceLink = node.querySelector(".source");
    sourceLink.textContent = item.source_name || "Source";
    sourceLink.href = item.source_url || "#";
    sourceLink.addEventListener("click", (event) => event.stopPropagation());
    node.querySelector(".published").textContent = item.published_kst || "";
    node.addEventListener("click", () => openModal(item));
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(item);
      }
    });
    grid.appendChild(node);
  });
}

function openModal(item) {
  const modal = $("#modal");
  const img = $("#modalImage");
  img.src = imageFor(item);
  img.alt = `${item.title_ko || item.title_original || "뉴스"} 이미지`;
  img.onerror = () => { img.src = FALLBACK_BY_CATEGORY[item.category] || "assets/images/fallback-infra.svg"; };
  $("#modalTitle").textContent = item.title_ko || item.title_original || "제목 없음";
  $("#modalOriginal").textContent = item.title_original ? `Original: ${item.title_original}` : "";
  $("#modalSummary").textContent = item.summary || "";
  $("#modalDetail").textContent = item.detail || "";
  $("#modalWhy").textContent = item.why_it_matters || "";
  $("#modalEngineering").textContent = item.engineering_implication || "";
  $("#modalKorea").textContent = item.korea_implication || "";

  const badges = $("#modalBadges");
  badges.innerHTML = "";
  [item.category, item.region, item.importance, ...(item.tags || [])].filter(Boolean).forEach((value) => badges.appendChild(makeBadge(value)));

  const links = $("#modalLinks");
  links.innerHTML = "";
  if (item.source_url) links.appendChild(makeLink("원문 보기", item.source_url));
  (item.related_links || []).forEach((link) => links.appendChild(makeLink(link.title || "관련 링크", link.url)));

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function makeLink(title, url) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = title;
  return a;
}

function closeModal() {
  $("#modal").classList.add("hidden");
  document.body.style.overflow = "";
}

function escapeHtml(value) {
  const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
  return String(value || "").replace(/[&<>'"]/g, (char) => entities[char]);
}

function wireEvents() {
  $("#searchInput").addEventListener("input", (event) => {
    state.query = event.target.value;
    renderCards();
  });
  $("#mustKnowButton").addEventListener("click", () => {
    state.importance = state.importance === "must-know" ? "All" : "must-know";
    renderFilters();
    renderCards();
  });
  $("#presentationButton").addEventListener("click", () => document.body.classList.toggle("presentation"));
  document.querySelectorAll("[data-close='modal']").forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

function renderFilters() {
  renderFilterButtons($("#categoryFilters"), CATEGORY_ORDER, state.category, (value) => { state.category = value; renderFilters(); renderCards(); });
  renderFilterButtons($("#importanceFilters"), IMPORTANCE_ORDER, state.importance, (value) => { state.importance = value; renderFilters(); renderCards(); });
  renderFilterButtons($("#regionFilters"), REGION_ORDER, state.region, (value) => { state.region = value; renderFilters(); renderCards(); });
}

async function boot() {
  try {
    const response = await fetch("data/weekly-news.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`weekly-news.json load failed: ${response.status}`);
    state.data = await response.json();
    updateHeader();
    renderSummary();
    renderDeepDives();
    renderFilters();
    renderCards();
    wireEvents();
  } catch (error) {
    console.error(error);
    document.body.innerHTML = `<main class="panel"><h1>데이터를 불러오지 못했습니다</h1><p>${escapeHtml(error.message)}</p></main>`;
  }
}

boot();
