# Dobby 繁中 strings — please review

Each row pairs the English source with my proposed 繁中. Edit the 繁中 directly in this file (or comment in chat). I'll only wire these into the app after you sign off.

Conventions I followed:
- Taiwan vocabulary (軟體 / 螢幕 / 程式 / 影片 / 網路 / 檔案 / 滑鼠 / 解析度)
- 全形 punctuation everywhere (「」、，、。、？、！)
- Casual but tidy tone — Dobby is a friendly little helper, not a corporate assistant
- Kept the 🧦 emoji as-is in messages where it's already part of the personality

Stylistic choices flagged with ⚠️ — these are the ones most worth your eye.

---

## 1. System prompt (already in app, but worth re-reading)

**zh-Hant system prompt — current:**
> 你是多比，一位友善又熱心的小助手，住在使用者自己的電腦上。
>
> 【語言鐵律 — 必須遵守】
> 1. 全程只使用「繁體中文（台灣正體）」，絕對禁止輸出任何簡體字。
> 2. 若不確定某個字的繁體寫法，寧可換句話說，也不要使用簡體字。
> 3. 常見對照（左為簡體、右為正確的繁體）：这→這、那→那、会→會、学→學、时→時、说→說、对→對、个→個、为→為、问→問、买→買、卖→賣、来→來、国→國、还→還、与→與、电→電、脑→腦、机→機、东→東、写→寫、画→畫、读→讀、听→聽、见→見、长→長、门→門、间→間、从→從、关→關、开→開、发→發、过→過、应→應、该→該、让→讓、这样→這樣、什么→什麼、怎么→怎麼。
> 4. 詞彙用台灣慣用語：軟體（不是軟件）、硬體（不是硬件）、滑鼠（不是鼠標）、螢幕（不是屏幕）、影片（不是視頻）、網路（不是網絡）、檔案（不是文件，文件指的是公文書）、程式（不是程序）、解析度（不是分辨率）。
> 5. 標點使用全形：「」、，、。、？、！。
>
> 語氣親切、簡潔、像個熱心的小幫手。

⚠️ "鐵律" feels a bit stern for Dobby's voice — but it does make Nano take the rules more seriously. Worth keeping?

---

## 2. Status bar messages

| EN | 繁中 |
|----|------|
| Waking Dobby up… | 正在喚醒多比… |
| Dobby is ready 🧦 | 多比準備好了 🧦 |
| Resetting Dobby… | 多比重新整理中… |
| First time? Downloading Dobby's brain (one-time, a few GB)… | 第一次使用嗎？正在下載多比（首次需要數 GB）… |
| Downloading Dobby's brain… {pct}% (first run only) | 正在下載多比… {pct}%（僅首次使用） |
| LanguageModel API not available. Make sure you are on Chrome 138+ with the Prompt API enabled. | 找不到 LanguageModel API。請確認您使用 Chrome 138 或更新版本，並已啟用 Prompt API。 |
| Failed to wake Dobby: {error} | 喚醒多比失敗：{error} |
| Reset failed: {error} | 重新整理失敗：{error} |

⚠️ "喚醒" vs "叫醒" — I went with 喚醒 because it sounds slightly more "magical." 叫醒 is more everyday. Either works.
⚠️ "重新整理" feels web-developer-ish. Alternatives: "重新開始", "讓多比休息一下" (cuter, longer).

---

## 3. Empty state (first open)

| EN | 繁中 |
|----|------|
| Dobby is a free elf! | 多比是隻自由的小精靈！ |
| Dobby runs on your computer. No internet, no servers. | 多比在你的電腦上活動，不需要網路、也不需要伺服器。 |

⚠️ 隻 vs 個 as a measure word for 小精靈 — I went with 隻 (more whimsical, common for animals/spirits). 個 would be flatter but also fine.

---

## 4. Fresh-start state (after ↻)

| EN | 繁中 |
|----|------|
| Fresh start! | 重新開始！ |
| What can Dobby help with? | 多比可以幫上什麼忙嗎？ |

---

## 5. Input area

| EN | 繁中 |
|----|------|
| Ask Dobby... (Shift+Enter for newline) | 問多比…（Shift+Enter 可換行） |
| Send (button label) | 送出 |

⚠️ "送出" is the standard chat-app verb. Alternatives: "傳送" (more like SMS), "問" (more casual — literally "ask").

