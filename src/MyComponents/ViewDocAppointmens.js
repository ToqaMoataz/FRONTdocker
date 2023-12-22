import React, { useState, useEffect } from 'react';
import axios from 'axios';
import selected from './MyComponents/SelectDoc.js';
function ShowAppointment() {
  const name=selected;
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const response = await axios.get('${apiUrl}/doctor/appointment/');
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
fetchData();
  }, []);

   return (
    <div className='assign'>
      <u>
        <p className='home-logout'>
          <a href='/SignInPage'>logout</a>
        </p>
      </u>
      <u>
        <p className='home-logout'>
          <a href='/'>Home</a>
        </p>
      </u>
      <h1 className='header2'>Appointments</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Speciality</th>
            <th>Day</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctors, index) => {
            // Use an if statement to conditionally render appointments with the name "osama"
            if (doctors.Name.toLowerCase() ==name) {
              return (
                <tr key={index}>
                  <td>{doctors.Name}</td>
                  <td>{doctors.speciality}</td>
                  <td>{doctors.Day}</td>
                  <td>{doctors.Start}</td>
                  <td>{doctors.end}</td>
                  <button><a href='/Pschedule'>Reserve</a></button>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
      <button>
        <a href='/ChooseDoc'>Back</a>
      </button>
    </div>
  );
}

export default ShowAppointment;
