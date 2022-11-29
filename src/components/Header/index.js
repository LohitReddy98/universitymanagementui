import React from "react";
import "./style.css"
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";



const Header = () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const history = useHistory()


    return (
        <>
            <div className="header">
                <h3>Univ<span>Management </span></h3>
                {auth.email && < Button variant="contained" size="small" onClick={() => {
                    dispatch({ type: "LOGOUT" });
                    history.push('/')
                }}>Log out   </Button>
                }
                {!auth.email && < Button variant="contained" size="small" onClick={() => {
                    history.push('/')
                }}
                >Login   </Button>
                }

            </div>
        </>
    );
}

export default Header;