import React, { useState } from 'react';
import './Form.css';

function MyForm() {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhno] = useState('');
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(name === '') {
            alert("Name cannot be empty!");
            return;
        }

        if(!/^[a-zA-Z]+$/.test(name)) {
            alert("Name can contain only letters");
            return;
        }

        if(dob === '') {
            alert("Date of birth cannot be empty!");
            return;
        }

        if(!/^\d{2}\/\d{2}\/\d{4}$/.test(dob)) {
            alert("Date of birth should be in DD/MM/YYYY format");
            return;
        }

        if(email === '') {
            alert("Email cannot be empty!");
            return;
        }

        if(!email.includes('@') || !email.includes('.')) {
            alert("Email should contain both '@' and '.'");
            return;
        }

        if(email.length > 50) {
            alert("Email length must be less than 50 characters");
            return;
        }

        if(phno === '') {
            alert("Phone number cannot be empty!");
            return;
        }

        if(isNaN(phno) || phno.length !== 10) {
            alert("Phone number must be a valid 10-digit number");
            return;
        }

        if(uname === '') {
            alert("Username cannot be empty!");
            return;
        }

        if(/[^a-zA-Z0-9]/.test(uname) || uname.length >= 15) {
            alert("Username must be less than 15 characters and must not include special characters");
            return;
        }

        if(pass === '') {
            alert("Password cannot be empty!");
            return;
        }

        if(!/(?=.*[^A-Za-z0-9].*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]).{10,}/.test(pass)) {
            alert("Password must be at least 10 characters long and include 2 special characters, a capital letter, and a lowercase letter");
            return;
        }

        if(cpass === '') {
            alert("Confirm Password cannot be empty!");
            return;
        }

        if(pass !== cpass) {
            alert("Password and Confirm Password values do not match");
            return;
        }

        // If all validations pass, you can proceed with form submission or further actions
        console.log("Form submitted successfully!");
    };

    return (
        <body className="backgroundColor">
            <form onSubmit={handleSubmit}>
                <label>Name:</label> <br />
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <label>Date of Birth:</label>
                <input type="text" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} /> <br />
                <label>Email:</label>
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <label>Phone Number:</label>
                <input type="text" name="phno" value={phno} onChange={(e) => setPhno(e.target.value)} /> <br />
                <label>Username:</label>
                <input type="text" name="uname" value={uname} onChange={(e) => setUname(e.target.value)} /> <br />
                <label>Password:</label>
                <input type="password" name="pass" value={pass} onChange={(e) => setPass(e.target.value)} /> <br />
                <label>Confirm Password:</label>
                <input type="password" name="cpass" value={cpass} onChange={(e) => setCpass(e.target.value)} /> <br />

                <button type="submit">Submit</button>
            </form>
        </body>
        
    );
}

export default MyForm;