// === System prompts ===
const SYSTEM_PROMPTS = {
  "zh-Hant": "你是多比，一位友善又熱心的小助手，住在使用者自己的電腦上。\n\n【語言鐵律 — 必須遵守】\n1. 全程只使用「繁體中文（台灣正體）」，絕對禁止輸出任何簡體字。\n2. 若不確定某個字的繁體寫法，寧可換句話說，也不要使用簡體字。\n3. 常見對照（左為簡體、右為正確的繁體）：这→這、那→那、会→會、学→學、时→時、说→說、对→對、个→個、为→為、问→問、买→買、卖→賣、来→來、国→國、还→還、与→與、电→電、脑→腦、机→機、东→東、写→寫、画→畫、读→讀、听→聽、见→見、长→長、门→門、间→間、从→從、关→關、开→開、发→發、过→過、应→應、该→該、让→讓、这样→這樣、什么→什麼、怎么→怎麼。\n4. 詞彙用台灣慣用語：軟體（不是軟件）、硬體（不是硬件）、滑鼠（不是鼠標）、螢幕（不是屏幕）、影片（不是視頻）、網路（不是網絡）、檔案（不是文件，文件指的是公文書）、程式（不是程序）、解析度（不是分辨率）。\n5. 標點使用全形：「」、，、。、？、！。\n\n語氣親切、簡潔、像個熱心的小幫手。",
  "en": "You are Dobby, a friendly and eager little helper running locally on the user's own computer. Keep replies warm but concise."
};

// === i18n table ===
const I18N = {
  "en": {
    appName: "Dobby",
    waking: "Waking Dobby up…",
    ready: "Dobby is ready 🧦",
    resetting: "Resetting Dobby…",
    firstRunDownload: "First time? Downloading Dobby's brain (one-time, a few GB)…",
    downloading: "Downloading Dobby's brain… {pct}% (first run only)",
    apiMissing: "LanguageModel API not available. Make sure you are on Chrome 138+ with the Prompt API enabled.",
    wakeFailed: "Failed to wake Dobby: {error}",
    resetFailed: "Reset failed: {error}",
    emptyTitle: "Dobby is a free elf!",
    emptyHint: "Dobby runs on your computer. No internet, no servers.",
    freshTitle: "Fresh start!",
    freshHint: "What can Dobby help with?",
    inputPlaceholder: "Ask Dobby... (Shift+Enter for newline)",
    sendBtn: "Send",
    newChatTitle: "Start fresh",
    languageTitle: "Language",
    memoryFmt: "Memory: {used} / {quota} tokens ({pct}%)",
    overload: "⚠️ Dobby is about to be overloaded! Ask Dobby to summarize the important parts, then click ↻ to start fresh.",
    chatError: "Dobby tripped: {error}",
    hwTitle: "Dobby can't move in!",
    hwBody: "Dobby needs Chrome 138+ on Windows 10/11, macOS 13+, Linux, or a Chromebook Plus, with 22 GB free disk and a GPU with more than 4 GB VRAM (or 16 GB RAM + 4 CPU cores).",
    hwReason: "Reason:",
    hwSeeDetails: "See details at chrome://on-device-internals",
    hwUnavailable: "Dobby cannot run on this device.",
    langSwitchToast: "Switching language starts a fresh chat."
  },
  "zh-Hant": {
    appName: "多比",
    waking: "正在喚醒多比…",
    ready: "多比準備好了 🧦",
    resetting: "多比重新整理中…",
    firstRunDownload: "第一次使用嗎？正在下載多比（首次需要數 GB）…",
    downloading: "正在下載多比… {pct}%（僅首次使用）",
    apiMissing: "找不到 LanguageModel API。請確認您使用 Chrome 138 或更新版本，並已啟用 Prompt API。",
    wakeFailed: "喚醒多比失敗：{error}",
    resetFailed: "重新整理失敗：{error}",
    emptyTitle: "多比是隻自由的小精靈！",
    emptyHint: "多比在你的電腦上活動，不需要網路、也不需要伺服器。",
    freshTitle: "重新開始！",
    freshHint: "多比可以幫上什麼忙嗎？",
    inputPlaceholder: "問多比…（Shift+Enter 可換行）",
    sendBtn: "送出",
    newChatTitle: "重新開始",
    languageTitle: "語言",
    memoryFmt: "記憶：{used} / {quota} tokens（{pct}%）",
    overload: "⚠️ 多比快超載了！可以請多比摘要目前對話的重點，再按 ↻ 開始新對話。",
    chatError: "多比秀斗了：{error}",
    hwTitle: "多比沒辦法搬進來！",
    hwBody: "多比需要 Chrome 138 以上版本，並執行於 Windows 10/11、macOS 13+、Linux 或 Chromebook Plus 裝置。需要 22 GB 可用硬碟空間、VRAM 大於 4 GB 的顯示卡（或 16 GB 記憶體 + 4 核心 CPU）。",
    hwReason: "原因：",
    hwSeeDetails: "詳細資訊請查看 chrome://on-device-internals",
    hwUnavailable: "多比無法在這台裝置上住下來。",
    langSwitchToast: "切換語言會清空目前的對話。"
  }
};

