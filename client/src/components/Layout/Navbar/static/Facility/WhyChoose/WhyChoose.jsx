import React from 'react';
import './WhyChoose.css';
import image1 from '../../../../../../assets/images/hospital/personalize excellence.png';
import image2 from '../../../../../../assets/images/hospital/trusted care.png';
import image3 from '../../../../../../assets/images/hospital/empowering.png';

const WhyChoose = () => {
  return (
    <>
      <h1 className="text-center mt-5 mb-4">Why Choose Us?</h1>

      <div className="why-container">
        {/* Personalized Excellence */}
        <div className="why-card">
          <img src={image1} alt="Personalized Excellence" />
          <h2>Personalized Excellence</h2>
          <p>
            We believe every patient deserves care tailored to their unique needs. 
            Our doctors combine advanced medical expertise with a compassionate approach 
            to deliver treatments that fit you personally — ensuring excellence in every 
            consultation and procedure.
          </p>
        </div>

        {/* Trusted Care */}
        <div className="why-card">
          <img src={image2} alt="Trusted Care" />
          <h2>Trusted Care</h2>
          <p>
            Our hospital stands for reliability and compassion. 
            With years of experience and a dedicated team of professionals, 
            we ensure your health and well-being are always our top priority. 
            Trust us to provide safe, transparent, and ethical medical care.
          </p>
        </div>

        {/* Empowering Wellness Journey */}
        <div className="why-card">
          <img src={image3} alt="Empowering Wellness Journey" />
          <h2>Empowering Wellness Journey</h2>
          <p>
            We go beyond treatment — empowering you to lead a healthier and more confident life. 
            Through education, preventive care, and holistic wellness programs, 
            we guide you on every step of your journey to lasting health and vitality.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
