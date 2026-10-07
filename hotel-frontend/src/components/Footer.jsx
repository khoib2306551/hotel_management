import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* 5 Cột liên kết */}
      <div className="footer-links-grid">
        <div className="footer-column">
          <h4>Hỗ trợ</h4>
          <ul>
            <li>Liên hệ Dịch vụ Khách hàng</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Khám phá thêm</h4>
          <ul>
            <li>Chương trình khách hàng thân thiết</li>
            <li>Ưu đãi theo mùa và dịp lễ</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Điều khoản và cài đặt</h4>
          <ul>
            <li>Điều khoản dịch vụ</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Về chúng tôi</h4>
          <ul>
            <li>Về GoCheap</li>
          </ul>
        </div>
      </div>

      {/* Phần thông tin bản quyền và tập đoàn */}
      <div className="footer-bottom-info">
        <p className="footer-disclaimer">
          GoCheap là một phần của Booking Company, tập đoàn đứng đầu thế giới về du lịch trực tuyến và các dịch vụ liên quan.
        </p>
        <p className="footer-copyright">
          Bản quyền © 2026 GoCheap™.
        </p>

        {/* Logo các thương hiệu trực thuộc */}
        <div className="footer-brand-logos">
          <span className="brand-logo booking">GoCheap</span>
          <span className="brand-logo priceline">priceline®</span>
          <span className="brand-logo kayak">KAYAK</span>
          <span className="brand-logo agoda">agoda</span>
          <span className="brand-logo opentable">OpenTable</span>
        </div>
      </div>
    </footer>
  );
}