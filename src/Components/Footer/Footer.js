import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="text-center text-white my-3">
            <p> &copy; Design By <Link className="text-decoration-none" style={{ color: "#FFC107" }} to="/">Nepolion Chakma</Link> 2021 </p>
        </div>
    );
};

export default Footer;