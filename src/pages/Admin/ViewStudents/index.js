import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../../constants";
import { DataGrid } from "@mui/x-data-grid";
const ViewStudents = (props) => {
    const [stus, setStus] = useState([])
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Student Name', width: 150 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        { field: 'skills', headerName: "Skills", width: 150 },
        { field: 'about', headerName: 'About', width: 150 },
        { field: 'address', headerName: 'Address', width: 150 }


    ];
    const fetchData = async () => {
        const res = await axios.get(URL + `student`)
        setStus(res.data.map((x, index) => { return { id: index + 1, ...x } }))
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