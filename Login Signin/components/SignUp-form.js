// Thêm thư viện
import {
  add_account,
  check_username,
  check_password,
  show_hide_pass,
  validatePassword,
} from "../function/login-signup.js";
import { SignInForm } from "./SignIn-form.js";

export class SignUpForm {
  render() {
    const form = document.getElementById("sign-up");
    form.innerHTML = `
    <div id="form">
      <h1>ĐĂNG KÝ</h1>
      <input type="text" placeholder="Tên người dùng" id="username">
      <div id="check_username"></div>
      <input type="email" placeholder="Email" id="email">
      <div class="Password">
      <input type="password" placeholder="Mật khẩu" id="password">
      <i class="bi bi-eye-fill" id="icon-eye-in" ></i>
      </div>
      <div id="strength"></div>
      <div class="Password">
      <input type="password" placeholder="Nhập lại mật khẩu" id="repassword">
      </div>
      <div id="same"></div>
      <button id="signup-btn">Đăng ký</button>
  </div>
  `;

    const overlay = document.getElementById("overlay");
    overlay.innerHTML = `
    <div class="overlay-panel overlay-left">
      <h1>Chào mừng bạn đã trở lại</h1>
      <p>Bạn đã có tài khoản? Đăng nhập để tiếp tục</p>
      <button class="ghost" id="signIn-render">Đăng nhập</button>
    </div>
    `;

    const icon = document.getElementById("icon-eye-in");
    icon.addEventListener("click", function () {
      show_hide_pass(icon, password);
    });

    const container = document.getElementById("container");
    const signIn_render = document.getElementById("signIn-render");
    signIn_render.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
      const SignInform = new SignInForm();
      SignInform.render();
    });

    const password = document.getElementById("password");
    const repassword = document.getElementById("repassword");
    const username = document.getElementById("username");
    const check_user = document.getElementById("check_username");
    const strength_pw = document.getElementById("strength");
    const same_pw = document.getElementById("same");
    const email = document.getElementById("email");
    const btn = document.getElementById("signup-btn");
    var check = 0;
    var check_user_value = 0;
    var check_password_value = 0;
    var validatePassword_value = 0;
    username.addEventListener("input", () => {
      check_user_value = check_username(username.value, check_user);
      console.log(check_user_value);
    });
    password.addEventListener("input", () => {
      check_password_value = check_password(
        password.value,
        repassword.value,
        strength_pw,
        same_pw
      );
      console.log(check_password_value);
    });
    repassword.addEventListener("input", () => {
      validatePassword_value = validatePassword(
        password.value,
        repassword.value,
        same_pw
      );
      console.log(validatePassword_value);
    });

    btn.addEventListener("click", () => {
      check = check_user_value + check_password_value + validatePassword_value;
      if (check == 3)
        add_account(username.value, email.value, password.value, true);
      else {
        $.notify("Tên tài khoản hoặc mật khẩu không hợp lệ");
        console.log(check);
      }
    });
  }
}
