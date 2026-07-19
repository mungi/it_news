const state = {
  data: null,
  query: "",
  category: "All",
  importance: "All",
  region: "All",
  viewMode: "list",
  topOnly: false,
  modalReturnFocus: null,
  bodyOverflowBeforeModal: null,
  readItems: new Set(),
};

const READ_STORAGE_KEY_PREFIX = "it-news-read-items-v2";

function readStorageKey() {
  // News IDs restart each week, so persist reading state per ISO week rather
  // than incorrectly marking a freshly published week's items as already read.
  return `${READ_STORAGE_KEY_PREFIX}:${String(state.data?.week || "unknown")}`;
}

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
  "Open Source": "assets/images/fallback-infra.svg",
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
    const raw = window.localStorage?.getItem(readStorageKey());
    const parsed = raw ? JSON.parse(raw) : [];
    // Keep persisted state bounded to IDs in the current data set. This avoids
    // stale/corrupt local storage affecting another week's 50-item briefing.
    const validIds = new Set((state.data?.items || [])
      .map((item) => item?.id)
      .filter((id) => typeof id === "string" && id));
    state.readItems = new Set(Array.isArray(parsed)
      ? parsed.filter((id) => typeof id === "string" && validIds.has(id))
      : []);
  } catch {
    state.readItems = new Set();
  }
}

