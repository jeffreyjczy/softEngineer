import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(true)
    const navigate = useNavigate();
    const role = JSON.parse(localStorage.getItem('role'));

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>ACADEMIC REMUNERATION</h2>
            </div>
            <ul className="nav-menu">
                <div smooth={true} duration={500} ><li> {role.name} </li></div>
                <div onClick={() => { navigate('/') }} smooth={true} duration={500} ><li>LOGOUT</li></div>
            </ul >




        </div >
    )
}

export default Navbar
