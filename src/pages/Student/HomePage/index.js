import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import AppliedJobs from "../AppliedJobs";
import JobPosts from "../JobPosts";
import Profile from "../Profile";


const StudentHome = (props) => {

    const [value, setValue] = useState(-1)

    return (

        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ justifyContent: "center", display: "flex" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={(x, y) => setValue(y)} aria-label="basic tabs example">
                        <Tab label="Profile" />
                        <Tab label="My applied jobs" />
                        <Tab label="Job Posts" />
                    </Tabs>
                </Box>
            </div>
            {value == -1 && <> student homepage</>}
            {value == 0 && <Profile />}
            {value == 1 && <AppliedJobs />}
            {value == 2 && <JobPosts />}

        </div>
    );
};

export default StudentHome;