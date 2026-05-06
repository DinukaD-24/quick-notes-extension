const textarea = document.getElementById("note");
const button = document.getElementById("save");

// Load saved note
chrome.storage.local.get(["note"], (result) => {
  if (result.note) {
    textarea.value = result.note;
  }
});

// Save note
button.addEventListener("click", () => {
  chrome.storage.local.set({ note: textarea.value }, () => {
    alert("Note saved!");
  });
});