import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../../constants";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
const ViewStudents = (props) => {
    const [stus, setStus] = useState([])
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Student Name', width: 150 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        { field: 'skills', headerName: "Skills", width: 150 },
        { field: 'about', headerName: 'About', width: 150 },
        { field: 'address', headerName: 'Address', width: 150 },
        {
            field: 'delete', headerName: '', width: 150,
            disableClickEventBubbling: true,
            sortable: false,
            renderCell: (params) => {
                const onApply = async (stuId) => {
                    try {
                        const res = await axios.delete(URL + `student/${stuId}`)
                        alert("delete Success")
                        fetchData()
                    }
                    catch {
                        alert("delete faile")
                    }


                }
                return (
                    <Button variant="contained" onClick={() => onApply(params.row.id)}>delete</Button>
                );
            },
        },


    ];
    const fetchData = async () => {
        const res = await axios.get(URL + `student`)
        setStus(res.data.map((x) => { return { id: x.stuId, ...x } }))
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (<>
        <DataGrid
            rows={stus}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
        />

    </>)
}

export default ViewStudents;