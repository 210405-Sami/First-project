import React from 'react'
import Slider from '../components/Layout/Navbar/Slider/Slider'
import Facility from '../components/Layout/Navbar/static/Facility/Facility'
import ShortIntro from '../components/Layout/Navbar/static/Facility/ShortIntro/ShortIntro'
import WhyChoose from '../components/Layout/Navbar/static/Facility/WhyChoose/WhyChoose'
import ContactMessage from '../components/Layout/Navbar/static/ContactMessage/ContactMessage'
// import the reviews component with a capitalized name
import PatientReviews from '../components/Layout/Navbar/static/patientReviews/patientReviews'

const Home = () => {
  return (
    <>
      {/* slider */}
      <Slider />
      {/* facility */}
      <Facility />
      {/* short hospital intro  */}
      <ShortIntro />
      {/* why choose page */}
      <WhyChoose />
      {/* testimonial */}
      <PatientReviews />
      {/* contact */}
      <ContactMessage />
    </>
  )
}

export default Home
