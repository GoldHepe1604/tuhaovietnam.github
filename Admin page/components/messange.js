import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3TQrOgzfqhGGHGRQSEq10rl5m3dgxI_g",
  authDomain: "proud-of-vietnam-a0c81.firebaseapp.com",
  databaseURL: "https://proud-of-vietnam-a0c81-default-rtdb.firebaseio.com",
  projectId: "proud-of-vietnam-a0c81",
  storageBucket: "proud-of-vietnam-a0c81.appspot.com",
  messagingSenderId: "568994646589",
  appId: "1:568994646589:web:eedf22cba2d0d4aa07f854",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export class message {
  render() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Tin nhắn từ người dùng</a>
          </li>
        </ol><div class="container">
        <h2>Thông báo tin nhắn:</h2>`;

    const html = `<!-- Breadcrumbs-->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Tin nhắn từ người dùng</a>
          </li>
        </ol><div class="container">
        <h2>Thông báo tin nhắn:</h2>`;
    const getusersData = () => {
      return new Promise((resolve, reject) => {
        const usersDataRef = ref(database, "/message");
        onValue(
          usersDataRef,
          (snapshot) => {
            const data = snapshot.val();
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      });
    };

    const fetchData = async () => {
      try {
        const data = await getusersData();
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const rendermessage = (data) => {
      var htmldata = "";
      console.log(data);
      if (data == null) {
        return `<p style="font-size:1.5em"> Chưa có tin nhắn mới </p>`;
      }
      for (var name in data) {
        const messages = data[name];
        for (var messageId in messages) {
          const message = messages[messageId].message;
          htmldata += `
                <div class="message">
                    <div class="sender">Người gửi: ${name}</div>
                    <p>${message}</p>
                    <button class="delete-button1">Xóa</button>
                </div>
            `;
        }
      }

      return htmldata;
    };

    fetchData()
      .then((data) => {
        var id,
          htmldata = rendermessage(data);
        content.innerHTML += htmldata;
        const deleteButtons = document.getElementsByClassName("delete-button1");
        var i = 0;
        for (var name in data) {
          const messages = data[name];
          for (var messageId in messages) {
            (function (name, messageId) {
              deleteButtons[i].addEventListener("click", () => {
                remove(ref(database, "message/" + name + "/" + messageId))
                  .then(() => {
                    console.log("đã xóa");
                    $.notify("Đã xóa tin nhắn", "success");
                  })
                  .catch((errol) => {
                    console.log("có lỗi xảy ra ", errol);
                  });
              });
            })(name, messageId);
            i++;
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
