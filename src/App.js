import './App.css';
import React, {useState} from 'react';
import { PanelList } from './Components/PanelList';
import { AllStudents } from './Components/AllStudents';
import { AddStudents } from './Components/AddStudents';
import { EditStudents } from './Components/EditStudents';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { GenerateReports } from './Components/GenerateReports';
import { Home } from './Home';

export const studentContext = React.createContext();

export default function App() {
  const [student, setStudent] = useState([])

  return (
  <div className="App">
    <div className='admin-dashboard'>
    <BrowserRouter>
     <studentContext.Provider value={{student, setStudent}}>
      <div><PanelList /></div>
      <div>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/dashboard" element={<GenerateReports />} />
        <Route path="/all-students" element={<AllStudents />} />
        <Route path="/add-students" element={<AddStudents />} />
        <Route path="/edit-students/:id" element={<EditStudents />} />
      </Routes>
      </div>
      </studentContext.Provider>
      
    </BrowserRouter>
    
    </div>
  </div>
  );
}