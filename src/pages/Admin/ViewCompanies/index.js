import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../../constants";
import { DataGrid } from "@mui/x-data-grid";
const ViewCompanies = (props) => {
    const [stus, setStus] = useState([])
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Company  Name', width: 150 },
        { field: 'about', headerName: 'about', width: 400 },


    ];
    const fetchData = async () => {
        const res = await axios.get(URL + `company`)
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

export default ViewCompanies;