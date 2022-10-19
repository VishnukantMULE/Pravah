import React, { useState } from "react"
import axios from "axios"
import '../PagesCss/Register.css'
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: "",
        Email_Status: "0"
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword, Email_Status } = user
        if (name && email && password && Email_Status && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    navigate("/login")
                })
        } else {
            alert("invlid input")
        }

    }

    return (
        <div className="bg4">


        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
  
          }}
        >
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
            <div className="btn" onClick={register} >Register</div>
            <div>or</div>
            <div className="btn" onClick={() => navigate("/login")}>Login</div>
        </div>
        </div></div>
    )
}

export default Register