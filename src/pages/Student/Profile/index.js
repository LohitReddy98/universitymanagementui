import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { URL } from "../../../constants";


const Profile = (props) => {
    const [stuInfo, setStuInfo] = useState()
    const stuInfos = useSelector((state) => state.auth)

    const fetchData = async () => {
        const res = await axios.get(URL + `student/${stuInfos.stuId}`)
        setStuInfo(res.data[0])
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (

        <div>
            {/* <h2 style={{textAlign:"center"}}>My Profile</h2> */}
            <div style={{ margin: "80px",display:"grid",gridGap:"20px" }}>
                <h3 > {`Name  : ${stuInfo?.name}`}</h3>
                <h3>{`Skills : ${stuInfo?.skills}`}</h3>
                <h3>{`Address : ${stuInfo?.address}`}</h3>
                <h3>{`Phone : ${stuInfo?.phone}`}</h3>
                <h3>{`About : ${stuInfo?.about}`}</h3>
            </div>


        </div>
    );
};

export default Profile;