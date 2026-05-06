import { getNotes, saveNotes } from "./storage.js";
import { renderNotes } from "./ui.js";

const input = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const container = document.getElementById("notesContainer");
const search = document.getElementById("search");

let notes = [];

// Load notes
getNotes((storedNotes) => {
  notes = storedNotes;
  renderNotes(notes, container, deleteNote);
});

// Add note
addBtn.addEventListener("click", () => {
  if (!input.value.trim()) return;

  const newNote = {
    id: Date.now(),
    text: input.value,
    date: new Date().toLocaleString()
  };

  notes.unshift(newNote);
  saveNotes(notes);
  renderNotes(notes, container, deleteNote);

  input.value = "";
});

// Delete note
function deleteNote(id) {
  notes = notes.filter(n => n.id !== id);
  saveNotes(notes);
  renderNotes(notes, container, deleteNote);
}

// Search notes
search.addEventListener("input", () => {
  const query = search.value.toLowerCase();

  const filtered = notes.filter(n =>
    n.text.toLowerCase().includes(query)
  );

  renderNotes(filtered, container, deleteNote);
});