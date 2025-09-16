import React, { useEffect } from "react";
import "./Contact.css"; // Import CSS

const Contact = () => {
//   useEffect(() => {
//     // Load Google Maps script dynamically
//     const script = document.createElement("script");
//     script.src =
//       "https://maps.googleapis.com/maps/api/js?key=AIzaSyB1lePlPe-feK9JxpKqJriRhIWzyqB_p0A&callback=initMap";
//     script.async = true;
//     window.initMap = initMap;
//     document.body.appendChild(script);

//     function initMap() {
//       const location = { lat: 17.429674, lng: 78.432206 };
//       const map = new window.google.maps.Map(document.getElementById("map"), {
//         zoom: 12,
//         center: location,
//       });
//       new window.google.maps.Marker({
//         position: location,
//         map: map,
//       });
//     }
//   }, []);

  // Form Validation
  const validateForm = (e) => {
    e.preventDefault();
    let isValid = true;

    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;

    document.getElementById("error-fname").textContent = "";
    document.getElementById("error-email").textContent = "";

    const fullnamePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fname === "") {
      document.getElementById("error-fname").textContent =
        "* Full Name is required";
      isValid = false;
    } else if (!fullnamePattern.test(fname)) {
      document.getElementById("error-fname").textContent =
        "* Only letters and spaces allowed";
      isValid = false;
    }

    if (email === "") {
      document.getElementById("error-email").textContent =
        "* Email is required";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      document.getElementById("error-email").textContent =
        "* Enter valid email (e.g., abc@example.com)";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      <div className="heading">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-page">
        <div className="combiner">
          {/* Left Section */}
          <div className="container">
            <h1>Address:</h1>
            <div className="address">
              <p>Greenply building, First Floor,</p>
              <p>8-3-976/94/c, Shalivahana Colony,</p>
              <p>Opp: Indian Oil Petrol Pump</p>
              <p>Telangana, Hyderabad, India</p>
              <p>📞 +91 9000466522</p>
            </div>

            <div className="frm">
              <h2>
                <span>|</span> Form
              </h2>
              <form onSubmit={validateForm}>
                <label>Full Name</label>
                   <input type="text" id="fname" placeholder="Full Name" />
                <div className="error" id="error-fname"></div>
                <label>Email Address</label>
                <input type="text" id="email" placeholder="Email ID" />
                <div className="error" id="error-email"></div>
                <label>Message</label>
                <textarea
                  id="addinfo"
                  placeholder="Type your message"
                  className="textarea"
                ></textarea>{" "}
                <br />
                <button type="submit" className="submit">
                  Contact
                </button>
              </form>
            </div>
          </div>

          {/* Right Section (Google Map) */}
          <div className="map-container">
            <h1 className="heading1">Our Location :</h1>
            <div id="map"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;