export function getNotes(callback) {
  chrome.storage.sync.get(["notes"], (res) => {
    callback(res.notes || []);
  });
}

export function saveNotes(notes) {
  chrome.storage.sync.set({ notes });
}