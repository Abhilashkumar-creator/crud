import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { studentContext } from '../App';

export function AddStudents () {
    // Subscribe to a context
    const studentData = React.useContext(studentContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [standard, setStandard] = useState("");

    const nav = useNavigate();
    
    const handleSubmit = () => {
        const addStudents = {
            name,
            email,
            mobile,
            standard
        }
        studentData.setStudent([...studentData.student, addStudents])
        nav('/all-students')
    }

    return (
    <div>
        <h1 style={{textAlign: 'center', fontSize: '1.5rem', fontWeight: '600'}}>Add Student Record</h1>

        <form className='add-students' onSubmit={handleSubmit}>
        <TextField label="Enter Name" variant="outlined" id='name' name='name' onChange={(e) => setName(e.target.value)}
        />

        <TextField label="Enter Email" variant="outlined" id='email' name='email' onChange={(e) => setEmail(e.target.value)}
        />
    
        <TextField label="Enter Mobile" variant="outlined" id='mobile' name='mobile' type='number'  onChange={(e) => setMobile(e.target.value)}
        />
    
        <TextField label="Enter Standard" variant="outlined" id='standard' name='standard'  onChange={(e) => setStandard(e.target.value)}
        />
    
        <Button type="submit" variant="contained">Add Student</Button>
      </form>
    </div>
    )
}