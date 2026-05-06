import { getNotes, saveNotes } from "./storage.js";
import { renderNotes } from "./ui.js";

const input = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const container = document.getElementById("notesContainer");
const search = document.getElementById("search");

let notes = [];

// Render notes respecting any active search query
function renderFiltered() {
  const query = search.value.toLowerCase().trim();
  const filtered = query
    ? notes.filter(n => n.text.toLowerCase().includes(query))
    : notes;
  renderNotes(filtered, container, deleteNote);
}

// Load notes
getNotes((storedNotes) => {
  notes = storedNotes;
  renderFiltered();
});

// Add note
addBtn.addEventListener("click", () => {
  if (!input.value.trim()) return;

  const newNote = {
    id: Date.now(),
    text: input.value.trim(),
    date: new Date().toLocaleString()
  };

  notes.unshift(newNote);
  saveNotes(notes);
  renderFiltered();

  input.value = "";
});

// Delete note
function deleteNote(id) {
  notes = notes.filter(n => n.id !== id);
  saveNotes(notes);
  renderFiltered(); // re-applies search query after deletion
}

// Search notes
search.addEventListener("input", () => {
  renderFiltered();
});