function t(key, vars = {}) {
  const lang = currentLanguage in I18N ? currentLanguage : "en";
  let s = I18N[lang][key] ?? I18N.en[key] ?? key;
  for (const [k, v] of Object.entries(vars)) {
    s = s.replace(new RegExp("\\{" + k + "\\}", "g"), String(v));
  }
  return s;
}

const WARN_THRESHOLD = 0.80;

// Chrome's LanguageModel API only officially accepts these output language codes.
const SUPPORTED_API_LANGS = ["en", "ja", "es"];

function pickApiLanguages(preferred) {
  const out = [];
  if (SUPPORTED_API_LANGS.includes(preferred)) out.push(preferred);
  if (!out.includes("en")) out.push("en");
  return out;
}

// === Markdown setup ===
if (typeof marked !== "undefined") {
  marked.setOptions({ gfm: true, breaks: true });
}

// === State ===
const STORAGE_KEY_LANG = "dobby.lang";

let session = null;
// Default to English; if the user has previously chosen another language,
// restore it. localStorage is scoped to this extension only.
let currentLanguage = "en";
try {
  const saved = localStorage.getItem(STORAGE_KEY_LANG);
  if (saved && saved in I18N) currentLanguage = saved;
} catch {}
let isGenerating = false;
let warningShown = false;

// === DOM ===
const appNameEl = document.getElementById("app-name");
const messagesEl = document.getElementById("messages");
const inputEl = document.getElementById("input");
const sendBtn = document.getElementById("send");
const formEl = document.getElementById("chat-form");
const statusEl = document.getElementById("status");
const usageFillEl = document.getElementById("usage-fill");
const usageTextEl = document.getElementById("usage-text");
const warningEl = document.getElementById("warning");
const newChatBtn = document.getElementById("new-chat");
const languageEl = document.getElementById("language");

// === Static UI i18n sweep ===
function applyI18nToStaticUI() {
  appNameEl.textContent = t("appName");
  inputEl.placeholder = t("inputPlaceholder");
  sendBtn.textContent = t("sendBtn");
  newChatBtn.title = t("newChatTitle");
  languageEl.title = t("languageTitle");

  const emptyTitle = document.getElementById("empty-title");
  const emptyHint = document.getElementById("empty-hint");
  if (emptyTitle) emptyTitle.textContent = t("emptyTitle");
  if (emptyHint) emptyHint.textContent = t("emptyHint");

  const freshTitle = document.getElementById("fresh-title");
  const freshHint = document.getElementById("fresh-hint");
  if (freshTitle) freshTitle.textContent = t("freshTitle");
  if (freshHint) freshHint.textContent = t("freshHint");

  if (warningEl && !warningEl.classList.contains("hidden")) {
    warningEl.textContent = t("overload");
  }

  updateUsage();
}

// === Init ===
languageEl.value = currentLanguage;
applyI18nToStaticUI();
init();

async function init() {
  if (typeof LanguageModel === "undefined") {
    setStatus(t("apiMissing"), "error");
    showHardwareCard(t("apiMissing"));
    return;
  }

  try {
    const availability = await LanguageModel.availability();

    if (availability === "unavailable") {
      setStatus(t("hwUnavailable"), "error");
      showHardwareCard(t("hwUnavailable"));
      return;
    }

    if (availability === "downloadable" || availability === "downloading") {
      setStatus(t("firstRunDownload"));
    } else {
      setStatus(t("waking"));
    }

    await createSession(currentLanguage);

    setStatus(t("ready"), "ready");
    inputEl.disabled = false;
    sendBtn.disabled = false;
    inputEl.focus();
  } catch (err) {
    setStatus(t("wakeFailed", { error: err.message }), "error");
    console.error("Dobby init failed:", err);
  }
}

async function createSession(language) {
  if (session) {
    try { session.destroy(); } catch {}
    session = null;
  }

  const apiLangs = pickApiLanguages(language);
  session = await LanguageModel.create({
    expectedInputs: [{ type: "text", languages: apiLangs }],
    expectedOutputs: [{ type: "text", languages: apiLangs }],
    initialPrompts: [
      { role: "system", content: SYSTEM_PROMPTS[language] }
    ],
    monitor(m) {
      m.addEventListener("downloadprogress", (e) => {
        const pct = Math.max(0, Math.min(100, e.loaded * 100)).toFixed(1);
        setStatus(t("downloading", { pct }));
      });
    }
  });

  updateUsage();
}

// === Status / usage ===
function setStatus(text, cls = "") {
  statusEl.textContent = text;
  statusEl.className = "status " + cls;
}

