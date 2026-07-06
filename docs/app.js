const state = {
  data: null,
  query: "",
  category: "All",
  importance: "All",
  region: "All",
  viewMode: "list",
  topOnly: false,
  modalReturnFocus: null,
  readItems: new Set(),
};

const READ_STORAGE_KEY = "it-news-read-items-v1";

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

function on(selector, eventName, handler) {
  const element = $(selector);
  if (element) element.addEventListener(eventName, handler);
}

function loadReadItems() {
  try {
    const raw = window.localStorage?.getItem(READ_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    state.readItems = new Set(Array.isArray(parsed) ? parsed.filter(Boolean) : []);
  } catch {
    state.readItems = new Set();
  }
}

function saveReadItems() {
  try {
    window.localStorage?.setItem(READ_STORAGE_KEY, JSON.stringify([...state.readItems]));
  } catch {
    // localStorage can be unavailable in private or restricted browser contexts.
  }
}

function isRead(item) {
  return Boolean(item?.id && state.readItems.has(item.id));
}

function markRead(item) {
  if (!item?.id || state.readItems.has(item.id)) return;
  state.readItems.add(item.id);
  saveReadItems();
  document.querySelectorAll(`[data-news-id="${CSS.escape(item.id)}"]`).forEach((node) => {
    node.classList.add("is-read");
    node.setAttribute("aria-label", `${item.title_ko || item.title_original || "뉴스"} 상세 보기, 읽음`);
    const stateLabel = node.querySelector(".read-state");
    if (stateLabel) stateLabel.textContent = "읽음";
  });
  updateResultText();
}

function normalize(value) {
  return String(value || "").toLowerCase();
}

function displayLabel(value) {
  if (value === "must-know") return "중요 소식";
  if (value === "high") return "높음";
  if (value === "medium") return "보통";
  if (value === "low") return "낮음";
  return value;
}

function imageFor(item) {
  const fallback = FALLBACK_BY_CATEGORY[item.category] || "assets/images/fallback-infra.svg";
  const imageUrl = item.image_url || "";
  const localImage = item.local_image || "";
  if (localImage && !localImage.includes("fallback-")) return localImage;
  if (imageUrl && !imageUrl.includes("fallback-")) return imageUrl;
  return imageUrl || localImage || fallback;
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
  span.textContent = displayLabel(text);
  return span;
}

function renderFilterButtons(container, values, active, onClick) {
  container.innerHTML = "";
  values.forEach((value) => {
    const button = document.createElement("button");
    button.className = `filter-button ${value === active ? "active" : ""}`;
    button.type = "button";
    button.setAttribute("aria-pressed", String(value === active));
    button.textContent = displayLabel(value);
    button.addEventListener("click", () => onClick(value));
    container.appendChild(button);
  });
}

function getKstClockParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Seoul",
    weekday: "short",
    hour: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const valueByType = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return {
    weekday: valueByType.weekday,
    hour: Number(valueByType.hour),
  };
}

function getLiveFreezeState() {
  const { weekday, hour } = getKstClockParts();
  const frozen = weekday === "Mon" && hour >= 13 && hour < 17;
  return {
    frozen,
    label: frozen ? "발표 Freeze 진행 중" : "자동 업데이트 가능",
  };
}

