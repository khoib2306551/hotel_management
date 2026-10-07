import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapLocationDot,
  faChevronDown,
  faStar,
  faHeart
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="home-container">
      {/* Header đã tách riêng */}
      <Header />

      {/* Khoảng trống đệm do thanh tìm kiếm tràn viền */}
      <div className="home-spacer"></div>

      {/* Container chính của trang kết quả tìm kiếm */}
      <div className="search-results-layout">

        <div className="results-content-wrapper">

          {/* CỘT TRÁI: Bản đồ & Bộ lọc */}
          <div className="filters-sidebar">
            {/* Box Bản đồ */}
            <div className="map-box">
              <div className="map-placeholder">
                <FontAwesomeIcon icon={faMapLocationDot} className="map-icon-large" />
                <span>Bến Ninh Kiều, Cần Thơ</span>
              </div>
              <button className="map-btn">
                <FontAwesomeIcon icon={faMapLocationDot} /> Hiển thị trên bản đồ
              </button>
            </div>

            {/* Bộ lọc phổ biến */}
            <div className="filter-card">
              <h3>Chọn lọc theo:</h3>

              <div className="filter-group">
                <h4>Các bộ lọc phổ biến</h4>
                <label><input type="checkbox" /> 5 sao <span className="count">8</span></label>
                <label><input type="checkbox" /> Khách sạn <span className="count">42</span></label>
                <label><input type="checkbox" /> Resot & Spa <span className="count">12</span></label>
                <label><input type="checkbox" /> Gần trung tâm <span className="count">35</span></label>
                <label><input type="checkbox" /> Có hồ bơi <span className="count">19</span></label>
              </div>

              <div className="filter-group">
                <h4>Bộ lọc thông minh</h4>
                <label className="filter-label-block">Bạn đang tìm kiếm điều gì?</label>
                <input type="text" className="smart-filter-input" placeholder="Ví dụ: View sông" />
                <button className="filter-submit-btn">Tìm chỗ nghỉ</button>
              </div>

              <div className="filter-group">
                <h4>Địa danh</h4>
                <label><input type="checkbox" /> Bến Ninh Kiều <span className="count">38</span></label>
                <label><input type="checkbox" /> Chợ nổi Cái Răng <span className="count">24</span></label>
                <label><input type="checkbox" /> Chùa Ông Cần Thơ <span className="count">19</span></label>
                <label><input type="checkbox" /> Nhà cổ Bình Thủy <span className="count">31</span></label>
                <label><input type="checkbox" /> Bảo tàng Thành phố Cần Thơ <span className="count">27</span></label>
                <label><input type="checkbox" /> Làng du lịch Mỹ Khánh <span className="count">14</span></label>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: Danh sách khách sạn */}
          <div className="hotels-main-content">
            <div className="results-header-info">
              <h2>Cần Thơ: tìm thấy 45 chỗ nghỉ</h2>
              <div className="sort-box">
                <span>Sắp xếp theo: <strong>Lựa chọn hàng đầu của chúng tôi</strong></span>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>

            {/* Danh sách các card khách sạn */}
            <div className="hotel-list">

                {/* Khách sạn 1: Azerai Resort Can Tho */}
                <div className="hotel-card">
                <div className="hotel-img-wrap">
                  <div className="hotel-img avec-bg"></div>
                  <button className="wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
                </div>
                <div className="hotel-info">
                  <div className="hotel-title-row">
                    <h3>Azerai Resort Can Tho</h3>
                    <div className="hotel-stars">
                      <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <p className="hotel-location">Cần Thơ · <span className="link">Xem trên bản đồ</span> · Cách trung tâm 1,2km</p>
                  <p className="hotel-badge-tag">📍 Tọa lạc tại Cồn Ấu, thành phố Cần Thơ</p>
                  <p className="hotel-desc">Nằm biệt lập trên Cồn Ấu với không gian xanh mát, Azerai Resort cung cấp các phòng nghỉ sang trọng, hồ bơi ngoài trời và dịch vụ đẳng cấp hướng ra dòng sông Hậu.</p>
                </div>
                <div className="hotel-pricing-action">
                  <div className="review-box">
                    <div className="review-text">
                      <span className="review-status">Tuyệt vời</span>
                      <span className="review-count">320 đánh giá</span>
                    </div>
                    <div className="review-score">9,4</div>
                  </div>
                  <button className="choose-date-btn">Chọn ngày</button>
                </div>
                </div>

                {/* Khách sạn 2: Muong Thanh Luxury Can Tho Hotel */}
                <div className="hotel-card">
                <div className="hotel-img-wrap">
                  <div className="hotel-img kolin-bg"></div>
                  <button className="wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
                </div>
                <div className="hotel-info">
                  <div className="hotel-title-row">
                    <h3>Muong Thanh Luxury Can Tho Hotel</h3>
                    <div className="hotel-stars">
                      <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <p className="hotel-location">Cần Thơ · <span className="link">Xem trên bản đồ</span> · Cách trung tâm 800m · Gần sông</p>
                  <p className="hotel-distance">📍 Tọa lạc ngay sát bờ sông Hậu gần cầu Cần Thơ</p>
                  <p className="hotel-desc">Khách sạn Mường Thanh Luxury Cần Thơ có tầm nhìn toàn cảnh thành phố và cầu Cần Thơ, trang bị đầy đủ hồ bơi lớn, phòng tập gym, spa và nhà hàng phục vụ ẩm thực phong phú.</p>
                </div>
                <div className="hotel-pricing-action">
                  <div className="review-box">
                    <div className="review-text">
                      <span className="review-status">Tuyệt hảo</span>
                      <span className="review-count">1.150 đánh giá</span>
                    </div>
                    <div className="review-score">8,8</div>
                  </div>
                  <button className="choose-date-btn">Chọn ngày</button>
                </div>
                </div>

                {/* Khách sạn 3: Nesta Hotel Can Tho */}
                <div className="hotel-card">
                <div className="hotel-img-wrap">
                  <div className="hotel-img artur-bg"></div>
                  <button className="wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
                </div>
                <div className="hotel-info">
                  <div className="hotel-title-row">
                    <h3>Nesta Hotel Can Tho</h3>
                    <div className="hotel-stars">
                      <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <p className="hotel-location">Cần Thơ · <span className="link">Xem trên bản đồ</span> · Cách Bến Ninh Kiều 500m</p>
                  <p className="hotel-distance">📍 Cách Bến Ninh Kiều đi bộ vài phút</p>
                  <p className="hotel-desc">Tọa lạc tại vị trí đắc địa gần trung tâm thành phố, Nesta Hotel cung cấp chỗ nghỉ tiện nghi với hồ bơi ngoài trời trên cao, không gian thoáng đãng và thuận tiện di chuyển tham quan.</p>
                </div>
                <div className="hotel-pricing-action">
                  <div className="review-box">
                    <div className="review-text">
                      <span className="review-status">Tuyệt vời</span>
                      <span className="review-count">640 đánh giá</span>
                    </div>
                    <div className="review-score">8,6</div>
                  </div>
                  <button className="choose-date-btn">Chọn ngày</button>
                </div>
                </div>

                {/* Khách sạn 4: TTC Hotel - Can Tho */}
                <div className="hotel-card">
                  <div className="hotel-img-wrap">
                    <div className="hotel-img artur-bg"></div>
                    <button className="wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
                  </div>
                  <div className="hotel-info">
                    <div className="hotel-title-row">
                      <h3>TTC Hotel - Can Tho</h3>
                      <div className="hotel-stars">
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <p className="hotel-location">Cần Thơ · <span className="link">Xem trên bản đồ</span> · Ngay sát Bến Ninh Kiều</p>
                    <p className="hotel-distance">📍 Tọa lạc tại Hai Bà Trưng, Ninh Kiều, Cần Thơ</p>
                    <p className="hotel-desc">Tọa lạc ngay sát Bến Ninh Kiều thơ mộng, khách sạn mang phong cách hiện đại, có nhà hàng quay độc đáo và tầm nhìn trực diện ra sông Hậu.</p>
                  </div>
                  <div className="hotel-pricing-action">
                    <div className="review-box">
                      <div className="review-text">
                        <span className="review-status">Rất tốt</span>
                        <span className="review-count">850 đánh giá</span>
                      </div>
                      <div className="review-score">8,4</div>
                    </div>
                    <button className="choose-date-btn">Chọn ngày</button>
                  </div>
                </div>

                {/* Khách sạn 5: Vạn Phát Riverside Hotel */}
                <div className="hotel-card">
                  <div className="hotel-img-wrap">
                    <div className="hotel-img avec-bg"></div>
                    <button className="wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
                  </div>
                  <div className="hotel-info">
                    <div className="hotel-title-row">
                      <h3>Vạn Phát Riverside Hotel</h3>
                      <div className="hotel-stars">
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <p className="hotel-location">Cần Thơ · <span className="link">Xem trên bản đồ</span> · Cách trung tâm 2km</p>
                    <p className="hotel-distance">📍 Tọa lạc tại Cái Khế, Ninh Kiều, Cần Thơ</p>
                    <p className="hotel-desc">Khách sạn ven sông với không gian yên tĩnh, thoáng mát, cung cấp hệ thống phòng nghỉ tiện nghi cùng dịch vụ nhà hàng tiệc cưới sang trọng.</p>
                  </div>
                  <div className="hotel-pricing-action">
                    <div className="review-box">
                      <div className="review-text">
                        <span className="review-status">Tốt</span>
                        <span className="review-count">410 đánh giá</span>
                      </div>
                      <div className="review-score">8,1</div>
                    </div>
                    <button className="choose-date-btn">Chọn ngày</button>
                  </div>
                </div>

                {/* Khách sạn 6: West Hotel Can Tho */}
                <div className="hotel-card">
                  <div className="hotel-img-wrap">
                    <div className="hotel-img kolin-bg"></div>
                    <button className="wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
                  </div>
                  <div className="hotel-info">
                    <div className="hotel-title-row">
                      <h3>West Hotel Can Tho</h3>
                      <div className="hotel-stars">
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <p className="hotel-location">Cần Thơ · <span className="link">Xem trên bản đồ</span> · Cách Chợ đêm 300m</p>
                    <p className="hotel-distance">📍 Tọa lạc tại Hai Bà Trưng, Ninh Kiều, Cần Thơ</p>
                    <p className="hotel-desc">Nằm ngay khu vực sầm uất trung tâm thành phố, khách sạn sở hữu hồ bơi vô cực trên sân thượng cùng tầm nhìn tuyệt đẹp nhìn xuống phố đi bộ.</p>
                  </div>
                  <div className="hotel-pricing-action">
                    <div className="review-box">
                      <div className="review-text">
                        <span className="review-status">Rất tốt</span>
                        <span className="review-count">920 đánh giá</span>
                      </div>
                      <div className="review-score">8,5</div>
                    </div>
                    <button className="choose-date-btn">Chọn ngày</button>
                  </div>
                </div>

                {/* Khách sạn 7: Asia Hotel Can Tho */}
                <div className="hotel-card">
                  <div className="hotel-img-wrap">
                    <div className="hotel-img artur-bg"></div>
                    <button className="wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
                  </div>
                  <div className="hotel-info">
                    <div className="hotel-title-row">
                      <h3>Asia Hotel Can Tho</h3>
                      <div className="hotel-stars">
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <p className="hotel-location">Cần Thơ · <span className="link">Xem trên bản đồ</span> · Gần trung tâm</p>
                    <p className="hotel-distance">📍 Tọa lạc tại Đường Ngô Quyền, Ninh Kiều, Cần Thơ</p>
                    <p className="hotel-desc">Lựa chọn lưu trú tiết kiệm nhưng vô cùng sạch sẽ và ấm cúng, thuận tiện đi lại khám phá các điểm ăn uống nổi tiếng tại Cần Thơ.</p>
                  </div>
                  <div className="hotel-pricing-action">
                    <div className="review-box">
                      <div className="review-text">
                        <span className="review-status">Tốt</span>
                        <span className="review-count">280 đánh giá</span>
                      </div>
                      <div className="review-score">7,9</div>
                    </div>
                    <button className="choose-date-btn">Chọn ngày</button>
                  </div>
                </div>

                {/* Khách sạn 8: Iris Hotel Can Tho */}
                <div className="hotel-card">
                  <div className="hotel-img-wrap">
                    <div className="hotel-img avec-bg"></div>
                    <button className="wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
                  </div>
                  <div className="hotel-info">
                    <div className="hotel-title-row">
                      <h3>Iris Hotel Can Tho</h3>
                      <div className="hotel-stars">
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <p className="hotel-location">Cần Thơ · <span className="link">Xem trên bản đồ</span> · Cách Vincom Xuân Khánh 500m</p>
                    <p className="hotel-distance">📍 Tọa lạc tại Đường 3 Tháng 2, Ninh Kiều, Cần Thơ</p>
                    <p className="hotel-desc">Khách sạn đạt chuẩn 4 sao với phong cách trang trí tinh tế, sang trọng, đội ngũ nhân viên thân thiện và nhiều dịch vụ tiện ích cao cấp.</p>
                  </div>
                  <div className="hotel-pricing-action">
                    <div className="review-box">
                      <div className="review-text">
                        <span className="review-status">Tuyệt vời</span>
                        <span className="review-count">530 đánh giá</span>
                      </div>
                      <div className="review-score">8,7</div>
                    </div>
                    <button className="choose-date-btn">Chọn ngày</button>
                  </div>
                </div>

                {/* Khách sạn 9: Kim Lang Hotel */}
                <div className="hotel-card">
                  <div className="hotel-img-wrap">
                    <div className="hotel-img kolin-bg"></div>
                    <button className="wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
                  </div>
                  <div className="hotel-info">
                    <div className="hotel-title-row">
                      <h3>Kim Lang Hotel</h3>
                      <div className="hotel-stars">
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <p className="hotel-location">Cần Thơ · <span className="link">Xem trên bản đồ</span> · Gần bờ sông</p>
                    <p className="hotel-distance">📍 Tọa lạc tại Đường Hai Bà Trưng, Ninh Kiều, Cần Thơ</p>
                    <p className="hotel-desc">Khách sạn bình dân nằm ngay sát khu vực trung tâm nhộn nhịp, phòng nghỉ gọn gàng, phù hợp cho khách du lịch bụi hoặc đi công tác ngắn ngày.</p>
                  </div>
                  <div className="hotel-pricing-action">
                    <div className="review-box">
                      <div className="review-text">
                        <span className="review-status">Tốt</span>
                        <span className="review-count">190 đánh giá</span>
                      </div>
                      <div className="review-score">7,8</div>
                    </div>
                    <button className="choose-date-btn">Chọn ngày</button>
                  </div>
                </div>

                {/* Khách sạn 10: Nam Long Hotel */}
                <div className="hotel-card">
                  <div className="hotel-img-wrap">
                    <div className="hotel-img artur-bg"></div>
                    <button className="wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
                  </div>
                  <div className="hotel-info">
                    <div className="hotel-title-row">
                      <h3>Nam Long Hotel</h3>
                      <div className="hotel-stars">
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <p className="hotel-location">Cần Thơ · <span className="link">Xem trên bản đồ</span> · Gần Bến Ninh Kiều</p>
                    <p className="hotel-distance">📍 Tọa lạc tại Đường Phan Đình Phùng, Ninh Kiều, Cần Thơ</p>
                    <p className="hotel-desc">Điểm dừng chân quen thuộc với giá cả phải chăng, vị trí thuận lợi giúp du khách dễ dàng di chuyển đến các điểm tham quan cốt lõi của thành phố.</p>
                  </div>
                  <div className="hotel-pricing-action">
                    <div className="review-box">
                      <div className="review-text">
                        <span className="review-status">Tốt</span>
                        <span className="review-count">210 đánh giá</span>
                      </div>
                      <div className="review-score">8,0</div>
                    </div>
                    <button className="choose-date-btn">Chọn ngày</button>
                  </div>
                </div>

                {/* Khách sạn 11: Cali Hotel Can Tho */}
                <div className="hotel-card">
                  <div className="hotel-img-wrap">
                    <div className="hotel-img avec-bg"></div>
                    <button className="wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
                  </div>
                  <div className="hotel-info">
                    <div className="hotel-title-row">
                      <h3>Cali Hotel Can Tho</h3>
                      <div className="hotel-stars">
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <p className="hotel-location">Cần Thơ · <span className="link">Xem trên bản đồ</span> · Khu vực Cái Khế</p>
                    <p className="hotel-distance">📍 Tọa lạc tại Khu dân cư Cái Khế, Ninh Kiều, Cần Thơ</p>
                    <p className="hotel-desc">Không gian yên tĩnh, phòng ốc rộng rãi, sạch sẽ cùng bãi đỗ xe rộng rãi là điểm cộng lớn cho khách sạn này.</p>
                  </div>
                  <div className="hotel-pricing-action">
                    <div className="review-box">
                      <div className="review-text">
                        <span className="review-status">Rất tốt</span>
                        <span className="review-count">310 đánh giá</span>
                      </div>
                      <div className="review-score">8,2</div>
                    </div>
                    <button className="choose-date-btn">Chọn ngày</button>
                  </div>
                </div>

                {/* Khách sạn 12: Hometravel Mekong Can Tho */}
                <div className="hotel-card">
                  <div className="hotel-img-wrap">
                    <div className="hotel-img kolin-bg"></div>
                    <button className="wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
                  </div>
                  <div className="hotel-info">
                    <div className="hotel-title-row">
                      <h3>Hometravel Mekong Can Tho</h3>
                      <div className="hotel-stars">
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <p className="hotel-location">Cần Thơ · <span className="link">Xem trên bản đồ</span> · Gần miệt vườn</p>
                    <p className="hotel-distance">📍 Tọa lạc tại Phường Hưng Thới, Cái Răng, Cần Thơ</p>
                    <p className="hotel-desc">Trải nghiệm không gian homestay mang đậm chất miền Tây sông nước, gần gũi với thiên nhiên và thuận tiện ghé thăm chợ nổi Cái Răng vào sáng sớm.</p>
                  </div>
                  <div className="hotel-pricing-action">
                    <div className="review-box">
                      <div className="review-text">
                        <span className="review-status">Tuyệt vời</span>
                        <span className="review-count">150 đánh giá</span>
                      </div>
                      <div className="review-score">9,0</div>
                    </div>
                    <button className="choose-date-btn">Chọn ngày</button>
                  </div>
                </div>

                {/* Khách sạn 13: Green Village Mekong */}
                <div className="hotel-card">
                  <div className="hotel-img-wrap">
                    <div className="hotel-img artur-bg"></div>
                    <button className="wishlist-btn"><FontAwesomeIcon icon={faHeart} /></button>
                  </div>
                  <div className="hotel-info">
                    <div className="hotel-title-row">
                      <h3>Green Village Mekong</h3>
                      <div className="hotel-stars">
                        <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                      </div>
                    </div>
                    <p className="hotel-location">Cần Thơ · <span className="link">Xem trên bản đồ</span> · Trải nghiệm sinh thái</p>
                    <p className="hotel-distance">📍 Tọa lạc tại Khu vực Phù Thú, Cái Răng, Cần Thơ</p>
                    <p className="hotel-desc">Khu nghỉ dưỡng sinh thái xanh mát nép mình bên những rặng dừa nước, mang lại cảm giác thư thái tuyệt đối và trải nghiệm văn hóa bản địa chân thực.</p>
                  </div>
                  <div className="hotel-pricing-action">
                    <div className="review-box">
                      <div className="review-text">
                        <span className="review-status">Tuyệt hảo</span>
                        <span className="review-count">440 đánh giá</span>
                      </div>
                      <div className="review-score">9,2</div>
                    </div>
                    <button className="choose-date-btn">Chọn ngày</button>
                  </div>
                </div>

            </div>
          </div>

        </div>
      </div>

      {/* Footer tách riêng */}
      <Footer />
    </div>
  );
}