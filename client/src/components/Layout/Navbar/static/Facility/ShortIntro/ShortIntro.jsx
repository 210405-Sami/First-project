import React from "react";
import "./ShortIntro.css";
import ImageHos from "../../../../../../assets/images/hospital/hos.jpg"; // ✅ Correct path & variable name

const ShortIntro = () => {
  return (
    <>
      <div className="intro-container container">
        <div className="row align-items-center">
          {/* Left: Image */}
          <div className="col-md-6 img-container">
            <img src={ImageHos} alt="hospital" className="hos-image" />
          </div>

          {/* Right: Text Content */}
          <div className="col-md-5 info-container">
            <h2>About Our Hospital</h2>
            <p>
              We provide the best medical care with modern facilities,
              experienced doctors, and compassionate staff to ensure
              the well-being of every patient.
            </p>
            <button className="btn btn-primary">Book An Appointment Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortIntro;