function updateHeader() {
  const data = state.data;
  const liveFreeze = getLiveFreezeState();
  const dataFrozen = Boolean(data.frozen);
  $("#weekBadge").textContent = data.week || "-";
  $("#coverageText").textContent = `${data.coverage_start_kst || "-"} → ${data.coverage_end_kst || "-"}`;
  $("#updatedText").textContent = `${data.last_updated_kst || "-"} KST`;
  $("#presentationText").textContent = `${data.presentation_window_kst || "Monday 13:00-17:00 KST"} · ${liveFreeze.label}`;
  $("#itemCountText").textContent = `${(data.items || []).length}개`;
  const freezeBadge = $("#freezeBadge");
  freezeBadge.textContent = liveFreeze.frozen ? "발표 중 Freeze" : dataFrozen ? "데이터 Freeze" : "업데이트 가능";
  freezeBadge.className = `pill ${liveFreeze.frozen || dataFrozen ? "pill-frozen" : "pill-hot"}`;
  freezeBadge.title = liveFreeze.frozen
    ? "현재 KST 기준 월요일 13:00-17:00 발표 보호 시간입니다."
    : "현재 KST 기준 발표 보호 시간이 아닙니다.";
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
    div.tabIndex = 0;
    div.setAttribute("role", "button");
    div.setAttribute("aria-label", `${item.title || "Deep Dive"} 상세 보기`);
    div.innerHTML = `<h3>${escapeHtml(item.title || "Deep Dive")}</h3>
      <p><strong>요약:</strong> ${escapeHtml(item.summary || "")}</p>
      <p>${escapeHtml(item.why_it_matters || item.details || "")}</p>
      <span class="read-more">클릭해서 상세 설명 보기 →</span>`;
    div.addEventListener("click", () => openDeepDiveModal(item));
    div.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDeepDiveModal(item);
      }
    });
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
  const matchedItems = (state.data.items || []).filter(itemMatches).sort((a, b) => (a.rank || 999) - (b.rank || 999));
  const items = state.topOnly ? matchedItems.slice(0, 6) : matchedItems;
  updateResultText(items, matchedItems.length);

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "조건에 맞는 뉴스가 없습니다.";
    grid.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const title = item.title_ko || item.title_original || "뉴스";
    node.dataset.newsId = item.id || "";
    node.setAttribute("role", "button");
    node.setAttribute("aria-label", `${title} 상세 보기`);
    if (isRead(item)) {
      node.classList.add("is-read");
      node.setAttribute("aria-label", `${title} 상세 보기, 읽음`);
    }
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
    node.querySelector(".read-state").textContent = isRead(item) ? "읽음" : "";
    const sourceLink = node.querySelector(".source");
    sourceLink.textContent = item.source_name || "Source";
    sourceLink.href = item.source_url || "#";
    sourceLink.setAttribute("aria-label", `${title} 원문 열기: ${item.source_name || "Source"}`);
    sourceLink.addEventListener("click", (event) => event.stopPropagation());
    sourceLink.addEventListener("keydown", (event) => event.stopPropagation());
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

function updateResultText(items = null, matchedCount = null) {
  if (!state.data) return;
  const matchedItems = (state.data.items || []).filter(itemMatches).sort((a, b) => (a.rank || 999) - (b.rank || 999));
  const visibleItems = items || (state.topOnly ? matchedItems.slice(0, 6) : matchedItems);
  const mustKnowCount = visibleItems.filter((item) => item.importance === "must-know").length;
  const readCount = visibleItems.filter(isRead).length;
  const baseText = `${visibleItems.length}개 표시 / 전체 ${(state.data.items || []).length}개`;
  const topText = state.topOnly ? ` · Top 6 적용${Number.isInteger(matchedCount) ? `, 조건 일치 ${matchedCount}개` : ""}` : "";
  $("#resultText").textContent = `${baseText}${topText} · 중요 소식 ${mustKnowCount}개 · 읽음 ${readCount}개`;
}

function renderRichDetail(container, sections, fallbackText) {
  container.innerHTML = "";
  const normalizedSections = Array.isArray(sections) ? sections.filter(Boolean) : [];
  if (!normalizedSections.length) {
    const p = document.createElement("p");
    p.textContent = fallbackText || "상세 내용이 준비되지 않았습니다.";
    container.appendChild(p);
    return;
  }

  normalizedSections.forEach((section) => {
    const block = document.createElement("section");
    block.className = "rich-section";
    if (section.heading) {
      const h4 = document.createElement("h4");
      h4.textContent = section.heading;
      block.appendChild(h4);
    }
    if (section.body) {
      const p = document.createElement("p");
      p.textContent = section.body;
      block.appendChild(p);
    }
    if (Array.isArray(section.items) && section.items.length) {
      const ul = document.createElement("ul");
      section.items.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
      });
      block.appendChild(ul);
    }
    container.appendChild(block);
  });
}

function itemDetailSections(item) {
  if (Array.isArray(item.detailed_content)) return item.detailed_content;
  return [
    { heading: "무슨 일이 있었나", body: item.detail || item.summary || "" },
    {
      heading: "핵심 포인트",
      items: [item.why_it_matters, item.engineering_implication, item.korea_implication].filter(Boolean),
    },
  ];
}