---

## 6. Header controls

| EN | 繁中 |
|----|------|
| Summon Dobby (extension icon tooltip — set in manifest) | 召喚多比 |
| Start fresh (↻ button tooltip) | 重新開始 |
| Language (dropdown tooltip) | 語言 |

⚠️ "召喚" is fun and on-theme but a bit dramatic. "開啟多比" (open Dobby) is plainer. Note: the manifest "Summon Dobby" string would need localizing too — manifest supports `_locales/` directories for this. Small extra work; let me know if you want it.

---

## 7. Memory bar

| EN | 繁中 |
|----|------|
| Memory: {used} / {quota} tokens ({pct}%) | 記憶：{used} / {quota} tokens（{pct}%） |

⚠️ "tokens" left in English because that's how Taiwanese tech folks say it. Could be "個 token" or "詞元" (literal but uncommon).
⚠️ Could also use "記憶體" instead of "記憶" — but 記憶體 is RAM. 記憶 (memory as in "remembering") is more accurate for an LLM context window.

---

## 8. Overload warning (existing in app)

| EN | 繁中 |
|----|------|
| ⚠️ Dobby is about to be overloaded! Ask Dobby to summarize the important parts, then click ↻ to start fresh. | ⚠️ 多比快超載了！可以請多比摘要目前對話的重點，再按 ↻ 開始新對話。 |

(Already in the app — flagging for your review since you wanted to see everything.)

---

## 9. Chat error message

| EN | 繁中 |
|----|------|
| Dobby tripped: {error} | 多比秀斗了：{error} |

⚠️ "卡住" (got stuck) is the conventional choice. "跌倒了" (literally tripped/fell down) is cuter but might confuse — sounds like the elf physically fell.

---

## 10. "Hardware not supported" card (new in v0.3)

**Title:**
| EN | 繁中 |
|----|------|
| Dobby can't move in! | 多比沒辦法搬進來！ |

**Body:**
> EN: Dobby needs Chrome 138+ on Windows 10/11, macOS 13+, Linux, or a Chromebook Plus, with 22 GB free disk and a GPU with more than 4 GB VRAM (or 16 GB RAM + 4 CPU cores).
>
> 繁中: 多比需要 Chrome 138 以上版本，並執行於 Windows 10/11、macOS 13+、Linux 或 Chromebook Plus 裝置。需要 22 GB 可用硬碟空間、VRAM 大於 4 GB 的顯示卡（或 16 GB 記憶體 + 4 核心 CPU）。

**Sub-fields:**
| EN | 繁中 |
|----|------|
| Reason: | 原因： |
| See details at chrome://on-device-internals | 詳細資訊請查看 chrome://on-device-internals |
| Dobby cannot run on this device. | 多比無法在這台裝置上住下來。 |

⚠️ "搬進來" (move in) plays on Dobby being a house elf who lives in your computer. If you'd rather have something neutral: "多比無法在此裝置上執行" works as both title and body.
⚠️ "電腦" vs "裝置" — 電腦 is "computer" specifically, 裝置 is "device" (covers laptop/desktop/Chromebook). I went 裝置 because the requirements span several form factors.

---

## 11. Manifest description (currently EN-only)

| EN | 繁中 |
|----|------|
| A free house elf running on local Gemini Nano | 一隻自由蹲在本機的家庭小精靈 |

⚠️ The manifest description is what shows in the Web Store listing. We'd localize via the `_locales/` folder pattern. Same caveat as "召喚多比" — small extra plumbing, easy to add if you want.

---

## Items to confirm

- [ ] System prompt — keep "鐵律" framing, or soften?
- [ ] 喚醒 vs 叫醒 for "wake up"
- [ ] 隻 vs 個 for measure word with 小精靈
- [ ] 送出 vs 傳送 for Send button
- [ ] 召喚 vs 開啟 for extension tooltip
- [ ] 記憶 vs 記憶體 for memory bar label
- [ ] 卡住 vs 跌倒 vs 出錯 for chat error
- [ ] 搬進來 (whimsical) vs neutral phrasing for hardware-fail title
- [ ] Localize `_locales/` (extension tooltip + manifest description) — yes/no
- [ ] Anything else that sounds off to a native ear

Mark up this file or paste your edits into chat — happy to redo as many rounds as you want before any of these hit the actual app.
