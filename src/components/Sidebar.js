import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div id="sidebar-wrapper">
                <ul className='sidebar-nav mb-0'>
                    <li><Link to="/dashboard" className='active'><i className="las la-tachometer-alt"></i> Dashboard</Link></li>
                    <li><Link to="/events"><i className="las la-calendar-day"></i> Events</Link></li>
                    <li><Link to="/issues"><i className="las la-exclamation-circle"></i> Issues</Link></li>
                    <li><Link to="/think"><i className="las la-lightbulb"></i> Think</Link></li>
                    <li><Link to="/"><i className="las la-comments"></i> Talk</Link></li>
                    <li><Link to="/"><i className="las la-tasks"></i> Do</Link></li>
                    <li><Link to="/"><i className="las la-bullhorn"></i> Amplify</Link></li>
                    <li><Link to="/"><i className="las la-user"></i> My Profile</Link></li>
                    <li><Link to="/"><i className="las la-sign-out-alt"></i> Logout</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;