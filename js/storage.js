export function getNotes(callback) {
  chrome.storage.local.get(["notes"], (res) => {
    callback(res.notes || []);
  });
}

export function saveNotes(notes, callback) {
  chrome.storage.local.set({ notes }, () => {
    if (chrome.runtime.lastError) {
      console.error("Failed to save notes:", chrome.runtime.lastError.message);
    }
    if (callback) callback();
  });
}