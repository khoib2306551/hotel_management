import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCircleQuestion,
  faCalendarDays,
  faUser,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';

export default function Header() {
  return (
    <header className="header-container">
      {/* Navbar Top */}
      <div className="navbar-top">
        <div className="logo">GoCheap</div>

        <div className="navbar-center">
          <span className="currency">VND</span>
          <div className="vietnam-flag-circle" title="Tiếng Việt">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <circle cx="12" cy="12" r="12" fill="#da251d" />
              <polygon
                points="12,6 13.5,10 17.5,10 14.2,12.3 15.5,16.3 12,14 8.5,16.3 9.8,12.3 6.5,10 10.5,10"
                fill="#ff0"
              />
            </svg>
          </div>
          <FontAwesomeIcon icon={faCircleQuestion} className="nav-icon" />
        </div>

        <div className="navbar-right">
          <button className="auth-btn">Đăng ký</button>
          <button className="auth-btn">Đăng nhập</button>
        </div>
      </div>

      {/* Navigation Tab: Chỉ giữ lại Lưu trú */}
      <div className="navbar-bottom">
        <div className="nav-tab active">
          <FontAwesomeIcon icon={faBed} /> <span>Lưu trú</span>
        </div>
      </div>

      {/* Thanh tìm kiếm nhúng trực tiếp lên Header */}
      <div className="header-search-wrapper">
        <div className="search-bar-container">
          <div className="search-input-group">
            <FontAwesomeIcon icon={faBed} className="search-icon" />
            <div className="input-field">
              <label>Nhập điểm đến</label>
              <input type="text" defaultValue="Cần Thơ" />
            </div>
            <FontAwesomeIcon icon={faXmark} className="clear-icon" />
          </div>

          <div className="search-input-group">
            <FontAwesomeIcon icon={faCalendarDays} className="search-icon" />
            <div className="input-field">
              <label>Chọn ngày</label>
              <span className="date-text">Nhận phòng — Trả phòng</span>
            </div>
          </div>

          <div className="search-input-group">
            <FontAwesomeIcon icon={faUser} className="search-icon" />
            <div className="input-field">
              <label>Chọn số lượng</label>
              <span className="date-text">1 người lớn · 0 trẻ em · 1 phòng</span>
            </div>
          </div>

          <button className="search-submit-btn">
            Tìm
          </button>
        </div>
      </div>
    </header>
  );
}