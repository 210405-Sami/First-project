import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DoctorData from './DoctorsData.json';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes } from 'date-fns';

const Appointments = () => {
  const { id } = useParams();
  const [docInfo, setDocInfo] = useState({});
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  // find doctor info
  const getDocInfo = async () => {
    const doctor = DoctorData.find((doc) => String(doc.id) === String(id));
    setDocInfo(doctor || {});
    console.log('found doctor:', doctor);
  };

  useEffect(() => {
    getDocInfo();
  }, [id]);

  // Set time limits for datepicker (9 AM to 10 PM)
  const minTime = setHours(setMinutes(new Date(), 0), 9);
  const maxTime = setHours(setMinutes(new Date(), 0), 22);

  return (
    <>
      <div className="container docinfo-container">
        <div className="row m-3">
          {/* Doctor Info Section */}
          <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
            <img
              src={docInfo?.pic}
              alt="docImage"
              height={200}
              width={200}
              style={{ objectFit: 'cover', borderRadius: 8 }}
            />
            <h6>{docInfo?.name || '—'}</h6>
            <h6 className={docInfo?.available ? 'text-success' : 'text-danger'}>
              {docInfo?.available ? 'Available' : 'Not Available'}
            </h6>
          </div>

          {/* Doctor Details & Booking Section */}
          <div className="col-md-8 d-flex flex-column justify-content-center m-3">
            <h6>Experience: {docInfo?.experience ? `${docInfo.experience} Years` : '—'}</h6>
            <h6>About Doctor:</h6>
            <p>{docInfo?.about || 'No description available.'}</p>
            <h5>Consultation Fee: {docInfo?.fee ? `₹${docInfo.fee}` : '—'}</h5>

            {/* Date-Time Picker */}
            <div className="date-time mt-3">
              <h6 className="">Select Your Booking Date & Time :👇</h6>
              <DatePicker
                className="calendar form-control"
                minDate={new Date()}
                selected={selectedDateTime}
                onChange={(date) => setSelectedDateTime(date)}
                showTimeSelect
                timeFormat="h:mm aa"
                timeIntervals={30}
                dateFormat={'d-MMM-yyyy h:mm aa'}
                timeCaption="Time"
                minTime={minTime}
                maxTime={maxTime}
              />
              <p style={{ marginTop: 12 }}>
                Your Selected Booking:{' '}
                {selectedDateTime
                  ? selectedDateTime.toLocaleString()
                  : 'Please select a date & time'}
              </p>
            </div>

            {/* Booking Button */}
            <button
              className="btn btn-primary w-50"
              disabled={!docInfo?.available}
              onClick={() => {
                if (!docInfo?.available) return;
                alert(
                  `Appointment booked with ${docInfo?.name} on ${selectedDateTime?.toLocaleString()}`
                );
              }}
            >
              {docInfo?.available ? 'Book Now' : 'Doctor Not Available'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointments;
