export function renderNotes(notes, container, onDelete) {
  container.innerHTML = "";

  notes.forEach((note) => {
    const div = document.createElement("div");
    div.className = "note";

    div.innerHTML = `
      <div>${note.text}</div>
      <small>${note.date}</small>
      <div class="actions">
        <button data-id="${note.id}" class="delete">Delete</button>
      </div>
    `;

    container.appendChild(div);
  });

  container.querySelectorAll(".delete").forEach(btn => {
    btn.addEventListener("click", (e) => {
      onDelete(parseInt(e.target.dataset.id));
    });
  });
}