function saveReadItems() {
  try {
    window.localStorage?.setItem(readStorageKey(), JSON.stringify([...state.readItems]));
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
  document.querySelectorAll("[data-news-id]").forEach((node) => {
    if (node.dataset.newsId !== item.id) return;
    node.classList.add("is-read");
    const detailButton = node.querySelector(".card-detail-button");
    if (detailButton) detailButton.setAttribute("aria-label", `${item.title_ko || item.title_original || "뉴스"} 상세 보기, 읽음`);
    const stateLabel = node.querySelector(".read-state");
    if (stateLabel) stateLabel.textContent = "읽음";
  });
  updateResultText();
}

function normalize(value) {
  return String(value || "").toLowerCase();
}

function displayLabel(value) {
  const labels = {
    All: "전체",
    Cloud: "클라우드",
    Infra: "인프라",
    Security: "보안",
    DevTools: "개발도구",
    Data: "데이터",
    "Open Source": "오픈소스",
    Korea: "한국",
    Global: "글로벌",
    "must-know": "중요 소식",
    high: "높음",
    medium: "보통",
    low: "낮음",
    "Deep Dive": "딥다이브",
    Summary: "요약",
  };
  return labels[value] || value;
}

function imageFor(item) {
  const fallback = fallbackImageFor(item.category);
  const imageUrl = safeImageSrc(item.image_url || "");
  const localImage = safeImageSrc(item.local_image || "");
  if (localImage && !localImage.includes("fallback-")) return localImage;
  if (imageUrl && !imageUrl.includes("fallback-")) return imageUrl;
  return imageUrl || localImage || fallback;
}

function deepDiveImageFor(item) {
  const imageUrl = safeImageSrc(item.image_url || "");
  const localImage = safeImageSrc(item.local_image || "");
  if (localImage && !localImage.includes("fallback-")) return localImage;
  if (imageUrl && !imageUrl.includes("fallback-")) return imageUrl;
  return localImage || imageUrl || fallbackImageFor("AI");
}

function fallbackImageFor(category) {
  return FALLBACK_BY_CATEGORY[category] || "assets/images/fallback-infra.svg";
}

function safeImageSrc(value) {
  const raw = String(value || "");
  const trimmed = raw.trim();
  // Apply the same whitespace/control-character policy to docs-local assets
  // as external URLs so malformed data cannot bypass validator assumptions.
  if (!trimmed || trimmed !== raw || hasUnsafeUrlWhitespace(raw) || raw.includes("\\")) return "";
  if (/^https?:\/\//i.test(raw)) {
    try {
      if (hasMalformedPercentEscape(raw) || hasUnsafeUrlAuthority(raw)) return "";
      const url = new URL(raw);
      return ["http:", "https:"].includes(url.protocol) &&
        url.hostname &&
        !url.username &&
        !url.password &&
        !hasDecodedUrlRisk(url)
        ? url.href
        : "";
    } catch {
      return "";
    }
  }
  if (!raw.startsWith("assets/") || raw.startsWith("//") || raw.startsWith("/") || raw.includes("\\")) return "";
  const parts = raw.split("/");
  if (parts.some((part) => part === "" || part === "." || part === "..")) return "";
  try {
    if (parts.some((part) => {
      const decoded = decodeURIComponent(part);
      return decoded === "." || decoded === ".." || decoded.includes("/") || decoded.includes("\\") || hasUnsafeUrlWhitespace(decoded);
    })) return "";
  } catch {
    return "";
  }
  return raw;
}

function useFallbackImage(img, category = "Infra") {
  img.onerror = null;
  img.src = fallbackImageFor(category);
}

function badgeClass(value) {
  const v = normalize(value).replace(/\s+/g, "-");
  if (v.includes("ai")) return "ai";
  if (v.includes("cloud")) return "cloud";
  if (v.includes("infra") || v.includes("dev")) return "infra";
  if (v.includes("data")) return "data";
  if (v.includes("open-source")) return "open-source";
  if (v.includes("security")) return "security";
  if (v.includes("korea")) return "korea";
  if (v === "it") return "it";
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
  container.replaceChildren();
  container.setAttribute("role", "group");
  values.forEach((value, index) => {
    const button = document.createElement("button");
    button.className = `filter-button ${value === active ? "active" : ""}`;
    button.type = "button";
    button.setAttribute("aria-pressed", String(value === active));
    button.setAttribute("aria-controls", "newsGrid");
    button.dataset.filterIndex = String(index);
    button.textContent = displayLabel(value);
    button.addEventListener("click", () => {
      onClick(value);
      focusFilterButton(container, index);
    });
    button.addEventListener("keydown", (event) => handleSegmentedButtonKeydown(event, container, values, onClick));
    container.appendChild(button);
  });
}

function focusFilterButton(container, index) {
  window.requestAnimationFrame(() => {
    const refreshedButton = container.querySelector(`button[data-filter-index="${index}"]`);
    refreshedButton?.focus();
  });
}

function handleSegmentedButtonKeydown(event, container, values, onClick) {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  const buttons = Array.from(container.querySelectorAll("button"));
  if (!buttons.length) return;
  const currentIndex = buttons.indexOf(event.currentTarget);
  if (currentIndex < 0) return;
  event.preventDefault();
  const lastIndex = buttons.length - 1;
  let nextIndex = currentIndex;
  if (event.key === "Home") nextIndex = 0;
  if (event.key === "End") nextIndex = lastIndex;
  if (event.key === "ArrowLeft") nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
  if (event.key === "ArrowRight") nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
  onClick(values[nextIndex]);
  focusFilterButton(container, nextIndex);
}

function updateHeader() {
  const data = state.data;
  const updatedBadge = $("#topUpdatedBadge");
  updatedBadge.textContent = `최종 업데이트: ${data.last_updated_kst || "-"} KST`;
  updatedBadge.classList.add("pill-muted");
}

function renderSummary() {
  const list = $("#summaryList");
  list.replaceChildren();
  (state.data.executive_summary || []).forEach((item) => {
    const li = document.createElement("li");
    // Weekly summaries use the same limited **bold** convention as cards and
    // modal content. Parse it as text nodes, never HTML, to retain safe output.
    appendRichText(li, item);
    list.appendChild(li);
  });
}

function renderDeepDives() {
  const container = $("#deepDiveList");
  container.replaceChildren();
  const deepDives = (state.data.deep_dives || []).slice(0, 2);
  // Only a supporting second card needs preview clamping. A single primary
  // Deep Dive should retain its complete briefing context in the page itself.
  container.classList.toggle("has-secondary-deep-dive", deepDives.length > 1);
  deepDives.forEach((item, index) => {
    const div = document.createElement("article");
    const title = item.title || "Deep Dive";
    div.className = "deep-dive";

    const imageWrap = document.createElement("div");
    imageWrap.className = "deep-dive-image-wrap";
    const img = document.createElement("img");
    img.className = "deep-dive-image";
    img.alt = `${title} 이미지`;
    img.width = 236;
    img.height = 192;
    // Deep Dives are rendered in the briefing's above-the-fold panel. Loading
    // their primary imagery eagerly avoids delaying the visual anchor / LCP,
    // while the much longer news list remains lazily loaded.
    img.loading = "eager";
    // Only the first Deep Dive is the initial viewport's primary visual. Give
    // it an explicit network priority without competing with the next card.
    img.fetchPriority = index === 0 ? "high" : "auto";
    img.decoding = "async";
    img.referrerPolicy = "strict-origin-when-cross-origin";
    img.onerror = () => useFallbackImage(img, "AI");
    img.src = deepDiveImageFor(item);
    imageWrap.appendChild(img);

    const body = document.createElement("div");
    body.className = "deep-dive-body";
    const heading = document.createElement("h3");
    heading.textContent = title;
    const summary = document.createElement("p");
    const summaryLabel = document.createElement("strong");
    summaryLabel.textContent = "요약:";
    summary.append(summaryLabel, " ");
    appendRichText(summary, item.summary || "");
    const why = document.createElement("p");
    why.className = "deep-dive-why";
    why.textContent = item.why_it_matters || item.details || "";
    const more = document.createElement("button");
    more.className = "read-more";
    more.type = "button";
    more.setAttribute("aria-haspopup", "dialog");
    more.setAttribute("aria-label", `${title} 상세 보기`);
    more.textContent = "상세 설명 보기 →";
    body.append(heading, summary, why, more);

    div.append(imageWrap, body);
    // The article remains pointer-clickable, but return focus to its native
    // detail button so closing the dialog never strands keyboard focus on a
    // non-focusable card container.
    div.addEventListener("click", () => openDeepDiveModal(item, more));
    more.addEventListener("click", (event) => {
      event.stopPropagation();
      openDeepDiveModal(item, more);
    });
    container.appendChild(div);
  });
}

function detailSearchText(sections) {
  if (!Array.isArray(sections)) return "";
  return sections.map((section) => {
    if (!section || typeof section !== "object") return "";
    return [section.heading, section.body, ...(Array.isArray(section.items) ? section.items : [])].join(" ");
  }).join(" ");
}

function itemMatches(item) {
  const query = state.query.trim();
  const haystack = normalize([
    item.title_ko,
    item.title_original,
    item.summary,
    item.detail,
    item.why_it_matters,
    item.engineering_implication,
    item.korea_implication,
    item.source_name,
    item.category,
    detailSearchText(item.detailed_content),
    ...(item.tags || []),
  ].join(" "));
  const categoryMatch = state.category === "All" || item.category === state.category || (item.tags || []).includes(state.category);
  const importanceMatch = state.importance === "All" || item.importance === state.importance;
  const regionMatch = state.region === "All" || item.region === state.region || (item.tags || []).includes(state.region);
  const queryMatch = !query || haystack.includes(normalize(query));
  return categoryMatch && importanceMatch && regionMatch && queryMatch;
}

function compareItemsByPublishedDesc(a, b) {
  const publishedA = Date.parse(String(a.published_kst || "").replace(" ", "T"));
  const publishedB = Date.parse(String(b.published_kst || "").replace(" ", "T"));
  const timeA = Number.isNaN(publishedA) ? -Infinity : publishedA;
  const timeB = Number.isNaN(publishedB) ? -Infinity : publishedB;
  if (timeA !== timeB) return timeB - timeA;
  return (a.rank || 999) - (b.rank || 999);
}

function topRankItems(items, limit = 6) {
  const importancePriority = { "must-know": 0, high: 1, medium: 2, low: 3 };
  return [...items]
    .sort((a, b) => {
      const priorityA = importancePriority[a.importance] ?? Number.MAX_SAFE_INTEGER;
      const priorityB = importancePriority[b.importance] ?? Number.MAX_SAFE_INTEGER;
      if (priorityA !== priorityB) return priorityA - priorityB;
      const scoreA = Number.isFinite(a.score) ? a.score : -Infinity;
      const scoreB = Number.isFinite(b.score) ? b.score : -Infinity;
      if (scoreA !== scoreB) return scoreB - scoreA;
      return compareItemsByPublishedDesc(a, b);
    })
    .slice(0, limit);
}

function renderCards() {
  const grid = $("#newsGrid");
  const template = $("#cardTemplate");
  grid.replaceChildren();
  const matchedItems = (state.data.items || []).filter(itemMatches).sort(compareItemsByPublishedDesc);
  const items = state.topOnly ? topRankItems(matchedItems) : matchedItems;
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
    if (isRead(item)) {
      node.classList.add("is-read");
    }
    const img = node.querySelector(".card-image");
    img.alt = `${item.title_ko || item.title_original || "뉴스"} 이미지`;
    img.referrerPolicy = "strict-origin-when-cross-origin";
    img.onerror = () => useFallbackImage(img, item.category);
    img.src = imageFor(item);

    const badges = node.querySelector(".badges");
    [item.category, item.region, item.importance].filter(Boolean).forEach((value) => badges.appendChild(makeBadge(value)));
    node.querySelector("h3").textContent = item.title_ko || item.title_original || "제목 없음";
    node.querySelector(".original-title").textContent = item.title_original ? `원문 제목: ${item.title_original}` : "";
    setRichText(node.querySelector(".summary"), item.summary || "");
    setRichText(node.querySelector(".why"), item.why_it_matters ? `왜 중요한가: ${item.why_it_matters}` : "");
    node.querySelector(".read-state").textContent = isRead(item) ? "읽음" : "";
    const sourceLink = node.querySelector(".source");
    const safeSourceUrl = safeExternalUrl(item.source_url);
    sourceLink.textContent = item.source_name || "Source";
    if (safeSourceUrl) {
      sourceLink.href = safeSourceUrl;
      sourceLink.referrerPolicy = "strict-origin-when-cross-origin";
      sourceLink.removeAttribute("aria-disabled");
    } else {
      sourceLink.removeAttribute("href");
      sourceLink.setAttribute("aria-disabled", "true");
    }
    sourceLink.setAttribute("aria-label", `${title} 원문 열기: ${item.source_name || "Source"}`);
    sourceLink.addEventListener("click", (event) => event.stopPropagation());
    sourceLink.addEventListener("keydown", (event) => event.stopPropagation());
    const published = node.querySelector(".published");
    const publishedKst = String(item.published_kst || "");
    // The source data stores KST timestamps without an offset. Keep the visible
    // card label explicit so a projector audience does not mistake it for local
    // browser time, while retaining an ISO-8601 machine-readable datetime.
    published.textContent = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(publishedKst)
      ? `${publishedKst} KST`
      : publishedKst;
    if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(publishedKst)) {
      published.dateTime = `${publishedKst.replace(" ", "T")}+09:00`;
      published.setAttribute("aria-label", `발행 시각: ${publishedKst} KST`);
    } else {
      published.removeAttribute("datetime");
      published.removeAttribute("aria-label");
    }
    const detailButton = node.querySelector(".card-detail-button");
    detailButton.setAttribute("aria-label", `${title} 상세 보기`);
    detailButton.addEventListener("click", (event) => {
      event.stopPropagation();
      openModal(item, detailButton);
    });
    node.addEventListener("click", () => openModal(item, detailButton));
    grid.appendChild(node);
  });
}

