import React, { useState } from "react";
import './style.css';
import { Button, FormControl, InputLabel, Link, MenuItem, Select, TextField } from "@mui/material";


const Register = (props) => {
    const [userType, setUserType] = useState("User");
    const [email, setEmail] = useState();
    const [name, setName] = useState();

    const [password, setPassword] = useState();
    const [errors, setError] = useState({ email: false, password: false, name: false });

    const onSubmit = () => {
        if (!name) {
            setError((e) => { return { ...e, name: true } })
        }

        if (!email) {
            setError((e) => { return { ...e, email: true } })
        }
        if (!password) {
            setError((e) => { return { ...e, password: true } })
        }
    }
    return (
        <div className="Login">
            <div className="form" >
                <>
                    <FormControl fullWidth>
                        <InputLabel >Login as</InputLabel>
                        <Select
                            value={userType}
                            label="User type"
                            onChange={(e) => setUserType(e.target.value)}
                        >
                            <MenuItem value={"User"}>Student</MenuItem>
                            <MenuItem value={"Organisation"}>Admin</MenuItem>
                        </Select>
                    </FormControl>
                </>
                <TextField id="standard-basic" label="Name" variant="standard" onChange={(e) => {
                    setName(e.target.value)
                    setError((e) => { return { ...e, name: false } })
                }} error={errors.email} />
                <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => {
                    setEmail(e.target.value)
                    setError((e) => { return { ...e, email: false } })
                }} error={errors.email} />
                <TextField id="standard-basic" label="Password" variant="standard" type="password" onChange={(e) => {
                    setPassword(e.target.value)
                    setError((e) => { return { ...e, password: false } })
                }} error={errors.password} />

                <Button className="login-btn" type="submit" color="primary" onClick={onSubmit} variant="contained">
                    Sign Up
                </Button>
                <Link style={{ textAlign: "center" }} href="/login">Already a user ? Login in here</Link>

            </div>
        </div>
    );
};

export default Register;