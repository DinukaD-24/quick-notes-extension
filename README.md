# 📝 NoteFlow — Quick Notes Chrome Extension

A lightweight Chrome browser extension that lets you jot down, save, and search notes directly from your browser toolbar — no account, no internet connection required.

---

## ✨ Features

- **Quick note-taking** — Write notes instantly from the browser popup
- **Add multiple notes** — Organize your thoughts with multiple note entries
- **Search notes** — Filter through your notes in real time using the search bar
- **Persistent storage** — Notes are saved using Chrome's local storage, so they survive browser restarts
- **Minimal & fast** — No backend, no login, just notes

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
├── manifest.json     # Chrome extension configuration (Manifest V3)
├── popup.html        # Extension popup UI
├── popup.js          # Core logic — save & load notes via Chrome storage
├── css/
│   └── style.css     # Styles for the popup UI
└── js/
    └── app.js        # Additional app logic (modular)
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML | Popup interface structure |
| CSS | Styling the extension popup |
| JavaScript | Note logic and Chrome API interaction |
| Chrome Storage API | Persistent local note storage |
| Manifest V3 | Latest Chrome extension standard |

---

## 📌 Permissions

This extension only requests the `storage` permission — used solely to save your notes locally on your device. No data is sent anywhere.

---

## 🔮 Future Improvements

- [ ] Edit and delete individual notes
- [ ] Export notes as `.txt` or `.md`
- [ ] Dark mode support
- [ ] Note timestamps
- [ ] Keyboard shortcuts

---

## 👤 Author

**Dinuka D**  
GitHub: [@DinukaD-24](https://github.com/DinukaD-24)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
