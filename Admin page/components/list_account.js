import { add_account } from "../../Login Signin/function/login-signup.js";
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

export class list_account {
  render() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <!-- Breadcrumbs-->
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Danh Sách tài khoản</a>
          </li>
        </ol>
        <div id="accounts">
  <table class="account-table" id="account-table">
    <thead>
      <tr>
        <th>Tên người dùng</th>
        <th>Email</th>
        <th>Mật khẩu</th>
        <th>Lần cuối đăng nhập</th>
        <th>Thao tác</th>
      </tr>
    </thead>
  </table>

  <div class="add-account-form">
    <label for="username">Tên người dùng:</label>
    <input type="text" id="username" name="username" placeholder="Nhập tên người dùng" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Nhập địa chỉ email" required>

    <label for="password">Mật khẩu:</label>
    <input type="text" id="password" name="password" placeholder="Nhập mật khẩu" required>

    <button type="submit" id="add">Thêm tài khoản</button>
  </div>
</div>
        `;
    const getusersData = () => {
      return new Promise((resolve, reject) => {
        const usersDataRef = ref(database, "/users");
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

    const table_id = document.getElementById("account-table");
    const create_table = (table_id, usersData) => {
      if (usersData === null) {
        table_id.innerHTML = "<h2>Chưa có tài khoản mới</h2>";
      } else {
        for (var userData in usersData) {
          if (usersData.hasOwnProperty(userData)) {
            var user = usersData[userData];

            // Tạo một hàng mới
            var row = table_id.insertRow();

            // Thêm các ô vào hàng
            var usernameCell = row.insertCell();
            var emailCell = row.insertCell();
            var passwordCell = row.insertCell();
            var lastLoginCell = row.insertCell();
            var actionCell = row.insertCell();

            // Gán giá trị cho các ô
            usernameCell.innerHTML = user.username;
            emailCell.innerHTML = user.email;
            passwordCell.innerHTML = atob(user.password);
            lastLoginCell.innerHTML = user.last_login;
            actionCell.innerHTML = `<td>
            <button class="delete-button">Xóa</button>
          </td>`;
          }
        }
      }
    };

    fetchData()
      .then((data) => {
        //console.log(data);
        create_table(table_id, data);
        if (data != null) {
          var deleteButtons = document.getElementsByClassName("delete-button");
          var i = 0;
          for (var user in data) {
            deleteButtons[i].addEventListener(
              "click",
              (function (user) {
                return function () {
                  remove(ref(database, "users/" + user))
                    .then(() => {
                      console.log("đã xóa");
                      $.notify("Tài khoản đã bị xóa", "success");
                    })
                    .catch((errol) => {
                      console.log("có lỗi xảy ra ", errol);
                    });
                };
              })(user)
            );
            i++;
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
    document.getElementById("add").addEventListener("click", () => {
      const username = document.getElementById("username");
      const email = document.getElementById("email");
      const password = document.getElementById("password");

      if(add_account(username.value, email.value, password.value, 0)){
        username.value = "";
        email.value = "";
        password.value = "";
      };
    });
  }
}