function updateResultText(items = null, matchedCount = null) {
  if (!state.data) return;
  const matchedItems = (state.data.items || []).filter(itemMatches).sort(compareItemsByPublishedDesc);
  const visibleItems = items || (state.topOnly ? topRankItems(matchedItems) : matchedItems);
  const mustKnowCount = visibleItems.filter((item) => item.importance === "must-know").length;
  const readCount = visibleItems.filter(isRead).length;
  const baseText = `${visibleItems.length}개 표시 / 전체 ${(state.data.items || []).length}개`;
  const topText = state.topOnly ? ` · Top 6 표시${Number.isInteger(matchedCount) ? `, 조건 일치 ${matchedCount}개` : ""}` : "";
  $("#resultText").textContent = `${baseText}${topText} · 중요 소식 ${mustKnowCount}개 · 읽음 ${readCount}개`;
}

function renderRichDetail(container, sections, fallbackText) {
  container.replaceChildren();
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
      appendRichText(p, section.body);
      block.appendChild(p);
    }
    if (Array.isArray(section.items) && section.items.length) {
      const ul = document.createElement("ul");
      section.items.forEach((text) => {
        const li = document.createElement("li");
        appendRichText(li, text);
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
      heading: "시사점",
      items: [item.why_it_matters, item.engineering_implication].filter(Boolean),
    },
  ];
}

