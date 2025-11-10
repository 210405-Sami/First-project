import React from 'react'
import './Facility.css'
import FacilityData from './FacilityData.json'

const Facility = () => {
  return (
    <>
      <h1 className="FacilityHeading">Facilities</h1>
      <div className="Facility-container">
        {FacilityData.map((d, i) => (
          <div className="card" key={i}>
            <i className={`${d.icon} card-img-top fa-3x`} style={{ color: 'black', marginBottom: '10px' }}></i>
            <div className="card-body">
              <h5 className="card-title">{d.title}</h5>
            </div>
          </div>
        ))}
      </div> 
    </>
  )
}

export default Facility
