import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div className="Logo-footer">
          <h2 className="mt-0 mb-0">MetCog</h2>
          <p className="Small-p mb-0">Mindfulness at work</p>
      </div>
      {/* <div className="Resources-footer">
        <p className="mt-0"><strong>Why breathe?</strong></p>
        <p className="light-grey">About us</p>
        <p className="light-grey">Design</p>
        <p className="light-grey">Member area</p>
      </div> */}
      <div className="Contact-footer">
        <p><strong>Contact</strong></p>
        <p>What to help us improve?</p>
        <p className="mb-0">Email us at:</p>
        <a href="mailto:richardgrinerdesigns@gmail.com?subject=Metcog Inquiry">richardgrinerdesigns@gmail.com</a>
      </div>
    </div>
  );
}

export default Footer;
