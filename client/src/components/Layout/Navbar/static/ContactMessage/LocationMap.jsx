import React from 'react';

const LocationMap = () => {
  return (
    <>
      <div className="location-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1789.4617486459858!2d78.22455215000001!3d26.2316752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1761241006543!5m2!1sen!2sin"
        width={"100%"}
        height={400}
        style={{ border: "0", width: "100%", borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Hospital Location"
      ></iframe>
      </div>
    </>
  );
};

export default LocationMap;
