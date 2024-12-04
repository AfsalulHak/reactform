import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import success from './assets/success.png'

const ViewRegistration = () => {
  const [registrationData, setRegistrationData] = useState(null);

  useEffect(() => {
    // Retrieve the students' data from sessionStorage
    const students = JSON.parse(sessionStorage.getItem('students')) || [];

    // Get the last registered student's data (or first, depending on your requirement)
    const lastRegisteredStudent = students[students.length - 1];

    // Set the last registered student's data to state
    setRegistrationData(lastRegisteredStudent);
  }, []);

  return (
    <div className="d-flex  align-items-center justify-content-center mt-3">
    <div className=' p-4 border rounded shadow-sm'>
        {registrationData ? (
          <div>
            <h2 className='text-info'>Hello <span className='text-warning'>{registrationData.name}</span> </h2>
            <p className='text text-success text-center fs-5'>You are Registered Successfully</p>
            <img className='img-fluid ' src={success} alt="" />
          </div>
        ) : (
          <p>No registration data found.</p>
        )}
        
  
          <div>
          <Link to="/" className="btn btn-primary mt-5">Go to Registration</Link>
          </div>
    </div>
    </div>
  );
};

export default ViewRegistration;
