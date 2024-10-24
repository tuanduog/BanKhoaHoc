import "./Full.css";
import { Link } from "react-router-dom";
import logo from "./assets/logo-land.png";
import dropdownIcon from "./assets/drop.png";
import BangVinhDanh from "./bangvinhdanh";
const Full = () => {
    
  return (
    <div id="main">
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
      <div className="containt">
        <ul className="menu-side">
          <p>DANH MỤC</p>

          <li>
            <a href="">KHÓA 2K6 - LUYỆN THI THPT QG 2024</a>
            <ul className="sub-menu-side">
              <li>
                <strong>KHÓA 2K6 - LUYỆN THI THPT QG 2024</strong>
              </li>
              <li>
                <a href="">LIVE C - Luyện Thi Chuyên Đề</a>
              </li>
              <li>
                <a href="">LIVE T - Luyện Đề</a>
              </li>
              <li>
                <a href="">LIVE G - Tổng Ôn</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="">KHÓA ĐÁNH GIÁ NĂNG LỰC 2K6</a>
            <ul className="sub-menu-side">
              <li>
                <strong>KHOA ĐÁNH GIÁ NĂNG LỰC 2K6</strong>
              </li>
              <li>
                <a href="">Đánh giá năng lực ĐHQGHN</a>
              </li>
              <li>
                <a href="">Đánh giá năng lực ĐHQG TP Hồ Chí Minh</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="">Chinh Phục Lớp 11</a>
            <ul className="sub-menu-side">
              <li>
                <strong>Chinh Phục Lớp 11</strong>
              </li>
              <li>
                <a href="">Toán - Thầy Trần Lâm</a>
              </li>
              <li>
                <a href="">Vật Lý - Thầy Kiêu</a>
              </li>
              <li>
                <a href="">Hóa - Thầy Ngọc</a>
              </li>
              <li>
                <a href="">Ngữ Văn - Cô Bình</a>
              </li>
              <li>
                <a href="">Toán - Thầy Hồ Đức Thuận</a>
              </li>
              <li>
                <a href="">Vật Lý - Thầy Vũ Tuấn Anh</a>
              </li>
              <li>
                <a href="">Hóa - Thầy Phạm Văn Thuận</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="">Chinh Phục Lớp 10</a>
            <ul className="sub-menu-side">
              <li>
                <strong>Chinh Phục Lớp 10</strong>
              </li>
              <li>
                <a href="">Toán</a>
              </li>
              <li>
                <a href="">Ngữ Văn - Cô Bình</a>
              </li>
              <li>
                <a href="">Hóa Học - Cô Hằng</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="">BẬC ĐẠI HỌC</a>
            <ul className="sub-menu-side">
              <li>
                <strong>BẬC ĐẠI HỌC</strong>
              </li>
              <li>
                <a href="">PRE TOEIC</a>
              </li>
              <li>
                <a href="">VẬT LÝ ĐẠI CƯƠNG</a>
              </li>
              <li>
                <a href="">TOÁN CAO CẤP</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="">IELTS</a>
            <ul className="sub-menu-side">
              <li>
                <strong>IELTS</strong>
              </li>
              <li>
                <a href="">Khóa LIVE</a>
              </li>
              <li>
                <a href="">Khóa IELTS CLC</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="main-poster">
  <div className="poster">
    <a href="#">
      <img 
        src="https://cdn.mclass.vn/blog/uploads/2024/03/11111621/Khai-
giang-Khoa-Luyen-thi-TN-THPT-2025-danh-cho-2K7.jpg" 
        style={{ height: "400px", width: "650px" }} 
        alt="Khai giảng Khóa Luyện thi TN THPT 2025" 
      />
    </a>
    <div className="poster1">
      <img 
        src="https://cdn.mclass.vn/blog/uploads/2023/11/17112153/Banner-website-doc.jpg" 
        alt="Banner website" 
      />
      <span className="p1">
        <strong>Bảng vinh danh</strong>
      </span>
      <br />
      <span 
        style={{ fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif", marginLeft: "15px" }}
      >
        Khảo sát chất lượng tháng 9
      </span>
      <br /><br />
      <Link to="/bangvinhdanh">Chi tiết</Link>
    </div>
  </div>
  
  <ul className="select">
    <li>
      <a href="#">
        <img 
          src="https://cdn.mclass.vn/blog/uploads/2022/04/21021448/big-btn-luyen-de-min.png" 
          alt="Luyện đề" 
        />
      </a>
    </li>
    <li>
      <a href="#">
        <img 
          src="https://cdn.mclass.vn/blog/uploads/2022/04/21021448/big-btn-tai-lieu-min.png" 
          alt="Tài liệu" 
        />
      </a>
    </li>
    <li>
      <a href="#">
        <img 
          src="https://cdn.mclass.vn/blog/uploads/2022/04/21021447/big-btn-sach-min.png" 
          alt="Sach" 
        />
      </a>
    </li>
  </ul>
</div>
        
      </div>
      <div className="main-khoi">
            <div className="khoi">
                <h3 className="head"><a href="">Trung Học Phổ Thông</a></h3>
                <div className="maint-containt-1">
                    <div className="containt-1">
                        <div className="body">
                            <a href=""> <img
                                    src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <a href=""> <img
                                    src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <a href=""> <img
                                    src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <a href=""> <img
                                    src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br/>
                    <div className="containt-1">
                        <div className="body">
                            <a href=""> <img
                                    src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <a href=""> <img
                                    src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <a href=""> <img
                                    src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body">
                            <a href=""> <img
                                    src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                    alt=""/></a>
                            <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                            <div className="text">
                                <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                </div>
                                <div className="chuyende-baihoc">
                                    <div>
                                        <span className="chuyende">5 </span>Chuyên đề
                                    </div>
                                    <div>
                                        <span className="baihoc">12 </span>Bài Học
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="khoi">
                    <h3 className="head"><a href="">Lớp 11</a></h3>
                    <div className="maint-containt-1">
                        <div className="containt-1">
                            <div className="body">
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br/>
                        <div className="containt-1">
                            <div className="body">
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <a href=""> <img
                                        src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                        alt=""/></a>
                                <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                <div className="text">
                                    <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                    </div>
                                    <div className="chuyende-baihoc">
                                        <div>
                                            <span className="chuyende">5 </span>Chuyên đề
                                        </div>
                                        <div>
                                            <span className="baihoc">12 </span>Bài Học
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="khoi">
                        <h3 className="head"><a href="">Lớp 10</a></h3>
                        <div className="maint-containt-1">
                            <div className="containt-1">
                                <div className="body">
                                    <a href=""> <img
                                            src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                            alt=""/></a>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    <a href=""> <img
                                            src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                            alt=""/></a>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    <a href=""> <img
                                            src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                            alt=""/></a>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    <a href=""> <img
                                            src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                            alt=""/></a>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><br/>
                            <div className="containt-1">
                                <div className="body">
                                    <a href=""> <img
                                            src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                            alt=""/></a>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    <a href=""> <img
                                            src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                            alt=""/></a>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    <a href=""> <img
                                            src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                            alt=""/></a>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    <a href=""> <img
                                            src="https://d3484gt1o8rlzm.cloudfront.net/mclass/course/G2K6G01/G2K6G01_1676286538.jpg"
                                            alt=""/></a>
                                    <h5><a href="">LIVE G -Tổng ôn - Toán học 2K6 - HTT</a></h5>
                                    <div className="text">
                                        <div className="giangvien"> Giảng Viên: <a href=""> Hồ Thức Thuận</a>
                                        </div>
                                        <div className="chuyende-baihoc">
                                            <div>
                                                <span className="chuyende">5 </span>Chuyên đề
                                            </div>
                                            <div>
                                                <span className="baihoc">12 </span>Bài Học
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><br/><br/>
                </div>
                </div>
                </div>
        </div>
        
    <div className="footer-wrap ">
        <div className="container footer-content">
            <div className="row">
                <div className="r1">
                    <h3><strong>CÔNG TY CỔ PHẦN GIÁO DỤC MclassName VIỆT NAM</strong></h3>
                    <br/><br/>
                    <p>Địa chỉ ĐKKD: Số 9 Ngõ 89 Phố Trung Kính, Phường Yên Hoà,
                        Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam.</p>
                    <p> Mã số thuế: 9317485619</p>
                    <p> Hotline:<strong>099.752.8636</strong></p>
                    <p> Email: sales@mclassName.vnd</p>
                </div>
                <div className="r1">
                    <h3><strong>Hướng dẫn</strong></h3>
                    <br/><br/>
                    <p>Lộ trình Luyện thi THPT Quốc gia</p>
                    <p>Hướng dẫn Học sinh</p>
                    <p>Hướng dẫn Giáo viên</p>
                    <p>Sách Luyện Thi</p>
                    <p>Giới thiệu mclassName</p>
                    <p>Liên hệ</p>
                </div>
                <div className="r1">
                    <h3><strong>Chính sách</strong></h3>
                    <br/><br/>
                    <p>Thông tin Sản phẩm - Dịch vụ do công ty cung cấp</p>
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

export default Full;
