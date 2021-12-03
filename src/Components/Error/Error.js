import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={{ height: "400px", color: "white", textAlign: "center", }}>
            <h1 style={{ margin: "100px 0" }} className="text-danger fw-bold fd-1">Error</h1>
            <h6> Please go to <Link className=" text-decoration-none text-success" to="/">home</Link> page.</h6>
        </div>
    );
};

export default Error;