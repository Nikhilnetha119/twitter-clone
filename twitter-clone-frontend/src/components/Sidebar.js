// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import XIcon from '@mui/icons-material/X';
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import PersonIcon from '@mui/icons-material/Person';
import "./sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/feed" className="sidebar-link" ><XIcon style={{ cursor: "pointer" }} />
                <i className="fas fa-home"></i>
            </Link>
            
            <Link to="/feed" className="sidebar-link"><HomeIcon />
                <i className="fas fa-home"></i> Home
            </Link>
            <Link to="/explore" className="sidebar-link"><SearchOutlinedIcon />
                <i className="fas fa-hashtag"></i> Explore
            </Link>
            <Link to="/notifications" className="sidebar-link"><NotificationsNoneIcon />
                <i className="fas fa-bell"></i> Notifications
            </Link>
            <Link to="/messages" className="sidebar-link"><MailOutlineRoundedIcon />
                <i className="fas fa-envelope"></i> Messages
            </Link>
            <Link to="/profile/nikhil" className="sidebar-link"><PersonIcon />
                <i className="fas fa-user"></i> Profile
            </Link>
        </div>
    );
}

export default Sidebar;
