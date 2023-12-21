import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';

const Pschedule = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/patients.json');
            setPatients(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    fetchData();
      }, []);
    function CLEAR()
    {
        if(array=="array1")
        {setArray1([ ])}
        else{setArray2([ ])}
      
    }
    function ChangeDocName()
    {
        /*let i=document.getElementById("changeDoc").value;
        let i1=document.getElementById("changeDoc2").value;
        if(array==array1 && i!="")
        {   const newData = [...array1];
            newData[0] = i;
            setArray1(newData);
        }
        else if(array==array2 && i1!="")
        {
            const newData = [...array2];
            newData[0] = i1;
            setArray2(newData);
        }*/
    }
    function ChangeSlot()
    {
       /* let in1=document.getElementById("changestart").value;
        let in2=document.getElementById("changeend").value;
        let in3=document.getElementById("changestart2").value;
        let in4=document.getElementById("changeend2").value;
        if(array==array1 && in1!="" && in2!="" )
        {   const newData = [...array1];
            newData[2] = in1;
            newData[3] = in2;
            setArray1(newData);
        }
        else if(array==array2 && in3!="" && in4!="")
        {
            const newData = [...array2];
            newData[2] = in3;
            newData[3] = in4;
            setArray2(newData);
        }*/
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