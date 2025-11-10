import React from 'react';
import './User.css';

const EditUserprofile = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="editModal modal d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            
            <div className="modal-header">
              <h5 className="modal-title">Edit Your Profile</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body">
              <div className="mod-detailed d-flex flex-column gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="userpic" height={80} width={100} />
                <input type="file" />
                <input type="text" placeholder="Name" />

                <div className="d-flex flex-row">
                  <select className="m-1">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <input type="date" placeholder="dob" />
                </div>

                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Address" />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUserprofile;
