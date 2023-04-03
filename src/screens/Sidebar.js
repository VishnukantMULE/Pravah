import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbarh.css'


function Sidebar({ handleTabSelect, selectedTab }) {
    return (


        <ul className="navbar__links">
            <li>
                <Link to="/movies" className={selectedTab === "saved" ? "active" : ""} onClick={() => handleTabSelect("movies")}>Movies</Link>
            </li>
            <li>
                <Link to="/music" className={selectedTab === "music" ? "active" : ""} onClick={() => handleTabSelect("music")}>Music</Link>
            </li>
            <span></span>

        </ul>

    );
}

export default Sidebar;
