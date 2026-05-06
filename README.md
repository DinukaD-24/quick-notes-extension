# 📝 NoteFlow – Smart Chrome Notes

A modern, lightweight Chrome browser extension for quick note-taking — directly from your browser toolbar. Supports multiple notes, real-time search, and persistent local storage. No account or internet connection required.

---

## ✨ Features

- **Quick note-taking** — Write and add notes instantly from the browser popup
- **Multiple notes** — Store as many notes as you need, each with a timestamp
- **Real-time search** — Filter notes as you type — search persists even when deleting
- **Delete notes** — Remove individual notes with one click
- **Persistent storage** — Notes survive browser restarts using Chrome's local storage (10MB capacity)
- **XSS-safe** — User input is never injected as raw HTML
- **Minimal & fast** — No backend, no login, no dependencies

---

## 🚀 Getting Started

### Installation (Load as Unpacked Extension)

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/DinukaD-24/quick-notes-extension.git
   ```

2. Open **Google Chrome** and navigate to:
   ```
   chrome://extensions/
   ```

3. Enable **Developer Mode** (toggle in the top-right corner).

4. Click **"Load unpacked"** and select the project folder (`quick-notes-extension`).

5. The **NoteFlow** extension icon will appear in your Chrome toolbar. Click it to start taking notes!

---

## 🗂️ Project Structure

```
quick-notes-extension/
├── manifest.json        # Chrome extension config (Manifest V3)
├── popup.html           # Extension popup UI
├── css/
│   └── style.css        # Dark-themed popup styles
└── js/
    ├── app.js           # Main entry — note logic, search, delete
    ├── storage.js       # Chrome local storage read/write helpers
    └── ui.js            # DOM rendering — builds note cards safely
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML | Popup interface structure |
| CSS | Dark-themed styling with responsive layout |
| JavaScript (ES Modules) | Modular note logic and Chrome API interaction |
| Chrome Storage API (`local`) | Persistent local note storage (10MB limit) |
| Manifest V3 | Latest Chrome extension standard |

---

## 🔒 Security

- All user note text is rendered using `textContent` — **never `innerHTML`** — preventing XSS attacks
- Notes are stored only on the user's device via `chrome.storage.local`
- No external requests, no analytics, no tracking

---

## 📌 Permissions

| Permission | Reason |
|------------|--------|
| `storage` | Save and retrieve notes locally on your device |

No data is sent anywhere. Everything stays on your machine.

---

## 🐛 Bug Fixes (v2.0)

- **Storage quota fix** — Switched from `chrome.storage.sync` (8KB limit) to `chrome.storage.local` (10MB limit) with error handling
- **XSS fix** — Replaced raw `innerHTML` injection with safe DOM construction using `textContent`
- **Search-delete fix** — Deleting a note while searching no longer resets the search filter
- **CSS overflow fix** — Added `box-sizing: border-box` globally to prevent inputs from overflowing the 300px popup

---

## 🔮 Future Improvements

- [ ] Edit existing notes inline
- [ ] Export notes as `.txt` or `.md`
- [ ] Dark / light mode toggle
- [ ] Pin important notes to the top
- [ ] Keyboard shortcut to open popup

---

## 👤 Author

**Dinuka D**  
GitHub: [@DinukaD-24](https://github.com/DinukaD-24)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
