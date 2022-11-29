import React, { useState } from "react";
import './style.css';
import { Button, FormControl, InputLabel, Link, MenuItem, Select, TextareaAutosize, TextField } from "@mui/material";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { URL } from "../../constants";




const Register = (props) => {
    const [userType, setUserType] = useState("Student");
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [about, setAbout] = useState();
    const [skills, setSkills] = useState();
    const [address, setAddress] = useState();
    const [cmpId, setCmpId] = useState();
    const [password, setPassword] = useState();
    const [errors, setError] = useState({ email: false, password: false, name: false });
    const history = useHistory()


    const onSubmit = async () => {
        if (!name) {
            setError((e) => { return { ...e, name: true } })
        }
        if (!email) {
            setError((e) => { return { ...e, email: true } })
        }
        if (!password) {
            setError((e) => { return { ...e, password: true } })
        }
        if (userType == "Student") {
            if (!phone) {
                setError((e) => { return { ...e, password: true } })
            }
            if (!about) {
                setError((e) => { return { ...e, about: true } })
            }
            if (!skills) {
                setError((e) => { return { ...e, skills: true } })
            }
            if (!address) {
                setError((e) => { return { ...e, address: true } })
            }
        }
        else
            if (!cmpId) {
                setError((e) => { return { ...e, cmpId: true } })
            }

        try {
            if (userType == "Student") {
                await axios.put(URL + userType.toLocaleLowerCase(), {
                    email: email,
                    pass: password,
                    name,
                    phone,
                    about,
                    skills,
                    address,
                })
            }
            else {
                await axios.put(URL + userType.toLocaleLowerCase(), {
                    email: email,
                    pass: password,
                    name,
                    cmpId,
                })

            }
            alert('registration sucess , now u can login!');
            history.push('')
        }
        catch (e) {
            console.log(e)
            setError((error) => {
                return { ...error, login: true }
            })
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
                            <MenuItem value={"Student"}>Student</MenuItem>
                            <MenuItem value={"Hr"}>Hr</MenuItem>
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
                {userType == "Student" && <>
                    <TextField id="standard-basic" label="Phone" variant="standard" onChange={(e) => {
                        setPhone(e.target.value)
                        setError((e) => { return { ...e, phone: false } })
                    }} error={errors.phone} />
                    <TextField id="standard-basic" label="Skills" variant="standard" onChange={(e) => {
                        setSkills(e.target.value)
                        setError((e) => { return { ...e, skills: false } })
                    }} error={errors.skills} />
                    <TextField id="standard-basic" label="Address" variant="standard" onChange={(e) => {
                        setAddress(e.target.value)
                        setError((e) => { return { ...e, address: false } })
                    }} error={errors.address} />
                    <p style={{ fontWeight: "bold" }}>About yourself</p>
                    <TextareaAutosize
                        onChange={(e) => {
                            setAbout(e.target.value)
                            setError((e) => { return { ...e, about: false } })
                        }}
                        minRows={5}
                        style={{ borderColor: errors.about ? "red" : "initial" }}
                    />
                </>
                }
                {userType == "Hr" && <>
                    <TextField id="standard-basic" label="Company Id" variant="standard" onChange={(e) => {
                        setCmpId(e.target.value)
                        setError((e) => { return { ...e, cmpId: false } })
                    }} error={errors.cmpId} />
                </>
                }



                <Button className="login-btn" type="submit" color="primary" onClick={onSubmit} variant="contained">
                    Sign Up
                </Button>
                <Link style={{ textAlign: "center" }} href="/login">Already a user ? Login in here</Link>

            </div>
        </div>
    );
};

export default Register;