function openModal(item, opener = null) {
  const modal = $("#modal");
  markRead(item);
  state.modalReturnFocus = opener instanceof HTMLElement
    ? opener
    : document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const img = $("#modalImage");
  img.alt = `${item.title_ko || item.title_original || "뉴스"} 이미지`;
  img.referrerPolicy = "strict-origin-when-cross-origin";
  img.onerror = () => useFallbackImage(img, item.category);
  img.src = imageFor(item);
  setModalTitleLink(item.title_ko || item.title_original || "제목 없음", item.source_url);
  $("#modalOriginal").textContent = item.title_original ? `원문 제목: ${item.title_original}` : "";
  setRichText($("#modalSummary"), item.summary || "");
  renderRichDetail($("#modalDetail"), itemDetailSections(item), item.detail || item.summary || "");
  setRichText($("#modalWhy"), item.why_it_matters || "");
  setRichText($("#modalEngineering"), item.engineering_implication || "");

  const badges = $("#modalBadges");
  badges.replaceChildren();
  [item.category, item.region, item.importance, ...(item.tags || [])].filter(Boolean).forEach((value) => badges.appendChild(makeBadge(value)));

  const links = $("#modalLinks");
  links.replaceChildren();
  if (item.source_url) links.appendChild(makeLink("원문 보기", item.source_url));
  (item.related_links || []).forEach((link) => links.appendChild(makeLink(link.title || "관련 링크", link.url)));

  showModal(modal);
}

