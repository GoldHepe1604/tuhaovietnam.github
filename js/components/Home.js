import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  push,
  ref,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that y  ou want to use
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

export class Home {
  render() {
    const pageHome = document.getElementById("page");
    pageHome.innerHTML = `
    <section id="featured">
    <!-- Slider -->
    <div id="main-slider" class="flexslider">
      <ul class="slides">
        <li>
          <img src="./Asset/img/slides/1.jpg" alt="" />
          <div class="flex-caption">
            <div class="item_introtext">
              <strong>Lịch Sử</strong>
              <p>Dũng cảm - Kiên cường - Bất khuất</p>
            </div>
          </div>
        </li>
        <li>
          <img src="./Asset/img/slides/2.jpg" alt="" />
          <div class="flex-caption">
            <div class="item_introtext">
              <strong>Văn Hóa</strong>
              <p>Đặc Sắc - Văn Minh - Giàu Đẹp</p>
            </div>
          </div>
        </li>
        <li>
          <img src="./Asset/img/slides/3.jpg" alt="" />
          <div class="flex-caption">
            <div class="item_introtext">
              <strong>Ẩm Thực</strong>
              <p>Phong phú - Chất lượng - Dinh dưỡng</p>
            </div>
          </div>
        </li>
        <li>
          <img src="./Asset/img/slides/4.jpg" alt="" />
          <div class="flex-caption">
            <div class="item_introtext">
              <strong>Du Lịch</strong>
              <p>Đa Dạng - Tiềm năng - Nghệ thuật</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- end slider -->
  </section>
  <div class="testimonial-area">
    <div class="testimonial-solid">
      <div class="container">
        <div class="testi-icon-area">
          <div class="quote">
            <i class="fa fa-microphone"></i>
          </div>
        </div>
        <div
          id="carousel-example-generic"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="item">
              <p>
                Việt Nam vĩ đại, lịch sử rực rỡ,<br />
                Ngàn năm văn hiến, bao đời vinh quang.<br />
                Trường sinh trường thọ, khát vọng độc lập,<br />
                Dân tộc yêu nước, khát khao đồng lòng.<br /><br />

                Làng Sen Hồng, Bạch Đằng giang sông,<br />
                Hà Nội cổ kính, Sài Gòn phồn hoa.<br />
                Từ biển Đông rộng lớn đến Tây Bắc đất trời,<br />
                Việt Nam vang danh, lịch sử cất cao.
              </p>
              <p>
                <b>"Việt Nam Vĩ Đại" - Lê Anh Dũng</b>
              </p>
            </div>
            <div class="item">
              <p>
                Việt Nam ơi! đất nước tôi yêu,<br />
                Văn hóa Việt Nam, đẹp như nhiều chiều.<br />
                Áo dài, nón lá, trống, đàn, ca Huế,<br />
                Cố đô Huế xưa, cổ kính đến nay.<br /><br />

                Thành phố Hà Nội, phố phường đông đúc,<br />
                Lồng đèn đom đóm, cảnh đẹp trời đất.<br />
                Món ăn đặc sản, phở, bún chả, nem,<br />
                Những món ăn ngon, đầy hương vị quê nhà.<br /><br />

                Việt Nam ơi! đất nước tôi yêu,<br />
                Văn hóa Việt Nam, đẹp như nhiều chiều.<br />
                Ao sen hoa súng, đình làng cổ kính,<br />
                Con người thân thiện, tình cảm như gia đình.
              </p>
              <p>
                <b>"Văn hóa Việt Nam" - Nguyễn Khắc Thuần</b>
              </p>
            </div>
            <div class="item active">
              <p>
                Ngon lành đủ cả,<br />
                Đậm đà tinh tế,<br />
                Phở, bún, nem, cuốn,<br />
                Chả giò, gỏi cuốn.<br /><br />

                Nước mắm chấm chứa,<br />
                Mắm tép thơm lừng,<br />
                Rau sống, chấm muối,<br />
                Chanh leo, ớt hiểm.<br /><br />

                Ẩm thực Việt Nam,<br />
                Nức tiếng trên thế gian,<br />
                Quà tặng cho bạn,<br />
                Món ngon quê hương.
              </p>
              <p>
                <b>"Ẩm thực Việt Nam" - Nguyễn Duy</b>
              </p>
            </div>
            <div class="item">
              <p>
                Việt Nam - Đất nước tuyệt vời,<br />
                Điểm đến du lịch thật tuyệt vời.<br />
                Phố cổ Hà Nội, vịnh Hạ Long,<br />
                Hội An cổ kính, Sài Gòn phồn hoa.<br /><br />

                Mùa xuân tươi đẹp, cánh đồng lúa chín,<br />
                Mùa hạ nắng nóng, biển đảo tươi xanh.<br />
                Mùa thu hoa vàng, đồi núi điểm xuyết,<br />
                Mùa đông lạnh giá, núi rừng phủ tuyết.<br /><br />

                Ẩm thực ngon lành, đậm đà hương vị,<br />
                Văn hóa đa dạng, sắc màu tinh tế.<br />
                Du lịch Việt Nam, tuyệt vời chưa từng thấy,<br />
                Không gian đẹp như tranh, tình người ấm áp như gia đình.
              </p>
              <p>
                <b>"Việt Nam - Điểm đến tuyệt vời" - Nguyễn Minh Châu</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="send_mess">
  <h2>Gửi tin nhắn</h2>
  <p>Bạn có những đóng góp thú vị<br>Hãy nhắn tin cho bọn mình</p>
    <label for="name">Tên:</label>
    <input type="text" id="name" name="name" placeholder="Nhập tên của bạn">

    <label for="message">Tin nhắn:</label>
    <textarea id="message" name="message" placeholder="Nhập tin nhắn của bạn"></textarea>

    <input type="submit" value="Gửi" id="send">
  </div>
</div>
<a href="#" class="scrollup"><i class="fa fa-angle-up active"></i></a>
      `;
    const message = document.getElementById("message");
    const name = document.getElementById("name");
    const send_mess = document.getElementById("send");
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    send_mess.addEventListener("click", function () {
      if (name.value === "") {
        $.notify("Hãy nhập tên của bạn");
        return;
      }
      if (message.value === "") {
        $.notify("Hãy nhập tin nhắn");
        return;
      }

      const messageRef = push(ref(db, "message/" + name.value), {
        message: message.value,
      });

      messageRef
        .then(() => {
          // Gửi thành công
          $.notify(
            `Cảm ơn ${name.value} bọn mình đã nhận được tin nhắn`,
            "success"
          );
          name.value = "";
          message.value = "";
        })
        .catch((error) => {
          // Lỗi khi gửi
          $.notify(
            `Xin lỗi ${name.value} bọn mình chưa nhận được tin nhắn, bạn vui lòng gửi lại`
          );
        });
    });
  }
}
