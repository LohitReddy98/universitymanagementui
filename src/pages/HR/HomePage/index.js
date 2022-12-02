import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import AddNewJob from "../AddNewJob";
import ShowListedJobs from "../ShowListedJobs";

const HrHome = (props) => {

    const [value, setValue] = useState(-1)

    return (

        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <div style={{ justifyContent: "center", display: "flex" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={(x, y) => setValue(y)} aria-label="basic tabs example">
                        <Tab label="Show Company listed Jobs" />
                        <Tab label="Add new Job" />
                    </Tabs>
                </Box>
            </div>
            {value == -1 && <> HR homepage</>}
            {value == 0 && <ShowListedJobs />}
            {value == 1 && <AddNewJob/>}

        </div>
    );
};

export default HrHome;