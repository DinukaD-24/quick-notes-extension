export function renderNotes(notes, container, onDelete) {
  container.innerHTML = "";

  notes.forEach((note) => {
    const div = document.createElement("div");
    div.className = "note";

    // Safely build DOM — never inject user text into innerHTML (XSS prevention)
    const textDiv = document.createElement("div");
    textDiv.textContent = note.text;

    const small = document.createElement("small");
    small.textContent = note.date;

    const actions = document.createElement("div");
    actions.className = "actions";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.dataset.id = note.id;
    deleteBtn.addEventListener("click", () => {
      onDelete(note.id);
    });

    actions.appendChild(deleteBtn);
    div.appendChild(textDiv);
    div.appendChild(small);
    div.appendChild(actions);

    container.appendChild(div);
  });
}