const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "This is QlabeHabib ",
  "Hope this Works!",
  "Welcome to Apna College",
  "All the Best Guys",
];

button.addEventListener("click", () => showMessage());

function showMessage() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerText = getRandonMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandonMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