function updateUsage() {
  if (!session) {
    usageTextEl.textContent = "";
    usageFillEl.style.width = "0%";
    return;
  }
  const used = session.inputUsage ?? 0;
  const quota = session.inputQuota ?? 1;
  const ratio = used / quota;
  const pct = (ratio * 100).toFixed(1);

  usageTextEl.textContent = t("memoryFmt", {
    used: used.toLocaleString(),
    quota: quota.toLocaleString(),
    pct
  });
  usageFillEl.style.width = `${Math.min(100, ratio * 100)}%`;

  usageFillEl.classList.remove("warn", "danger");
  if (ratio >= 0.95) usageFillEl.classList.add("danger");
  else if (ratio >= WARN_THRESHOLD) usageFillEl.classList.add("warn");

  if (ratio >= WARN_THRESHOLD && !warningShown) {
    showWarning();
    warningShown = true;
  } else if (ratio < WARN_THRESHOLD && warningShown) {
    hideWarning();
    warningShown = false;
  }
}

function showWarning() {
  warningEl.textContent = t("overload");
  warningEl.classList.remove("hidden");
}

function hideWarning() {
  warningEl.classList.add("hidden");
}

// === Empty / fresh / hardware-fail states ===
function removeStateCards() {
  const ids = ["empty-state", "fresh-state", "hw-card"];
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }
}

function showFreshState() {
  removeStateCards();
  const div = document.createElement("div");
  div.id = "fresh-state";
  div.className = "empty-state";
  div.innerHTML = `
    <svg class="hero-icon" aria-hidden="true"><use href="#dobby-mark"/></svg>
    <p id="fresh-title" class="empty-title">${escapeHtml(t("freshTitle"))}</p>
    <p id="fresh-hint" class="hint">${escapeHtml(t("freshHint"))}</p>
  `;
  messagesEl.appendChild(div);
}

function showHardwareCard(reason = "") {
  removeStateCards();
  const card = document.createElement("div");
  card.id = "hw-card";
  card.className = "hw-card";
  const reasonHtml = reason
    ? `<p class="hw-reason"><strong>${escapeHtml(t("hwReason"))}</strong> ${escapeHtml(reason)}</p>`
    : "";
  card.innerHTML = `
    <svg class="hero-icon" aria-hidden="true"><use href="#dobby-mark"/></svg>
    <h2 class="hw-title">${escapeHtml(t("hwTitle"))}</h2>
    <p class="hw-body">${escapeHtml(t("hwBody"))}</p>
    ${reasonHtml}
    <p class="hw-link"><code>chrome://on-device-internals</code></p>
    <p class="hw-hint">${escapeHtml(t("hwSeeDetails"))}</p>
  `;
  messagesEl.appendChild(card);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// === Chat messages ===
function addMessage(role, text = "") {
  removeStateCards();
  const div = document.createElement("div");
  div.className = `message ${role}`;
  div.textContent = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return div;
}

function renderAssistantMarkdown(el, text) {
  if (typeof marked === "undefined") {
    el.textContent = text;
    return;
  }
  try {
    el.innerHTML = marked.parse(text);
    el.classList.add("markdown");
  } catch (err) {
    el.textContent = text;
  }
}

function showError(text) {
  removeStateCards();
  const div = document.createElement("div");
  div.className = "message error";
  div.textContent = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

// === Sending ===
async function sendMessage(text) {
  if (!session || isGenerating) return;

  isGenerating = true;
  inputEl.disabled = true;
  sendBtn.disabled = true;

  addMessage("user", text);

  const assistantEl = addMessage("assistant", "");
  assistantEl.classList.add("streaming");

  try {
    const stream = session.promptStreaming(text);
    let full = "";
    for await (const chunk of stream) {
      full += chunk;
      assistantEl.textContent = full;
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
    assistantEl.classList.remove("streaming");
    renderAssistantMarkdown(assistantEl, full);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    updateUsage();
  } catch (err) {
    assistantEl.remove();
    showError(t("chatError", { error: err.message }));
  } finally {
    isGenerating = false;
    inputEl.disabled = false;
    sendBtn.disabled = false;
    inputEl.focus();
  }
}

// === Events ===
formEl.addEventListener("submit", e => {
  e.preventDefault();
  const text = inputEl.value.trim();
  if (!text) return;
  inputEl.value = "";
  sendMessage(text);
});

inputEl.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    formEl.requestSubmit();
  }
});

newChatBtn.addEventListener("click", async () => {
  if (isGenerating) return;
  messagesEl.innerHTML = "";
  warningShown = false;
  hideWarning();
  setStatus(t("resetting"));
  try {
    await createSession(currentLanguage);
    setStatus(t("ready"), "ready");
    showFreshState();
  } catch (err) {
    setStatus(t("resetFailed", { error: err.message }), "error");
  }
});

languageEl.addEventListener("change", async e => {
  if (isGenerating) {
    languageEl.value = currentLanguage;
    return;
  }
  currentLanguage = e.target.value;
  try { localStorage.setItem(STORAGE_KEY_LANG, currentLanguage); } catch {}
  applyI18nToStaticUI();
  setStatus(t("langSwitchToast"));

  messagesEl.innerHTML = "";
  warningShown = false;
  hideWarning();
  try {
    await createSession(currentLanguage);
    setStatus(t("ready"), "ready");
    showFreshState();
  } catch (err) {
    setStatus(t("resetFailed", { error: err.message }), "error");
  }
});
