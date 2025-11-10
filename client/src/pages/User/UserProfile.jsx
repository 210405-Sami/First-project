import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // correct package

import EditUserprofile from './EditUserprofile';

const UserProfile = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // clear auth tokens if needed, e.g. localStorage.removeItem('token');
    toast && toast.success && toast.success('Logged out successfully');
    navigate('/login', { replace: true });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h4 className="text-center">Manage Your Account & Appointments</h4>

          <div className="col-md-3">
            <img
              src="/images/user-placeholder.png" // replace with real user.avatar
              alt="userPic"
              className="card p-2"
              width={200}
            />
          </div>

          <div className="col-md-8 mt-3">
            <div className="user-container mb-3">
              <h6>
                Name: <small className="text-muted">John Doe</small>
              </h6>
              <h6>
                Gender: <small className="text-muted">Female</small>
              </h6>
              <h6>
                DOB: <small className="text-muted">01-01-1990</small>
              </h6>
              <h6>
                Email: <small className="text-muted">john@example.com</small>
              </h6>
              <h6>
                Phone: <small className="text-muted">+91 98765 43210</small>
              </h6>
              <h6>
                Address: <small className="text-muted">City, State, Country</small>
              </h6>
            </div>

            <div className="button-container mt-5">
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => setIsOpen(prev => !prev)}
              >
                <i className="fa-solid fa-pen-to-square me-2"></i>
                Edit Profile
              </button>

              <button
                type="button"
                className="btn btn-primary ms-3"
                onClick={() => navigate('/user/appointments')}
              >
                <i className="fa-solid fa-list me-2"></i>
                Appointments
              </button>

              <button
                type="button"
                className="btn btn-danger ms-3"
                onClick={handleLogout}
              >
                <i className="fa-solid fa-power-off me-2"></i>
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && <EditUserprofile isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default UserProfile;
