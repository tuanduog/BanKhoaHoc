import './tailieu.css';
import logo from "../assets/logo-land.png";
import search from "../assets/search.png"
import dropdownIcon from "../assets/drop.png";
const Tailieu = () => {
  return (
    <div id="main">
      <div id="header">
        <img src={logo} alt="Logo" style={{ width: "90px", height: "45px" }} />
        <div className="header-menu">
          <div id="course-books">
            <a href="#" className="dm">Khóa học & sách</a>
            <img className="dropdown" src={dropdownIcon} alt="Dropdown Icon" />
          </div>
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
            <img src={search} alt="Search" className="srch" />
          </button>
        </div>
        <div className="button">
          <button className="login-button">Đăng nhập</button>
          <button className="register-button">Đăng ký</button>
        </div>
      </div>
      <div className="content">
        <h1>Thư viện đề thi môn Toán</h1>
        <div className="loc">
          <ul>
            <li>
              <select name="mon" id="mon">
                <option value="">Toán</option>
              </select>
            </li>
            <li>
              <input type="text" name="ten" placeholder="Tên đề thi" id="ten" />
            </li>
            <li>
              <select name="mh" id="mh">
                <option value="">Tỉnh thành</option>
                <option value="hn">Hà Nội</option>
                <option value="nd">Nam Định</option>
                <option value="th">Thanh Hóa</option>
              </select>
            </li>
            <li>
              <select name="cd" id="cd">
                <option value="">Cấp độ</option>
                <option value="12">Lớp 12</option>
                <option value="9">Lớp 9</option>
                <option value="10">Lớp 10</option>
              </select>
            </li>
            <li>
              <select name="n" id="n">
                <option value="">Năm</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </li>
            <li>
              <button onClick={() => console.log('Tìm kiếm')} id="tk">
                Tìm Kiếm
              </button>
            </li>
          </ul>
        </div>

        <h4>Tên đề thi</h4>
        <table>
          <thead>
            <tr>
              <th>Tên Đề Thi</th>
              <th>Hành Động</th>
              <th>Tỉnh/TP</th>
              <th>Năm</th>
              <th>Cấp Độ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Đề thi toán 9 vào 10 trường chuyên ABC môn toán</td>
              <td>
                <a
                  href="#"
                  style={{
                    textDecoration: 'none',
                    backgroundColor: '#c4423e',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '15px',
                  }}
                >
                  Xem
                </a>
              </td>
              <td>Thái Bình</td>
              <td>2020</td>
              <td>Lớp 9</td>
            </tr>
            <tr>
              <td>Đề thi toán 9 vào 10 trường chuyên ABC môn toán</td>
              <td>
                <a
                  href="#"
                  style={{
                    textDecoration: 'none',
                    backgroundColor: '#c4423e',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '15px',
                  }}
                >
                  Xem
                </a>
              </td>
              <td>Thái Bình</td>
              <td>2020</td>
              <td>Lớp 9</td>
            </tr>
            <tr>
              <td>Đề thi toán 9 vào 10 trường chuyên ABC môn toán</td>
              <td>
                <a
                  href="#"
                  style={{
                    textDecoration: 'none',
                    backgroundColor: '#c4423e',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '15px',
                  }}
                >
                  Xem
                </a>
              </td>
              <td>Thái Bình</td>
              <td>2020</td>
              <td>Lớp 9</td>
            </tr>
            <tr>
              <td>Đề thi toán 9 vào 10 trường chuyên ABC môn toán</td>
              <td>
                <a
                  href="#"
                  style={{
                    textDecoration: 'none',
                    backgroundColor: '#c4423e',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '15px',
                  }}
                >
                  Xem
                </a>
              </td>
              <td>Thái Bình</td>
              <td>2020</td>
              <td>Lớp 9</td>
            </tr>
          </tbody>
        </table>

                <div className="footer-wrap">
                    <div className="container footer-content">
                        <div className="row">
                            <div className="r1">
                                <h3><strong>CÔNG TY CỔ PHẦN GIÁO DỤC MCLASS VIỆT NAM</strong></h3>
                                <br /><br />
                                <p>Địa chỉ ĐKKD: Số 9 Ngõ 80 Phố Trung Kính, Phường Yên Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam.</p>
                                <p>Mã số thuế: 0317485610</p>
                                <p>Hotline:<strong>099.752.8636</strong>- <strong>024.5678.0343</strong></p>
                                <p>Email: sales@mclass.vnd</p>
                            </div>
                            <div className="r1">
                                <h3><strong>Hướng dẫn</strong></h3>
                                <br /><br />
                                <p>Lộ trình Luyện thi THPT Quốc gia</p>
                                <p>Hướng dẫn Học sinh</p>
                                <p>Hướng dẫn Giáo viên</p>
                                <p>Sách Luyện Thi</p>
                                <p>Giới thiệu mclass</p>
                                <p>Liên hệ</p>
                            </div>
                            <div className="r1">
                                <h3><strong>Chính sách</strong></h3>
                                <br /><br />
                                <p>Thông tin Sản phẩm – Dịch vụ do công ty cung cấp</p>
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
    </div>
  );
};

export default Tailieu;
