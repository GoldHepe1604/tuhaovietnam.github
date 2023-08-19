import { SHA256 } from "../class/sha256.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  set,
  update,
  ref,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const auth = getAuth();

//Thêm định dạng notify
$.notify.addStyle("errol-login-signup", {
  html: "<span><i class='bi bi-exclamation-circle-fill'></i> <span data-notify-text></span></span>",
  classes: {
    base: {
      "white-space": "nowrap",
      "background-color": "#dc3545", // Màu đỏ đậm
      color: "#fff", // Màu chữ trắng
      padding: "10px",
      "border-radius": "5px",
      "font-weight": "bold" // Đậm chữ
    },
  },
});

$.notify.addStyle("success-login-signup", {
  html: "<span><i class='bi bi-check-circle-fill'></i> <span data-notify-text></span></span>",
  classes: {
    base: {
      "white-space": "nowrap",
      "background-color": "#28a745", // Màu xanh lá cây đậm
      color: "#fff", // Màu chữ trắng
      padding: "10px",
      "border-radius": "5px",
      "font-weight": "bold" // Đậm chữ
    },
  },
});

const Sha256 = new SHA256();
// Tạo nút bấm
export function show_hide_pass(icon, password) {
  icon.classList.toggle("bi-eye-fill");
  icon.classList.toggle("bi-eye-slash-fill");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

// Kiểm tra tên đăng nhập có hợp lệ hay không (đăng kí)
export function check_username(username, check_username) {
  const regex = /[!@#$%^&*(),.?":{}|<>]/;
  if (username === "") {
    check_username.innerHTML = "Tên không được để trống";
    return 0;
  } else {
    if (username.length < 4 || username.length > 20) {
      check_username.innerHTML = "Tên chỉ được có từ 4 đến 20 kí tự";
      return 0;
    }
    if (regex.test(username)) {
      check_username.innerHTML = "Tên không được chứa kí tự đặc biệt";
      return 0;
    }
    check_username.innerHTML = "";
    return 1;
  }
}

export function check_password(password, repassword, strength_pw, same_pw) {
  if (password === "") {
    strength_pw.innerHTML = "Mật khẩu không được để trống";
    return 0;
  } else {
    if (!/\d/.test(password)) {
      strength_pw.innerHTML = "Mật khẩu phải có ít nhất một kí tự số";
      return 0;
    }
    if (!/[a-zA-Z]/.test(password)) {
      strength_pw.innerHTML = "Mật khẩu phải có ít nhất một kí tự chữ cái";
      return 0;
    }
    strength_pw.innerHTML = "";
    return 1;
  }
}

export function validatePassword(password, repassword, same) {
  if (repassword === "") {
    same.innerHTML = "Nhập lại mật khẩu không được để trống";
    return 0;
  } else {
    if (password != repassword) {
      same.innerHTML = "Mật khẩu và nhập lại mật khẩu không trùng khớp";
      return 0;
    }
    same.innerHTML = "";
    return 1;
  }
}
//Đăng kí
export async function add_account(username, email, password, load_page) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (!load_page) var nd = "chưa từng đăng nhập";
      else var nd = new Date().toString();
      // ...
      set(ref(database, "users/" + user.uid), {
        username: username,
        email: email,
        password: Sha256.base64_encode(password),
        last_login: nd,
      });
      console.log(load_page);
      if (load_page) {
        $.notify("Đăng ký thành công", {
          style: 'success-login-signup',
          className: 'base'
        });
        setTimeout(function () {
          window.location.href = "../index.html";
        }, 2000); // Độ trễ là 2000 milliseconds (2 giây)
      } else {
        $.notify("Tạo tài khoản mới thành công", "success");
      }
      return 1;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case "auth/invalid-email":
          $.notify("Địa chỉ email không hợp lệ. Vui lòng kiểm tra lại.", {
            style: 'errol-login-signup',
            className: 'base'
          });
          return 0;
        case "auth/weak-password":
          $.notify("Mật khẩu không hợp lệ. Vui lòng kiểm tra lại.", {
            style: 'errol-login-signup',
            className: 'base'
          });
          return 0;
        case "auth/email-already-in-use":
          $.notify(
            "Tài khoản đã tồn tại. Vui lòng sử dụng địa chỉ email khác hoặc đăng nhập nếu bạn đã có tài khoản.",
            {
              style: 'errol-login-signup',
              className: 'base'
            }
          );
          return 0;
        case "auth/network-request-failed":
          $.notify(
            "Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối internet của bạn và thử lại sau.",
            {
              style: 'errol-login-signup',
              className: 'base'
            }
          );
          return 0;
        case "auth/missing-email":
          $.notify("Email không được để trống", {
            style: 'errol-login-signup',
            className: 'base'
          });
          return 0;
        default:
          console.log(errorMessage);
          return 0;
      }
    });
}

//Đăng nhập
export async function check_account(email, password) {
  if (email == "Admin@123.com" && password == "Admin123") {
    $.notify("Đăng nhập thành công", {
      style: 'success-login-signup',
      className: 'base'
    });
    setTimeout(function () {
      window.location.href = "../Admin page/index.html";
    }, 2000); 
    return 1;
  }
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const nd = new Date();
      // ...
      update(ref(database, "users/" + user.uid), {
        last_login: nd.toString(),
      });
      $.notify("Đăng nhập thành công", {
        style: 'success-login-signup',
        className: 'base'
      });
      setTimeout(function () {
        window.location.href = "../index.html";
      }, 2000); // Độ trễ là 2000 milliseconds (2 giây)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      switch (errorCode) {
        case "auth/invalid-email":
          $.notify("Địa chỉ email không hợp lệ.", {
            style: 'errol-login-signup',
            className: 'base'
          });
          return 0;
        case "auth/user-disabled":
          $.notify("Tài khoản của bạn đã bị tạm ngưng hoạt động.", {
            style: 'errol-login-signup',
            className: 'base'
          });
          return 0;
        case "auth/user-not-found":
          $.notify("Không tìm thấy người dùng với địa chỉ email này.", {
            style: 'errol-login-signup',
            className: 'base'
          });
          return 0;
        case "auth/wrong-password":
          $.notify("Mật khẩu không đúng.", {
            style: 'errol-login-signup',
            className: 'base'
          });
          return 0;
        case "auth/missing-password":
          $.notify("Hãy nhập mật khẩu.", {
            style: 'errol-login-signup',
            className: 'base'
          });
          return 0;
        default:
          console.log(errorMessage);
          return 0;
      }
      console.log(email, password);
    });
}
