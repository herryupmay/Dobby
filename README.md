# Dobby

> *Dobby is a free elf!*

A Chrome extension that drops a small chat assistant into the side panel. Dobby runs entirely on your machine using Chrome's built-in Gemini Nano model — no servers, no API keys, no network round-trips for the chat itself.

## What it is

Dobby is a single-purpose side-panel app. Click the toolbar icon, a panel slides in, you talk to a local LLM. That's it. The point of the project is to show how slim a useful on-device assistant can be when you lean on Chrome's [Prompt API](https://developer.chrome.com/docs/ai/prompt-api) (the `LanguageModel` global).

Highlights:

- Runs offline once the model is downloaded.
- English and Traditional Chinese (台灣正體) UI and system prompts.
- Memory-pressure indicator so you know when to start a fresh chat.
- Markdown rendering via [marked](https://github.com/markedjs/marked) (vendored locally — extensions can't pull from CDNs at runtime).

## Requirements

Dobby is only as available as the underlying Prompt API, which means:

- Chrome **138 or newer**
- One of: Windows 10/11, macOS 13+, Linux, or a Chromebook Plus
- **22 GB** of free disk for the model (first-run download)
- A GPU with **more than 4 GB VRAM**, *or* 16 GB RAM and a 4-core CPU

If the API isn't available, Dobby will tell you why and point you at `chrome://on-device-internals`.

## Install (load unpacked)

1. Clone this repo.
2. Open `chrome://extensions`.
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and select this folder.
5. Pin Dobby to the toolbar and click the icon — the side panel opens.

The first conversation will trigger a one-time model download. Subsequent runs are instant.

## File layout

```
manifest.json     Manifest V3 declaration
background.js     Service worker — opens the side panel on icon click
sidepanel.html    Panel markup
sidepanel.css     Panel styles
sidepanel.js      App logic: i18n, session, streaming, usage meter
marked.min.js     Vendored Markdown renderer
icons/            Toolbar and store icons (dobby-16/32/48/128, .svg)
```

`marked.min.js` is vendored on purpose — Chrome extensions can't fetch scripts from a CDN at runtime, and pulling it in via a build step would be overkill for a project this size. The file is unmodified upstream; see its header for the original license.

## Development notes

There is no build step. Edit the source, reload the extension from `chrome://extensions`, and reopen the side panel.

To package a release for the Chrome Web Store, zip everything *except* the items listed in `.gitignore` — the `.zip` files in the repo root are previous release artifacts (also gitignored). A minimal one-liner:

```bash
zip -r dobby-v0.X.zip . -x '*.git*' '*.zip' 'icons/Screenshot*' 'README.md'
```

### What's intentionally not committed

The `.gitignore` keeps a few things out of source control:

- Release `.zip` artifacts (regenerated per release)
- `icons/Screenshot*` — Chrome Web Store listing screenshots, not runtime assets
- OS junk (`.DS_Store`, `Thumbs.db`, `desktop.ini`)
- Editor folders (`.vscode/`, `.idea/`) and swap files
- `.env` / `.env.local` (Dobby doesn't use these today, but it's a guard for later)

## Customize

Click the **⚙** button in the header to open the settings panel and write your own system prompt. Saving replaces Dobby's built-in personality with whatever you put in the box and starts a fresh chat. "Reset to default" clears the override and brings the built-in prompt back. The override is one global string — it wins for both English and 繁中 modes.

Pre-filling the textarea shows you whatever prompt is *currently in effect*, so you can edit Dobby's defaults rather than starting from scratch.

## Privacy

Dobby never sends your messages anywhere. The only storage it touches is `localStorage` (inside the extension's own sandbox), which holds your language choice and your custom system prompt (if you set one). There is no telemetry.

## License

CC0 1.0 Universal

## Acknowledgements

The "free elf" framing is a Harry Potter reference. The actual model work is all Chrome and Google's Gemini Nano team; Dobby is just a small UI on top.
