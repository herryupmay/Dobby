# Chrome Web Store listing — Dobby

Copy each field below into the matching dashboard input. Both English and 繁體中文 versions are included; pick whichever language matches the locale you're filling in (or fill both — the dashboard supports per-locale strings).

---

## Extension name (max 75 chars)

**EN:** Dobby — Local AI Chat
**繁中:** 多比 — 本地 AI 小助手

---

## Short description (max 132 chars)
Shown under your icon in search results.

**EN:**
A free house elf for your browser. Chat with Chrome's built-in Gemini Nano — fully local, no servers, no API keys, no data leaves your machine.

**繁中:**
給瀏覽器的自由小精靈。在側邊欄與 Chrome 內建的 Gemini Nano 對話 — 全程本地運算，不傳資料到任何伺服器。

---

## Detailed description
Markdown is supported in the dashboard.

**EN:**
```
Dobby is a tiny, friendly AI helper that lives in Chrome's side panel and runs entirely on your own computer. It uses Chrome's built-in Gemini Nano model — no API keys, no signups, no cloud round-trip. Your prompts and conversations never leave your device.

What you get:
• A clean side-panel chat that streams replies as they're generated
• Markdown rendering — bullet lists, **bold**, code blocks, tables
• A memory bar showing how full Dobby's context window is, with a warning before it overflows
• A "↻ New" button to start fresh whenever you want
• Language toggle between English and 繁體中文 (Taiwan vocabulary)

Requirements:
• Chrome 138 or newer
• Windows 10/11, macOS 13+, Linux, or Chromebook Plus
• ~22 GB free disk space (Chrome downloads the Gemini Nano model on first use)
• A GPU with more than 4 GB VRAM, OR 16 GB RAM + 4 CPU cores
• Unmetered network for the first model download

Privacy:
Dobby does not collect, transmit, or store any user data. All inference happens locally via Chrome's on-device Gemini Nano. The extension makes zero network requests of its own.

Open source vibes — built as a small, readable Manifest V3 extension. If something breaks or you have ideas, feedback is welcome.
```

**繁中:**
```
多比是一個住在 Chrome 側邊欄的迷你 AI 小幫手，全程在您自己的電腦上執行。它使用 Chrome 內建的 Gemini Nano 模型，不需要 API 金鑰、不需要註冊帳號，所有對話完全不會離開您的裝置。

主要功能：
• 簡潔的側邊欄聊天介面，逐字串流輸出
• 支援 Markdown 排版 — 條列清單、**粗體**、程式碼區塊、表格
• 記憶條顯示目前的對話上下文使用量，超載前會提醒
• 「↻ 新對話」按鈕，隨時可以重新開始
• 語言切換：繁體中文（台灣用語）／English

系統需求：
• Chrome 138 或更新版本
• Windows 10/11、macOS 13+、Linux 或 Chromebook Plus
• 約 22 GB 可用硬碟空間（Chrome 首次使用時會下載 Gemini Nano 模型）
• 顯示卡 VRAM 大於 4 GB，或 16 GB 記憶體 + 4 核心 CPU
• 首次下載模型時需要未限流的網路連線

隱私說明：
多比不會收集、傳送或儲存任何使用者資料。所有推論都透過 Chrome 內建的 Gemini Nano 在本機執行，擴充功能本身不會發出任何網路請求。

以小巧、易讀的 Manifest V3 擴充功能打造。歡迎回報問題或提供建議。
```

---

## Category

**Productivity**

---

## Single purpose statement
Required field — explain in one sentence.

**EN:**
A side-panel chat assistant that lets users converse with Chrome's built-in on-device Gemini Nano model.

**繁中:**
讓使用者透過側邊欄與 Chrome 內建的 Gemini Nano 模型對話的本機 AI 聊天助手。

---

## Permissions justification
For each permission requested, explain why it's needed.

**`sidePanel`:**
Used to render Dobby's chat interface in Chrome's side panel UI. This is the only surface the extension uses — there is no popup or content script.

---

## Privacy practices

**Does this extension collect or use user data?** → **No**

If the form asks about specific data categories, all answers are **No**:
- Personally identifiable information: No
- Health information: No
- Financial information: No
- Authentication information: No
- Personal communications: No
- Location: No
- Web history: No
- User activity: No
- Website content: No

**Certifications (check all that apply):**
- ☑ I do not sell or transfer user data to third parties, outside of approved use cases.
- ☑ I do not use or transfer user data for purposes that are unrelated to my item's single purpose.
- ☑ I do not use or transfer user data to determine creditworthiness or for lending purposes.

**Privacy policy URL:** Not required for extensions that don't collect data, but optional. If you want one, host a short page anywhere (GitHub Pages, a Notion public page, etc.) saying "Dobby does not collect, store, or transmit any user data. All AI inference happens locally on the user's own device using Chrome's built-in Gemini Nano."

---

## Visibility

**Unlisted** — anyone with the link can install, but it won't appear in Chrome Web Store search.

(You can flip this to Public later if you decide to.)

---

## Distribution regions

**All regions** — there's no reason to restrict it.

---

## Screenshots
You need at least one. Suggested shots (1280×800 PNG or JPG):

1. **Hero**: side panel open with a real chat — user asks something, Dobby replies with a markdown-formatted answer (bullets/code).
2. **繁中 mode**: same shot but in Traditional Chinese.
3. **Memory bar**: a longer conversation with the memory bar partially full (shows the unique "won't run out unexpectedly" feature).
4. **Empty state**: panel just opened, "Dobby is a free elf!" message visible.

You take these by opening the side panel, framing what you want, and using a screenshot tool (Win+Shift+S on Windows, Cmd+Shift+4 on Mac). Crop to the panel + a bit of context, then resize to 1280×800.

---

## Promotional images (optional but boosts approval / discoverability)

- **Small promo tile:** 440×280 PNG. Just the icon + name on a colored background works.
- **Marquee:** 1400×560 — only needed if you go Public and want a featured spot. Skip for unlisted.

---

## A note on the name "Dobby"

"Dobby" and "house elf" are characters/concepts from the Harry Potter franchise (Warner Bros). Chrome Web Store reviewers don't typically enforce trademark issues unless a complaint is filed, and many extensions use playful character references this way. For an unlisted personal share, this is almost certainly fine. If you ever decide to publish publicly, consider one of:
- Renaming to something original (e.g. "Nano Buddy", "Local Helper", "Pocket Elf")
- Keeping the name but changing the icon to be unmistakably your own design
- Adding "(unofficial fan project, not affiliated with Warner Bros)" somewhere in the description

Not urgent for now — just flagging it.