function openModal(item) {
  const modal = $("#modal");
  markRead(item);
  state.modalReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const img = $("#modalImage");
  img.src = imageFor(item);
  img.alt = `${item.title_ko || item.title_original || "뉴스"} 이미지`;
  img.onerror = () => { img.src = FALLBACK_BY_CATEGORY[item.category] || "assets/images/fallback-infra.svg"; };
  $("#modalTitle").textContent = item.title_ko || item.title_original || "제목 없음";
  $("#modalOriginal").textContent = item.title_original ? `Original: ${item.title_original}` : "";
  $("#modalSummary").textContent = item.summary || "";
  renderRichDetail($("#modalDetail"), itemDetailSections(item), item.detail || item.summary || "");
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
  $(".modal-close")?.focus();
}

function openDeepDiveModal(item) {
  const modal = $("#modal");
  state.modalReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const img = $("#modalImage");
  img.src = "assets/images/fallback-ai.svg";
  img.alt = `${item.title || "Deep Dive"} 이미지`;

  $("#modalTitle").textContent = item.title || "Deep Dive";
  $("#modalOriginal").textContent = "Deep Dive";
  $("#modalSummary").textContent = item.summary || "";
  renderRichDetail($("#modalDetail"), item.detailed_content, item.details || item.summary || "");
  $("#modalWhy").textContent = item.why_it_matters || "";
  $("#modalEngineering").textContent = "발표에서는 이 항목을 중심축으로 삼아 관련 뉴스의 비용, 보안, 운영 영향까지 연결해 설명합니다.";
  $("#modalKorea").textContent = "국내 개발 조직과 인프라 팀은 도입 비용, 운영 복잡도, 보안 경계를 함께 검토하는 관점으로 참고할 수 있습니다.";

  const badges = $("#modalBadges");
  badges.innerHTML = "";
  ["Deep Dive", "Summary"].forEach((value) => badges.appendChild(makeBadge(value)));

  const links = $("#modalLinks");
  links.innerHTML = "";
  (item.sources || []).forEach((url, index) => links.appendChild(makeLink(`출처 ${index + 1}`, url)));

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  $(".modal-close")?.focus();
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
  const modal = $("#modal");
  if (modal.classList.contains("hidden")) return;
  modal.classList.add("hidden");
  document.body.style.overflow = "";
  state.modalReturnFocus?.focus?.();
  state.modalReturnFocus = null;
}

function keepFocusInModal(event) {
  const modal = $("#modal");
  if (modal.classList.contains("hidden") || event.key !== "Tab") return;
  const focusable = Array.from(modal.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"));
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function escapeHtml(value) {
  const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
  return String(value || "").replace(/[&<>'"]/g, (char) => entities[char]);
}

function wireEvents() {
  on("#searchInput", "input", (event) => {
    state.query = event.target.value;
    renderCards();
  });
  on("#mustKnowButton", "click", () => {
    state.topOnly = !state.topOnly;
    $("#mustKnowButton")?.classList.toggle("active", state.topOnly);
    $("#mustKnowButton")?.setAttribute("aria-pressed", String(state.topOnly));
    renderCards();
  });
  on("#listViewButton", "click", () => setViewMode("list"));
  on("#cardViewButton", "click", () => setViewMode("card"));
  document.querySelectorAll("[data-close='modal']").forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
    keepFocusInModal(event);
  });
}

function setViewMode(mode) {
  state.viewMode = mode === "card" ? "card" : "list";
  document.body.classList.toggle("card-mode", state.viewMode === "card");
  document.body.classList.toggle("list-mode", state.viewMode === "list");
  $("#listViewButton")?.classList.toggle("active", state.viewMode === "list");
  $("#cardViewButton")?.classList.toggle("active", state.viewMode === "card");
  $("#listViewButton")?.setAttribute("aria-pressed", String(state.viewMode === "list"));
  $("#cardViewButton")?.setAttribute("aria-pressed", String(state.viewMode === "card"));
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
    loadReadItems();
    updateHeader();
    renderSummary();
    renderDeepDives();
    renderFilters();
    renderCards();
    wireEvents();
    setViewMode("list");
  } catch (error) {
    console.error(error);
    document.body.innerHTML = `<main class="panel"><h1>데이터를 불러오지 못했습니다</h1><p>${escapeHtml(error.message)}</p></main>`;
  }
}

boot();
