import { Button, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../../constants";
import axios from "axios";


const AddNewJob = () => {
    const [openings, setOpen] = useState();
    const hrInfo = useSelector((state) => state.auth)

    const [title, setTitle] = useState();
    const [description, setDes] = useState();
    const onClick = async () => {
        const res = await axios.put(URL + `job`, {
            description,
            openings,
            title,
            cmpId: hrInfo.cmpId,
        })
    }



    return (
        <div style={{ padding: "30px", display: "grid", gridGap: "15px" }}>
            <TextField id="standard-basic" label="Title" variant="standard" onChange={(e) => {
                setTitle(e.target.value)
            }} />
            <TextField id="standard-basic" label="Openings" variant="standard" onChange={(e) => {
                setOpen(e.target.value)
            }} />
            <p style={{ fontWeight: "bold" }}>Description</p>
            <TextareaAutosize
                onChange={(e) => {
                    setDes(e.target.value)
                }}
                minRows={5}
            />
            <Button variant="contained" style={{ maxWidth: "200px" }} onClick={onClick}>ADD</Button>
        </div >
    )
}
export default AddNewJob;