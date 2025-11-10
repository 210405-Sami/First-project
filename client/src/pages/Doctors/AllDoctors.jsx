import React, { useState } from 'react';
import AllDoctorsData from './DoctorsData.json';
import { NavLink } from 'react-router-dom';
import './AllDoctors.css';

const AllDoctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className="container doc-container">
      <h4 className="text-center text-primary mt-3">
        Select a Doctor and book your appointment online now!
      </h4>

      <div className="doctors-wrapper">
        {AllDoctorsData.map((d) => (
          <div
            key={d.id}
            className={`card ${selectedDoctor === d.id ? 'selected-blue' : ''}`}
            onClick={() => setSelectedDoctor(d.id)}
          >
            <NavLink to={`/appointments/${d.id}`}>
              <img
                src={d.pic}
                alt="doctor"
                width={150}
                height={150}
                className="card-img-top"
              />
              <div className="card-body">
                <h6>{d.name}</h6>
                <p>{d.degree}</p>
              </div>
              <div className="card-footer">
                <p>
                  {/* 👇 Dentist icon or any icon */}
                  <i className="fa-solid fa-tooth"></i> {d.speciality}
                </p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDoctors;
