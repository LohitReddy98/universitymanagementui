import { Button, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { URL } from "../../../constants";

const AddCompany = () => {
    const [name, setName] = useState();
    const [about, setAbout] = useState();
    const onClick = async () => {
        try {
            const res = await axios.put(URL + `company`, {
                about,
                name
            })
            alert("Successfully added")
        }
        catch (e) {
            alert("Something went wrong please try again ")
        }
    }
    return (
        <div style={{ display: "grid", gridGap: "40px", padding: "50px" }}>

            <TextField id="standard-basic" label="Company Name" variant="standard" onChange={(e) => {
                setName(e.target.value)
            }} />
            <p style={{ fontWeight: "bold" }}>About Company</p>
            <TextareaAutosize
                onChange={(e) => {
                    setAbout(e.target.value)
                }}
                minRows={5}
            />
            <Button variant="contained" style={{ maxWidth: "200px" }} onClick={onClick}>ADD</Button>
        </div >
    )

}

export default AddCompany