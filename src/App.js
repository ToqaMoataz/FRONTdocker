import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';

import crypto from 'crypto'
import SignUpPage from './MyComponents/SignUp.js'
import SignInPage from './MyComponents/Login.js'
import HomePage from './MyComponents/Home.js';
import DSchedule from './MyComponents/DoctorSechdule.js';
import ChooseDoc from './MyComponents/SelectDoc.js';
import Pschedule from './MyComponents/patientSchedule.js';
import ShowAppointment from './MyComponents/ViewDocAppointmens.js';
function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
             <Route exact path='/' element={<HomePage/>}/>
             <Route exact path='/SignInPage' element={<SignInPage/>}/>
             <Route exact path='/SignUpPage' element={<SignUpPage/>}/>
             <Route exact path='/Pschedule' element={<Pschedule/>}/>
             <Route exact path='/DocSchedule' element={<DSchedule/>}/>
             <Route exact path='/ChooseDoc' element={<ChooseDoc/>}/>
             <Route exact path='/ShowAppointment' element={<ShowAppointment/>}/>
          </Routes>
        </div>
    </BrowserRouter>

  );
}
export default App;


