import { Button, FormControl, InputLabel, Link, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.css';
import axios from "axios";
import { URL } from "../../constants";
import { useHistory } from "react-router-dom";


const Login = (props) => {
    const [userType, setUserType] = useState("Student");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setError] = useState({ email: false, password: false, login: false });
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const history = useHistory()

    const onSubmit = async () => {
        if (!email) {
            setError((e) => { return { ...e, email: true } })
        }
        if (!password) {
            setError((e) => { return { ...e, password: true } })
        }
        try {
            const res = await axios.post(URL + userType.toLocaleLowerCase(), {
                email: email,
                pass: password
            })
            dispatch({
                type: "LOGIN", payload: {
                    email,
                    userType: userType.toLocaleLowerCase(),
                    adminId: res.data?.adminId,
                    stuId: res.data?.stuId,
                    hrId: res.data?.hrId,
                    cmpId: res.data?.cmpId
                }
            })
        }
        catch (e) {
            setError((error) => {
                return { ...error, login: true }
            })
        }
    }
    useEffect(() => {
        switch (auth.userType) {
            case ("student"):
                history.push('/stuhomepage');
                break;
            case ("hr"):
                history.push("/hrhomepage");
                break;
            case ("admin"):
                history.push("/adminhomepage");
                break;
            default:
                break;
        }

    }, [auth.userType])

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
                            <MenuItem value={"Admin"}>Admin</MenuItem>
                            <MenuItem value={"HR"}>HR</MenuItem>
                        </Select>
                    </FormControl>
                </>
                <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => {
                    setEmail(e.target.value)
                    setError((e) => { return { ...e, email: false, login: false } })
                }} error={errors.email} />
                <TextField id="standard-basic" label="Password" variant="standard" type="password" onChange={(e) => {
                    setPassword(e.target.value)
                    setError((e) => { return { ...e, password: false, login: false } })
                }} error={errors.password} />

                <Button className="login-btn" type="submit" color="primary" onClick={onSubmit} variant="contained">
                    Log in
                </Button>
                <Link style={{ textAlign: "center" }} href="/register">New to the application ? Sign up here</Link>
                {errors.login && <>
                    you have entered incorrect password , please try again .
                </>}
            </div>
        </div>
    );
};

export default Login;