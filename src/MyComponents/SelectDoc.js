import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
function ChooseDoc()
{
    const [docs, setDocs] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/Doc.json');
          setDocs(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    fetchData();
    }, []);
    return(
    <div className='assign'>
        <u><p className='home-logout'><a href='/SignInPage'>logout</a></p></u>
        <u><p className='home-logout'><a href='/'>Home</a></p></u>
        <h1 className='header2'>Doctors list</h1>
        <table >
          <thead>
           <tr >
            <th>Name</th>
            <th>speciality</th>
           </tr>
          </thead>
          <tbody>
        {docs.map((docs, index) => (
          <tr key={index}>
            <td>{docs.Doc}</td>
            <td>{docs.speciality}</td>
            <button ><a href='/ShowAppointment'>Select</a></button>
          </tr>
        ))}
      </tbody>
        </table>
        <button ><a href='/'>Back</a></button>
    </div>
    )
    
}
export default ChooseDoc;