import React from 'react'; 
const HomePage = () => {
  return (
    <div className='assign'>
      <p className='home-logout'><a href='/SignInPage'>logout</a></p>
      
      <br />
      <p className='header2'><i>Home page</i></p>
      <br />
      <br />
      <br />
      <button type='button' className='choice'><a href='/ChooseDoc'>Select Doctor</a></button>
      <button type='button' className='choice'><a href='/Pschedule'>View reservations</a></button>
      <button type='button' className='choice'><a href='/DocSchedule'>Set schedule for doctor</a></button>
    </div>
  );
};
export default HomePage;