import axios from 'axios';
import React from 'react';
import{ useState, useEffect } from 'react';
const Insert= async (pk) =>
{
  try{
    const apiUrl = process.env.REACT_APP_API_URL;
    await axios.post('${apiUrl}/doctor/appointment/${pk}>');
  }
  catch (error) {
  console.error('Error canceling appointment:', error);}
}
const DSchedule = () => {
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
        <u><p className='home-logout'><a href='/SignInPage'>logout</a></p></u>
        <h1 className='header2'>YOUR Schedule</h1>
        <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctors, index) => {
              return (
                <tr key={index}>
                  <td>{doctors.Day}</td>
                  <td>{doctors.Start}</td>
                  <td>{doctors.end}</td>
                </tr>
              );
          })}
        </tbody>
        </table>
        <br />
        <br />
        <label className='organize'>Day</label>
        <input type='text' id='appointmentDay'/>
        <label className='organize' id='appointmentStart'>Start-Time</label>
        <input type='text'/>
        <label className='organize'id='appointmentEnd'>end-Time</label>
        <input type='text'/>
        <button className='organize' onClick={Insert}>Insert</button>
        <button ><a href='/'>Back</a></button>

    </div>
    
      
    
  );
  
};

export default DSchedule;
