import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { URL } from "../../../constants";
import { useHistory } from "react-router-dom";



const ShowListedJobs = (props) => {
    const hrInfo = useSelector((state) => state.auth)
    const history = useHistory();

    const [rows, setRows] = useState([])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'cmpName', headerName: 'Company name', width: 150 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'openings', headerName: 'Number of openings', width: 150 },
        {
            field: 'check applied students', headerName: '', width: 200,
            disableClickEventBubbling: true,
            sortable: false,
            renderCell: (params) => {
                const onApply = async (jobId) => {
                    history.push("/applicants", { jobId })
                }
                return (
                    <Button variant="contained" onClick={() => onApply(params.row.id)}>Check applicants</Button>
                );
            },
        },

    ];

    const fetchData = async () => {
        const res = await axios.get(URL + `job/${hrInfo.cmpId}`)
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

export default ShowListedJobs;