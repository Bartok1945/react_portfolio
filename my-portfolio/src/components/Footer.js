import React from "react";
import "./components.css";

const Footer = () => {
  return (
    <footer id="footer" className="py-3">
      <div className="container text-center">
        <i className="bi bi-telephone"> 301.401.9189</i> |
        <i className="bi bi-envelope"> thom.huenger@gmail.com</i> |&nbsp;
        <i className="bi bi-file-arrow-down">
          <a href="https://drive.google.com/file/d/1bXML0iv_gER7iG9F4JjhdeGUslCn6aET/view?usp=sharing" target="_blank" rel="noreferrer">
            Resume
          </a>
        </i>

        <br />
        <small>&copy; Copyright 2021 Thom Huenger</small>
      </div>
    </footer>
  );
};

export default Footer;