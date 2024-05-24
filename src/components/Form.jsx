import React, { useState } from 'react';
import Information from './Information';

const SignupDetails = {
    first: "",
    last: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    country: "India",
    city: "Delhi",
    pan: "",
    aadhar: ""
};

const Form = () => {
    const [signup, setSignup] = useState(SignupDetails);
    const [isSubmit, setIsSubmit] = useState(false);
    const [okEmail, setOKEmail] = useState(false);
    const [success, setSuccess] = useState(false);


    const handleChange = (e) => {
        const { id, value } = e.target;
        setSignup(prevState => ({
            ...prevState,
            [id]: value
        }));

        // Validate email when it changes
        if (id === 'email') {
            check(value);
        }
    };

    const check = (value)=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setOKEmail(emailRegex.test(value));
        return emailRegex.test(value);
    }


    const showPass = () => {
        const passwordInput = document.getElementById('password');
        const showBtn = document.getElementById('showbtn');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showBtn.innerHTML = 'Hide';
        } else {
            passwordInput.type = 'password';
            showBtn.innerHTML = 'Show';
        }
    };
    const isEmptyObject = (obj) => {
        // Loop through each property of the object
        for (const key in obj) {
          // Check if the property exists and has a value (excluding 0)
          if (obj.hasOwnProperty(key) && (obj[key] === "" || typeof obj[key] === 'undefined')) {
            return false; // If any value is empty or undefined, return false
          }
        }
      
        // No need for a separate return statement here
        // If the loop completes without returning false, all values are non-empty
        // (this is the implicit behavior)
      };

    const handleSubmit = ()=>{
        setIsSubmit(true);
        if (
            signup.first !== "" &&
            signup.last !== "" &&
            signup.username !== "" &&
            signup.password !== "" &&
            okEmail &&
            signup.phone !== "" &&
            signup.country !== "" &&
            signup.city !== "" &&
            signup.pan !== "" &&
            signup.pan.length===10 &&
            signup.aadhar !== ""&&
            signup.aadhar.length ===12
          ) {
            setSuccess(true);
          }
          else{
            console.log(isEmptyObject(signup));
            console.log(signup);
          }
        
    }

    return (
        <>
            <h1>Signup Form</h1>

            {success ?
                <Information signup = {signup}/>
                :
            (   
            <div className="main" style={{ border: "1px solid black", height: "80vh", width: "40%", margin: "auto" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <p style={{ width: "50%", textAlign: "left", marginLeft: "30px" }}>First Name:</p>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <input id="first" type="text" placeholder="First Name" onChange={handleChange} />
                        {isSubmit && signup.first==='' && (<span style={{color : "red", fontSize: "10px"}}>Cannot be Left empty</span>) }
                    </div>
                    
                </div>


                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <p style={{ width: "50%", textAlign: "left", marginLeft: "30px" }}>Last Name:</p>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <input id="last" type="text" placeholder="Last Name" onChange={handleChange} />
                        {isSubmit && signup.last==='' && (<span style={{color : "red", fontSize: "10px"}}>Cannot be Left empty</span>) }
                    </div>
                </div>


                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <p style={{ width: "50%", textAlign: "left", marginLeft: "30px" }}>Username:</p>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <input id="username" type="text" placeholder="username" onChange={handleChange} />
                        {isSubmit && signup.username==='' && (<span style={{color : "red", fontSize: "10px"}}>Cannot be Left empty</span>) }
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <p style={{ width: "50%", textAlign: "left", marginLeft: "30px" }}>Email:</p>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <input id="email" type="email" placeholder="email" onChange={handleChange} />
                        {signup.email ==='' && (<span style={{color : "red", fontSize: "10px"}}>Please define Email properly</span>) }
                        {isSubmit&& !okEmail && <span style={{color : "red", fontSize: "10px"}}>Invalid email format</span> }
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <p style={{ width: "50%", textAlign: "left", marginLeft: "30px" }}>Password:</p>
                    <div>
                        <div>
                            <input id="password" type="password" placeholder="Password" onChange={handleChange} />
                            <button id="showbtn" onClick={showPass}>Show</button>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <p style={{ width: "50%", textAlign: "left", marginLeft: "30px" }}>Phone No.:</p>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <input id="phone" type="number" placeholder="phone" onChange={handleChange} />
                        {isSubmit && signup.phone==='' && (<span style={{color : "red", fontSize: "10px"}}>Cannot be Left empty</span>) }
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <p style={{ width: "50%", textAlign: "left", marginLeft: "30px" }}>Country</p>
                    <select id="country" onChange={handleChange}>
                        <option value="India">India</option>
                        <option value="China">China</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="USA">USA</option>
                        <option value="England">England</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Nepal">Nepal</option>
                    </select>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <p style={{ width: "50%", textAlign: "left", marginLeft: "30px" }}>City</p>
                    <select id="city" onChange={handleChange}>
                        <option value="Delhi">Delhi</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Kota">Kota</option>
                        <option value="Ajmer">Ajmer</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bhopal">Bhopal</option>
                        <option value="Gwalior">Gwalior</option>
                    </select>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <p style={{ width: "50%", textAlign: "left", marginLeft: "30px" }}>PAN No.:</p>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <input id="pan" type="text" placeholder="pan" onChange={handleChange} />
                        {isSubmit && signup.pan==='' && (<span style={{color : "red", fontSize: "10px"}}>Cannot be Left empty</span>) }
                        {isSubmit && (signup.pan.length !==10 && signup.pan !=='') && (<span style={{color : "red", fontSize: "10px"}}>PAN no. must be of 10 digits</span>) }
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <p style={{ width: "50%", textAlign: "left", marginLeft: "30px" }}>Aadhar No.:</p>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <input id="aadhar" type="number" placeholder="aadhar" onChange={handleChange} />
                        {isSubmit && signup.aadhar==='' && (<span style={{color : "red", fontSize: "10px"}}>Cannot be Left empty</span>) }
                        {isSubmit && (signup.aadhar.length !==12 && signup.aadhar !=='') && (<span style={{color : "red", fontSize: "10px"}}>Aadhar no. must be of 12 digits</span>) }
                    </div>
                </div>
                <br />
                <div style={{border: "1px solid black", width:"20%", margin:"auto", height:"30px", cursor: "pointer"}} onClick={handleSubmit}>SUBMIT</div>
            </div>)
}
        </>
    );
}

export default Form;
