import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { URL } from "../../../constants";


const JobPosts = (props) => {
    const stuInfo = useSelector((state) => state.auth)
    const [rows, setRows] = useState([])

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'cmpName', headerName: 'Company name', width: 150 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'openings', headerName: 'Number of openings', width: 150 },
        {
            field: 'apply', headerName: '', width: 150,
            disableClickEventBubbling: true,
            sortable: false,
            renderCell: (params) => {
                const onApply = async (jobId) => {
                    const res = await axios.put(URL + "jobApp", {
                        jobId,
                        stuId: stuInfo.stuId
                    })

                }
                return (
                    <Button variant="contained" onClick={() => onApply(params.row.id)}>Apply</Button>
                );
            },
        },

    ];

    const fetchData = async () => {
        const res = await axios.get(URL + `job`)
        setRows(res.data.map(x => { return { id: x?.jobId, ...x, cmpName: x?.name } }))
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (

        <div style={{ height: "100%" }}>
            {console.log(stuInfo)
            }
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
};

export default JobPosts;