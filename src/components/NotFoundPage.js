import React from 'react';
import {Link, NavLink} from "react-router-dom";

const NotFoundPage = ()=>{
    return (
        <div>
            404 - <Link to="/dashboard">Go Home</Link>
        </div>
    )
}

export default NotFoundPage;