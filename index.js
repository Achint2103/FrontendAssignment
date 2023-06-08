let draggedItem;

function dragStart(event) {
  draggedItem = event.target;
  event.dataTransfer.setData("text/plain", event.target.id);
  event.dataTransfer.effectAllowed = "move";
  event.target.classList.add("dragging");
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const droppedItem = document.getElementById(
    event.dataTransfer.getData("text")
  );
  event.target.appendChild(droppedItem);
  draggedItem.classList.remove("dragging");
  showSuccessMessage();
}

function showSuccessMessage() {
  const successMessage = document.createElement("p");
  successMessage.textContent = "Item dropped successfully!";
  successMessage.classList.add("success-message");
  document.getElementById("right-container").appendChild(successMessage);
}

function resetContainers() {
  const leftContainer = document.getElementById("left-container");
  const rightContainer = document.getElementById("right-container");
  leftContainer.innerHTML = `
    <h3>Available Items</h3>
    <div id="item1" class="draggable-item" draggable="true" ondragstart="dragStart(event)">Item 1</div>
    <div id="item2" class="draggable-item" draggable="true" ondragstart="dragStart(event)">Item 2</div>
    <div id="item3" class="draggable-item" draggable="true" ondragstart="dragStart(event)">Item 3</div>
  `;
  rightContainer.innerHTML = "<h3>Selected Items</h3>";
}