function openDeepDiveModal(item, opener = null) {
  const modal = $("#modal");
  state.modalReturnFocus = opener instanceof HTMLElement
    ? opener
    : document.activeElement instanceof HTMLElement ? document.activeElement : null;
  const img = $("#modalImage");
  img.alt = `${item.title || "Deep Dive"} 이미지`;
  img.referrerPolicy = "strict-origin-when-cross-origin";
  img.onerror = () => useFallbackImage(img, "AI");
  img.src = deepDiveImageFor(item);

  setModalTitleLink(item.title || "Deep Dive", (item.sources || [])[0]);
  $("#modalOriginal").textContent = "딥다이브";
  setRichText($("#modalSummary"), item.summary || "");
  renderRichDetail($("#modalDetail"), item.detailed_content, item.details || item.summary || "");
  setRichText($("#modalWhy"), item.why_it_matters || "");
  setRichText($("#modalEngineering"), deepDiveImplication(item));

  const badges = $("#modalBadges");
  badges.replaceChildren();
  ["Deep Dive", "Summary"].forEach((value) => badges.appendChild(makeBadge(value)));

  const links = $("#modalLinks");
  links.replaceChildren();
  (item.sources || []).forEach((url, index) => links.appendChild(makeLink(`출처 ${index + 1}`, url)));

  showModal(modal);
}

function showModal(modal) {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  setBackgroundInert(true);
  const modalCard = modal.querySelector(".modal-card");
  if (modalCard) modalCard.scrollTop = 0;
  state.bodyOverflowBeforeModal = document.body.style.overflow;
  document.body.style.overflow = "hidden";
  $(".modal-close")?.focus();
}

function deepDiveImplication(item) {
  const sections = Array.isArray(item.detailed_content) ? item.detailed_content : [];
  const priorityKeywords = ["체크리스트", "관점", "강조", "시사점"];
  const selected = sections.find((section) => {
    const heading = String(section?.heading || "");
    return priorityKeywords.some((keyword) => heading.includes(keyword));
  });
  const firstItem = Array.isArray(selected?.items) ? selected.items.find((value) => String(value || "").trim()) : "";
  return firstItem || selected?.body || item.why_it_matters || item.details || "시사점 정보 없음";
}

function makeLink(title, url) {
  const safeUrl = safeExternalUrl(url);
  if (!safeUrl) {
    const span = document.createElement("span");
    span.className = "disabled-link";
    span.textContent = `${title} (링크 오류)`;
    return span;
  }

  const a = document.createElement("a");
  a.href = safeUrl;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.referrerPolicy = "strict-origin-when-cross-origin";
  a.textContent = title;
  return a;
}

