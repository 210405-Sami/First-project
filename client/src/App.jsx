import './App.css';
import Footer from './components/Layout/Footer/Footer';
import Navbar from './components/Layout/Navbar/Navbar';
import About from "./pages/about";
import Register from './pages/Auth/Register';
import Contact from "./pages/contact";
import Gallerypage from './pages/Gallery/Gallerypage';
import Home from "./pages/Home";
import {Routes,Route } from 'react-router';
import {Toaster} from 'react-hot-toast';
import Login from './pages/Auth/Login';
import AllDoctors from './pages/Doctors/AllDoctors';
import Appointments from './pages/Doctors/Appointments';
import UserProfile from './pages/User/UserProfile';
import MyAppointment from './pages/User/MyAppointment';


function App() {
 return (
    <>
      <Navbar />
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/gallery" element={<Gallerypage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/doctors" element={<AllDoctors/>}/>
        <Route path="/appointments/:id" element={<Appointments/>}/>
        <Route path="/user/profile" element={<UserProfile/>}/>
        <Route path="/user/appointments" element={<MyAppointment/>}/>
      </Routes>
      <Footer/>
      </>
      
  );
}

export default App

