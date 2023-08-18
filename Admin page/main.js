import { list_account } from "./components/list_account.js";
import { message } from "./components/messange.js";

const List_account = new list_account();
const messages = new message();
List_account.render();

const accountsbtn = document.getElementById("accounts");
const messagebtn = document.getElementById("message");

accountsbtn.addEventListener("click", () => {
  List_account.render();
});

messagebtn.addEventListener("click", () => {
  messages.render();
});

document.getElementById("run").addEventListener("click", function () {
  const text = document.getElementById("Search").value;
  if (text.toLowerCase() === "trang chủ" || text.toLowerCase() === "home")
    window.location.href = "../index.html";
  else $.notify(`Không tìm thấy từ khóa "${text}"`);
});

document
  .getElementById("Search")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();
      const text = document.getElementById("Search").value;
      if (text.toLowerCase() === "trang chủ" || text.toLowerCase() === "home") {
        window.location.href = "../index.html"; 
      } else $.notify(`Không tìm thấy từ khóa "${text}"`);
    }
  });