function safeExternalUrl(value) {
  const raw = String(value || "");
  const trimmed = raw.trim();
  if (!trimmed || trimmed !== raw || hasUnsafeUrlWhitespace(raw) || raw.includes("\\")) return "";
  if (!/^https?:\/\//i.test(raw)) return "";
  try {
    if (hasMalformedPercentEscape(raw) || hasUnsafeUrlAuthority(raw)) return "";
    const url = new URL(raw);
    return ["http:", "https:"].includes(url.protocol) &&
      url.hostname &&
      !url.username &&
      !url.password &&
      !hasDecodedUrlRisk(url)
      ? url.href
      : "";
  } catch {
    return "";
  }
}

function hasUnsafeUrlWhitespace(value) {
  return /[\s\u0000-\u001f\u007f-\u009f]/u.test(value);
}

function hasMalformedPercentEscape(value) {
  return /%(?![0-9A-Fa-f]{2})/.test(value);
}

function hasUnsafeUrlAuthority(value) {
  const match = value.match(/^https?:\/\/([^/?#]*)/i);
  if (!match) return true;
  try {
    const decoded = decodeURIComponent(match[1]);
    return hasUnsafeUrlWhitespace(decoded) || decoded.includes("\\");
  } catch {
    return true;
  }
}

function hasDecodedUrlRisk(url) {
  try {
    const decodedHost = decodeURIComponent(url.host);
    if (hasUnsafeUrlWhitespace(decodedHost) || decodedHost.includes("\\")) return true;
  } catch {
    return true;
  }
  return hasDecodedUrlWhitespace(url);
}

function hasDecodedUrlWhitespace(url) {
  try {
    return [url.pathname, url.search, url.hash].some((component) => {
      const decoded = decodeURIComponent(component);
      return hasUnsafeUrlWhitespace(decoded) || decoded.includes("\\");
    });
  } catch {
    return true;
  }
}

function setRichText(parent, text) {
  parent.replaceChildren();
  appendRichText(parent, text);
}

function appendRichText(parent, text) {
  String(text || "").split(/(\*\*[^*]+\*\*)/g).filter(Boolean).forEach((part) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      const strong = document.createElement("strong");
      strong.textContent = part.slice(2, -2);
      parent.appendChild(strong);
    } else {
      parent.appendChild(document.createTextNode(part));
    }
  });
}

function setModalTitleLink(title, url) {
  const titleLink = $("#modalTitle");
  const safeUrl = safeExternalUrl(url);
  titleLink.textContent = title;
  if (safeUrl) {
    titleLink.href = safeUrl;
    titleLink.referrerPolicy = "strict-origin-when-cross-origin";
    titleLink.removeAttribute("aria-disabled");
  } else {
    titleLink.removeAttribute("href");
    titleLink.setAttribute("aria-disabled", "true");
  }
}

function closeModal() {
  const modal = $("#modal");
  if (modal.classList.contains("hidden")) return;
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  setBackgroundInert(false);
  document.body.style.overflow = state.bodyOverflowBeforeModal ?? "";
  state.bodyOverflowBeforeModal = null;
  state.modalReturnFocus?.focus?.();
  state.modalReturnFocus = null;
}

function setBackgroundInert(isInert) {
  const modal = $("#modal");
  Array.from(document.body.children).forEach((element) => {
    if (element === modal) return;
    if (isInert) {
      // Preserve pre-existing inert state: decorative or asynchronously loaded
      // content can already be intentionally unavailable before a modal opens.
      element.dataset.modalPreviousInert = String(element.inert);
      element.inert = true;
      if (element.hasAttribute("aria-hidden")) {
        element.dataset.modalPreviousAriaHidden = element.getAttribute("aria-hidden") || "";
      }
      element.setAttribute("aria-hidden", "true");
    } else {
      element.inert = element.dataset.modalPreviousInert === "true";
      delete element.dataset.modalPreviousInert;
      if (Object.hasOwn(element.dataset, "modalPreviousAriaHidden")) {
        element.setAttribute("aria-hidden", element.dataset.modalPreviousAriaHidden);
        delete element.dataset.modalPreviousAriaHidden;
      } else {
        element.removeAttribute("aria-hidden");
      }
    }
  });
}

function keepFocusInModal(event) {
  const modal = $("#modal");
  if (modal.classList.contains("hidden") || event.key !== "Tab") return;
  const focusable = Array.from(modal.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])"));
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (!modal.contains(document.activeElement)) {
    event.preventDefault();
    (event.shiftKey ? last : first).focus();
  } else if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function wireEvents() {
  on(".skip-link", "click", focusMainContent);
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
  on(".view-toggle", "keydown", handleViewToggleKeydown);
  document.querySelectorAll("[data-close='modal']").forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
    keepFocusInModal(event);
  });
}

