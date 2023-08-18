import { show_hide_pass, check_account } from "../function/login-signup.js";
import { SignUpForm } from "./SignUp-form.js";

export class SignInForm {
  render() {
    const form = document.getElementById("sign-in");
    form.innerHTML = `
    <div id="form">
      <h1>ĐĂNG NHẬP</h1>
      <input type="email" placeholder="Email" id="email">
      <div class="Password">
      <input type="password" placeholder="Mật khẩu" id="in-password">
      <i class="bi bi-eye-fill" id="icon-eye-in" ></i>
      </div>
      <button id="signin-btn">Đăng nhập</button>
    </div>
    `;

    const overlay = document.getElementById("overlay");
    overlay.innerHTML = `
    <div class="overlay-panel overlay-right">
      <h1>Chào bạn</h1>
      <p>Bạn chưa có tài khoản? Đăng ký để tiếp tục</p>
      <button class="ghost" id="signUp_render">Đăng ký</button>
    </div>`;

    const container = document.getElementById("container");
    const signUp_render = document.getElementById("signUp_render");
    signUp_render.addEventListener("click", () => {
      container.classList.add("right-panel-active");
      var SignUpform = new SignUpForm();
      SignUpform.render();
    });

    const password = document.getElementById("in-password");
    const icon = document.getElementById("icon-eye-in");
    icon.addEventListener("click", function () {
      show_hide_pass(icon, password);
    });
    const btn = document.getElementById("signin-btn");
    const email = document.getElementById("email");
    btn.addEventListener("click", () => {
      check_account(email.value, password.value);
      console.log(email.value, password.value);
    });
  }
}
