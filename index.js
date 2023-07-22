const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-entires");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function decrement() {
  count -= 1;
  countEl.textContent = count;
}

function save() {
  let countStr = ` ${count} , `;
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
}

function restart() {
   location.reload()
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
saveBtn.addEventListener("click", save);
deleteBtn.addEventListener("click", restart);
