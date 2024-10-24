import "./vinhdanh.css";
import logo from "./assets/logo-land.png";
import dropdownIcon from "./assets/drop.png";
const bangvinhdanh = () => {
  return (
    <div>
      <div id="header">
        <img src={logo} alt="Logo" style={{ width: "90px", height: "45px" }} />
        <div className="header-menu">
          <p id="course-books">
            <a href="#">Khóa học & sách</a>
            <img className="dropdown" src={dropdownIcon} alt="Dropdown Icon" />
          </p>
          <ul className="sub-header-menu">
            <li>
              <a href="#">KHÓA 2K6 - LUYỆN THI THPT QG 2024</a>
              <ul className="sub-header-menu1">
                <li>
                  <a href="#">LIVE C - Luyện Thi Chuyên Đề</a>
                  <a href="#">LIVE T - Luyện Đề</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">LIVE G - Tổng Ôn</a>
            </li>
            <li>
              <a href="#">KHÓA ĐÁNH GIÁ NĂNG LỰC 2K6</a>
              <ul className="sub-header-menu1">
                <li>
                  <a href="#">Đánh giá năng lực ĐHQGHN</a>
                  <a href="#">Đánh giá năng lực ĐHQG TP Hồ Chí Minh</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Chinh Phục lớp 11</a>
              <ul className="sub-header-menu1">
                <li>
                  <a href="#">Toán - Thầy Trần Lâm</a>
                  <a href="#">Vật Lý - Thầy Kiêu</a>
                  <a href="#">Hóa - Thầy Ngọc</a>
                  <a href="#">Ngữ Văn - Cô Bình</a>
                  <a href="#">Toán - Thầy Hồ Đức Thuận</a>
                  <a href="#">Vật Lý - Thầy Vũ Tuấn Anh</a>
                  <a href="#">Hóa - Thầy Phạm Văn Thuận</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Chinh Phục lớp 10</a>
              <ul className="sub-header-menu1">
                <li>
                  <a href="#">Toán</a>
                  <a href="#">Ngữ Văn - Cô Bình</a>
                  <a href="#">Hóa Học - Cô Hằng</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Bậc Đại Học</a>
              <ul className="sub-header-menu1">
                <li>
                  <a href="#">PRE TOEIC</a>
                  <a href="#">VẬT LÝ ĐẠI CƯƠNG</a>
                  <a href="#">TOÁN CAO CẤP</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">IELTS</a>
              <ul className="sub-header-menu1">
                <li>
                  <a href="#">Khóa LIVE</a>
                  <a href="#">Khóa IELTS CLC</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Tìm kiếm khóa học" />
          <button type="submit">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5
                        16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 
                        9.5 11.99 14 9.5 14z"
              />
            </svg>
          </button>
        </div>
        <div className="button">
          <button className="login-button">Đăng nhập</button>
          <button className="register-button">Đăng ký</button>
        </div>
      </div>
      <div className="content">
        <h1>
          BẢNG VINH DANH HỌC SINH ĐẠT GIẢI THÀNH TÍCH CAO KỲ KHẢO SÁT CHẤT LƯỢNG
          THÁNG 9
        </h1>
        <img
          src="https://cdn.mclass.vn/blog/uploads/2023/11/17111624/full-bang-vinh-danh-scaled.jpg"
          style={{ width: "96%", margin: "15px" }}
          alt=""
        />
      </div>
      <div className="footer-wrap">
        <div className="container footer-content">
          <div className="row">
            <div className="r1">
              <h3>
                <strong>CÔNG TY CỔ PHẦN GIÁO DỤC MCLASS VIỆT NAM</strong>
              </h3>
              <br />
              <br />
              <p>
                Địa chỉ ĐKKD: Số 9 Ngõ 80 phố Trung Kính, Phường Yên Hòa, Quận
                Cầu Giấy, Thành Phố Hà Nội, Việt Nam.
              </p>
              <p>Mã số thuế: 0317485610</p>
              <p>
                Hotline:<strong>099.752.8636</strong>-
                <strong>024.5678.0343</strong>
              </p>
              <p>Email: sales@mclass.vn</p>
            </div>
            <div className="r1">
              <h3>
                <strong>Hướng dẫn</strong>
              </h3>
              <br />
              <br />
              <p>Lộ trình Luyện thi THPT Quốc Gia</p>
              <p>Hướng dẫn học sinh</p>
              <p>Hướng dẫn giáo viên</p>
              <p>Sách luyện thi</p>
              <p>Giới thiệu Mclass</p>
              <p>Liên hệ</p>
            </div>
            <div className="r1">
              <h3>
                <strong>Chính sách</strong>
              </h3>
              <br />
              <br />
              <p>Thông tin sản phẩm - Dịch vụ do công ty cung cấp</p>
              <p>Chính sách và quy định chung</p>
              <p>Chính sách bảo mật</p>
              <p>Chính sách vận chuyển</p>
              <p>Chính sách hoàn trả</p>
              <p>Điều khoản dịch vụ</p>
              <p>Quy định và hình thức thanh toán</p>
              <p>Quy định thảo luận</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bangvinhdanh;
