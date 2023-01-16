import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Scrollbar from 'react-scrollbars-custom';
import { Dropdown } from 'react-bootstrap';

import FloatingFooter from '../components/FloatingFooter';
import liveIssueImage from '../assets/images/live-issue-image.png';
import issueVideoImage1 from '../assets/images/issue-video-image-1.png';
import issueVideoImage2 from '../assets/images/issue-video-image-2.png';

function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth])
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return size;
};

function LiveIssuesList() {
    const ref = useRef();
    const [headerHeight, setHeaderHeight] = useState(null);
    const [height, width] = useWindowSize();
    let scrollHeight = height - (155 + 75);
    console.log("🚀 ~ file: Issues.js ~ line 31 ~ Issues ~ scrollHeight", scrollHeight)
    const [sidebar, setSidbar] = useState(false);

    useEffect(() => {
        let headerHeight = ref.current.clientHeight;
        setHeaderHeight(headerHeight);
    }, []);


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
            <div className='header position-absolute clearfix issues-header' ref={ref} >
                <div className='mb-3 d-flex align-items-center w-100'>
                    <button className="btn btn-link text-white pl-0" id="sidebarToggle" onClick={toggleSidebar}><i className="fa fa-bars" aria-hidden="true"></i></button>
                    <h2>Live Issues</h2>
                    <Link to="/add-new-issue" className="btn btn-outline-light ml-auto">Add New Issue <i className="fa fa-plus" aria-hidden="true"></i></Link>
                </div>
                <div className="input-group mb-2 search">
                    <input type="text" className="form-control" placeholder="Search by categories of Issues" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>

            <div className="issue-card-holder live-issues" >
                <div className='filter-dropdown'>
                    <Dropdown>
                        <Dropdown.Toggle variant="link" id="dropdown-basic" className=" text-white float-right" role="menuitemradio">
                            <i className="las la-filter"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <ul className='mb-0'>
                                <li>
                                    <div className="radio">
                                        <input type="radio" id="All" name="customRadio" />
                                        <label for="All">All</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="radio">
                                        <input type="radio" id="Completed" name="customRadio" />
                                        <label for="Completed">Completed</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="radio">
                                        <input type="radio" id="Live" name="customRadio" />
                                        <label for="Live">Live</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="radio">
                                        <input type="radio" id="Dropped" name="customRadio" />
                                        <label for="Dropped">Dropped</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="radio">
                                        <input type="radio" id="External" name="customRadio" />
                                        <label for="External">External</label>
                                    </div>
                                </li>
                            </ul>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <Scrollbar style={{ height: scrollHeight }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <div className='issue-card flex-block'>
                                    <div className='image-holder' style={{ backgroundImage: "url(" + liveIssueImage + ")" }}></div>
                                    <div className='issue-content'>
                                        <h4 className='truncate truncate-2'>There are many variations of passages of Lorem Ipsum available</h4>
                                        <p className='desc truncate truncate-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        <p className='time align-self-end'>5 Minutes ago</p>
                                    </div>
                                </div>

                                <div className='issue-card video-block'>
                                    <div className='video-image-holder' style={{ backgroundImage: "url(" + issueVideoImage1 + ")" }}></div>
                                    <div className='issue-content'>
                                        <p className='desc truncate truncate-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                    </div>
                                </div>

                                <div className='issue-card video-block'>
                                    <div className='video-image-holder' style={{ backgroundImage: "url(" + issueVideoImage2 + ")" }}></div>
                                    <div className='issue-content'>
                                        <p className='desc truncate truncate-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Scrollbar>
            </div >

            <FloatingFooter />
        </>
    )
}

export default LiveIssuesList;