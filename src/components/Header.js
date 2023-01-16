import React, { useState } from 'react';

// import { useHistory } from 'react-router'

const Header = props => {


    const [sidebar, setSidbar] = useState(false);

    const toggleSidebar = () => {
        setSidbar(!sidebar)
        if (sidebar) {
            document.body.className = '';
        } else {
            document.body.className = 'sb-sidenav-toggled';
        }
    }

    return (
        <>
            {/* Top navigation */}
            <div className='header'>
                <button className="btn btn-link text-white" id="sidebarToggle" onClick={toggleSidebar}><i className="fa fa-bars" aria-hidden="true"></i></button>
            </div>
        </>
    )
}

export default Header;