import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';

const Pschedule = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.get('${apiUrl}/patient/appointments/<int:pk>/available');
            setPatients(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    fetchData();
      }, []);

    const CLEAR= async (pk) =>
    {
      try{
        const apiUrl = process.env.REACT_APP_API_URL;
        await axios.delete('${apiUrl}/doctor/appointment/${pk}>');
      }
    catch (error) {
      console.error('Error canceling appointment:', error);
    }
    }
    const ChangeDocName= async (pk) =>
    {
        let i=document.getElementById("changeDoc").value;
    }
    const ChangeSlot= async (pk) =>
    {
        let in1=document.getElementById("changestart").value;
        let in2=document.getElementById("changeend").value;
        let in3=document.getElementById("changestart2").value;
        let in4=document.getElementById("changeend2").value;
    }

    return (
        <div className='assign'>
           <u><p className='home-logout'><a href='/SignInPage'>logout</a></p></u>
           <u><p className='home-logout'><a href='/'>Home</a></p></u>
            <h1 className='header2'>YOUR Reservations</h1>
            <br />
            <br />
           
        <table >
        <thead>
        <tr >
            <th>Patient Name</th>
            <th>Doctor Name</th>
            <th>speciality</th>
            <th>Day</th>
            <th>start_time</th>
            <th>end_time</th>
        </tr>
        </thead>
        <tbody>
        {patients.map((patients, index) => (
          <tr key={index}>
            <td>{patients.patientname}</td>
            <td>{patients.Docname}</td>
            <td>{patients.speciality}</td>
            <td>{patients.Day}</td>
            <td>{patients.Start}</td>
            <td>{patients.end}</td>
            <button onClick={() =>CLEAR()}>Cancel</button>
            <input type='text' id='changeDoc' placeholder='Enter name'/>
            <button onClick={() =>ChangeDocName()}>Change doctor</button>
            <input type='text' id='changestart' placeholder='Enter srart-time'/>
            <input type='text' id='changeend' placeholder='Enter end-time'/>
            <button onClick={() =>ChangeSlot()}>Change slot</button>
          </tr>

        ))}
      </tbody>
    </table>
    <br/>
    <br/>
    <br/>
    <button ><a href='/'>Back</a></button>
    </div>
        );
      
};
    
export default Pschedule;
