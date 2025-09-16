import React from "react";
import "./CallNowButton.css"; // Import CSS file

export default function CallNowButton() {
  return (
    <a href="tel:+919876543210" className="call-now-btn">
      📞 Call Now
    </a>
  );
}
