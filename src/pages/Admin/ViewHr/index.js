import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../../constants";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
const ViewHr = (props) => {
    const [hrs, setHr] = useState([])
    const columns = [
        { field: 'id', headerName: 'Hr Id', width: 70 },
        { field: 'hrName', headerName: 'hr Name', width: 150 },
        { field: 'email', headerName: 'Phone', width: 150 },
        { field: 'companyName', headerName: "Company name", width: 150 },
        {
            field: 'delete', headerName: '', width: 150,
            disableClickEventBubbling: true,
            sortable: false,
            renderCell: (params) => {
                const onApply = async (hrId) => {
                    try {
                        await axios.delete(URL + `hr/${hrId}`)
                        alert("Delete success")
                        fetchData()
                    }
                    catch {
                        alert("Delete failed")
                    }

                }
                return (
                    <Button variant="contained" onClick={() => onApply(params.row.id)}>delete</Button>
                );
            },
        },


    ];
    const fetchData = async () => {
        const res = await axios.get(URL + `hr`)
        setHr(res.data.map((x) => { return { id: x.hrId, ...x } }))
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (<>
        <DataGrid
            rows={hrs}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
        />

    </>)
}

export default ViewHr;