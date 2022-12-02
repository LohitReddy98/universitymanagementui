import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import axios from "axios";
import { URL } from "../../../constants";


const AppliedJobs = (props) => {
    const [rows, setRows] = useState([])
    const stuInfo = useSelector((state) => state.auth)

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'cmpName', headerName: 'Company name', width: 150 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'openings', headerName: 'Number of openings', width: 150 }
    ];
    const fetchData = async () => {
        const res = await axios.get(URL + `jobApp/jobs/${stuInfo.stuId}`)
        setRows(res.data.map(x => { return { id: x?.jobId, ...x, cmpName: x?.name } }))
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (

        <div style={{ height: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
};

export default AppliedJobs;