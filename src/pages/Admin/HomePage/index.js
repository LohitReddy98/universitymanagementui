import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import AddCompany from "../AddCompany";
import ViewCompanies from "../ViewCompanies";
import ViewHr from "../ViewHr";
import ViewStudents from "../ViewStudents";


const AdminHome = (props) => {

    const [value, setValue] = useState(-1)

    return (

        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ justifyContent: "center", display: "flex" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={(x, y) => setValue(y)} aria-label="basic tabs example">
                        <Tab label="Add Company" />
                        <Tab label="View Companies" />
                        <Tab label="View Students" />
                        <Tab label="View HR" />

                    </Tabs>
                </Box>
            </div>
            {value == -1 && <> Welcome  admin</>}
            {value == 0 && <AddCompany />}
            {value == 1 && <ViewCompanies />}
            {value == 2 && <ViewStudents />}
            {value == 3 && <ViewHr />}


        </div>
    );
};

export default AdminHome;