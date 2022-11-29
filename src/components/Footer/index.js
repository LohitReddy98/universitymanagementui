import React from "react";
import './style.css';


const Footer = () => {
    return (
        <>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Univ<span>Management </span></h3>

                    <p className="footer-company-name">Company Name © 2022</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>xyz st</span> texas</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+11 1 1 11111</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:ajay@gmail.com">ajay@gmail.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the Application</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>

                </div>

            </footer>
        </>
    );
}

export default Footer;