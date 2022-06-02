import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div className="Logo-footer">
          <h2 className="mt-0">MetCog</h2>
          <p className="Small-p">Mindfulness at work</p>
      </div>
      <div className="Resources-footer">
        <p className="mt-0"><strong>Why breathe?</strong></p>
        <p className="light-grey">About us</p>
        <p className="light-grey">Design</p>
        <p className="light-grey">Member area</p>
      </div>
      <div className="Contact-footer">
        <p className="mt-0 big-p">Contact</p>
        <a href="mailto:richardgrinerdesigns@gmail.com?subject=Metcog Inquiry">richardgrinerdesigns@gmail.com</a>
        <p className="mb-0">What to help us improve?</p>
        <div className="flex">
          <p className="pr-5">Click</p>
          <a href="mailto:richardgrinerdesigns@gmail.com?subject=Metcog Inquiry" className="link">here</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