function focusMainContent(event) {
  const main = $("#mainContent");
  if (!main) return;
  event.preventDefault();
  main.focus({ preventScroll: true });
  main.scrollIntoView({ block: "start" });
  if (window.location.hash !== "#mainContent") {
    history.pushState(null, "", "#mainContent");
  }
}

function handleViewToggleKeydown(event) {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  const buttons = [$("#listViewButton"), $("#cardViewButton")].filter(Boolean);
  if (!buttons.length) return;
  event.preventDefault();

  const currentIndex = Math.max(0, buttons.indexOf(event.target));
  const lastIndex = buttons.length - 1;
  let nextIndex = currentIndex;
  if (event.key === "Home") nextIndex = 0;
  if (event.key === "End") nextIndex = lastIndex;
  if (event.key === "ArrowLeft") nextIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
  if (event.key === "ArrowRight") nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;

  const nextMode = buttons[nextIndex]?.id === "cardViewButton" ? "card" : "list";
  setViewMode(nextMode);
  buttons[nextIndex]?.focus();
}

function setViewMode(mode) {
  state.viewMode = mode === "card" ? "card" : "list";
  document.body.classList.toggle("card-mode", state.viewMode === "card");
  document.body.classList.toggle("list-mode", state.viewMode === "list");
  $("#listViewButton")?.classList.toggle("active", state.viewMode === "list");
  $("#cardViewButton")?.classList.toggle("active", state.viewMode === "card");
  $("#listViewButton")?.setAttribute("aria-checked", String(state.viewMode === "list"));
  $("#cardViewButton")?.setAttribute("aria-checked", String(state.viewMode === "card"));
  $("#listViewButton")?.setAttribute("tabindex", state.viewMode === "list" ? "0" : "-1");
  $("#cardViewButton")?.setAttribute("tabindex", state.viewMode === "card" ? "0" : "-1");
}

function renderFilters() {
  renderFilterButtons($("#categoryFilters"), CATEGORY_ORDER, state.category, (value) => { state.category = value; renderFilters(); renderCards(); });
  renderFilterButtons($("#importanceFilters"), IMPORTANCE_ORDER, state.importance, (value) => { state.importance = value; renderFilters(); renderCards(); });
  renderFilterButtons($("#regionFilters"), REGION_ORDER, state.region, (value) => { state.region = value; renderFilters(); renderCards(); });
}

function markDynamicContentReady() {
  // The briefing is populated after the initial document load. Clear busy only
  // after every data-driven region has been rendered so assistive technology
  // does not announce three partially populated sections as complete.
  ["#summaryList", "#deepDiveList", "#newsGrid"].forEach((selector) => {
    $(selector)?.setAttribute("aria-busy", "false");
  });
}

async function boot() {
  try {
    // Revalidate cached weekly data instead of bypassing the HTTP cache entirely.
    // This preserves freshness on each load while allowing a lightweight 304 response.
    const response = await fetch("data/weekly-news.json", { cache: "no-cache" });
    if (!response.ok) throw new Error(`weekly-news.json load failed: ${response.status}`);
    state.data = await response.json();
    loadReadItems();
    updateHeader();
    renderSummary();
    renderDeepDives();
    renderFilters();
    renderCards();
    markDynamicContentReady();
    wireEvents();
    setViewMode("list");
  } catch (error) {
    console.error(error);
    const main = document.createElement("main");
    main.className = "panel";
    const heading = document.createElement("h1");
    heading.textContent = "데이터를 불러오지 못했습니다";
    const message = document.createElement("p");
    message.textContent = error.message;
    main.append(heading, message);
    document.body.replaceChildren(main);
  }
}

boot();
