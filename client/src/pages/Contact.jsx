import React from 'react'
import ContactMessage from '../components/Layout/Navbar/static/ContactMessage/ContactMessage'

const contact = () => {
  return (
    <>
     <div className="d-flex mt-5 justify-content-center">
        <h6>
           
            <i className="fa-solid fa-phone-volume ms-3"></i>Emergency Call:8770180411</h6>
        <h6>
            
            <i className="fa-solid fa-clock ms-3"></i> 10:00am To 10:00pm</h6>
        <h6>
           
            <i className="fa-solid fa-envelope ms-3"></i>samikshaGarg2020@gmail.com</h6>
        
           
     </div>
     <ContactMessage/>
    </>
  )
}

export default contact