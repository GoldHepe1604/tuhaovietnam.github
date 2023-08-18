export class History {
  render() {
    const pageHistory = document.getElementById("page");
    pageHistory.innerHTML = `<div class="container">
        <h1>VIỆT NAM LỊCH SỬ HÀO HÙNG</h1>
      <div class="introduction" >
            <p>Việt Nam là một quốc gia nằm ở Đông Nam Á, có một lịch sử phong phú và đa dạng. Với hơn 4.000 năm văn minh, đất nước này đã trải qua nhiều giai đoạn quan trọng và sự kiện đáng chú ý.</p>
            <p>Từ thời tiền sử với sự phát triển của các cộng đồng săn bắn và hái lượm, đến thời kỳ phong kiến với các triều đại như Triệu Đà, Đinh, Lý, Trần, Lê và Nguyễn. Việt Nam đã chịu sự ảnh hưởng của các quốc gia láng giềng và trải qua nhiều cuộc chiến tranh và sự xâm lược trong quá khứ.</p>
            <p>Sau thời kỳ thuộc địa dưới sự chiếm đóng của Pháp, Việt Nam đã trải qua cuộc chiến tranh chống lại quân đội Nhật Bản và Mỹ. Sau đó, vào cuối thế kỷ 20, đất nước đã triển khai các chính sách đổi mới kinh tế và cải cách xã hội, mở ra một giai đoạn mới của sự phát triển.</p>
            <p>Ngày nay, Việt Nam là một đất nước đang phát triển nhanh chóng với một nền kinh tế đa dạng, văn hóa độc đáo và một dân số đông đúc. Quan hệ ngoại giao của Việt Nam đã mở rộng và quốc gia này đóng vai trò quan trọng trong khu vực Đông Nam Á và trên thế giới.</p>
            <p>Khám phá văn minh và lịch sử đa dạng của Việt Nam là một trải nghiệm thú vị, từ các di tích lịch sử, danh lam thắng cảnh đến văn hóa, ẩm thực và truyền thống dân gian. Hãy khám phá và tìm hiểu thêm về lịch sử phong phú và đất nước này!</p>
        </div>
        <div class="timeline">
            <div class="event">
                <h2>Thời tiền sử</h2>
                <img src="../Asset/img/history/tiensu.jpg" alt="Đang tải">
                <p> Khoảng 400.000 năm trước Công nguyên, Việt Nam đã có sự hiện diện của các cộng đồng săn bắn và hái lượm. Trong thời kỳ này, các vương quốc phát triển và các văn hóa độc đáo nở rộ. <a  href="https://vi.wikipedia.org/wiki/Vi%E1%BB%87t_Nam_th%E1%BB%9Di_ti%E1%BB%81n_s%E1%BB%AD">xem thêm</a></p>
            </div>
            <div class="event">
                <h2>Thời kỳ phong kiến</h2>
                <img src="../Asset/img/history/phongkien.jpg" alt="Đang tải">
                <p>Trong suốt hơn 1.000 năm, Việt Nam đã chịu sự ảnh hưởng của các triều đại phong kiến, bao gồm Triệu Đà, Đinh, Lý, Trần, Lê và Nguyễn. Trong giai đoạn này, nền văn hóa và chính trị Việt Nam phát triển, và đất nước trải qua các cuộc chiến tranh và sự xâm lược từ các quốc gia láng giềng. <a  href="https://haitien.com.vn/tin-tuc/cac-trieu-dai-phong-kien-viet-nam-i1000198.html">xem thêm</a></p>
            </div>
            <div class="event">
                <h2>Thời kỳ thuộc địa</h2>
                <img src="../Asset/img/history/thuocdia.jpg" alt="Đang tải">
                <p>Vào cuối thế kỷ 19 và đầu thế kỷ 20, Việt Nam trở thành một thuộc địa của Pháp sau cuộc xâm lược và chiếm đóng của người Pháp. Thời kỳ này đánh dấu sự đấu tranh của người Việt Nam để giành lại độc lập và quyền tự chủ. <a  href="https://idtvietnam.vn/thu-muc-ve-viet-nam-thoi-phap-thuoc">xem thêm</a></p>
            </div>
            <div class="event">
                <h2>Thời kỳ chiến tranh</h2>
                <img src="../Asset/img/history/chientranh.jpg" alt="Đang tải">
                <p>Thời kỳ này bao gồm Chiến tranh Thế giới thứ hai và Chiến tranh Việt Nam. Việt Nam đã chịu ảnh hưởng lớn từ cuộc chiến tranh chống lại quân đội Nhật Bản và Pháp, sau đó là cuộc chiến tranh chống Mỹ và chiến tranh biên giới với Trung Quốc. Chiến tranh đã gây ra nhiều thiệt hại và chia cắt đất nước. <a  href="https://vi.wikipedia.org/wiki/C%C3%A1c_cu%E1%BB%99c_chi%E1%BA%BFn_tranh_Vi%E1%BB%87t_Nam_tham_gia">xem thêm</a></p>
            </div>
            <div class="event">
                <h2>Thời kỳ đổi mới</h2>
                <img src="../Asset/img/history/doimoi.jpg" alt="Đang tải">
                <p>Kể từ khi chiến tranh kết thúc vào năm 1975, Việt Nam đã triển khai các chính sách đổi mới kinh tế và cải cách xã hội. Điều này đã mở ra một giai đoạn mới của sự phát triển kinh tế và tái thiết đất nước. <a  href="https://vi.wikipedia.org/wiki/%C4%90%E1%BB%95i_M%E1%BB%9Bi">xem thêm</a></p>
            </div>
            <div class="event">
                <h2>Thời kỳ hiện đại</h2>
                <img src="../Asset/img/history/hiendai.jpg" alt="Đang tải">
                <p>Hiện nay, Việt Nam đang phát triển nhanh chóng với tăng trưởng kinh tế mạnh, sự phát triển của các ngành công nghiệp, du lịch và công nghệ thông tin. Quan hệ ngoại giao của Việt Nam cũng được mở rộng trên thế giới. <a  href="https://fulbright.edu.vn/vi/van-hoa-va-xa-hoi-viet-nam-hien-dai-co-nhieu-hon-mot-viet-nam-de-hoc/">xem thêm</a></p>
            </div>
        </div>
    </div>`;
  }
}
