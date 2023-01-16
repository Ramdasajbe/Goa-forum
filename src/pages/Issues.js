import React, { useState, useEffect, useRef } from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import dateFormat from 'dateformat';
import FloatingFooter from '../components/FloatingFooter';
import Scrollbar from 'react-scrollbars-custom';
// import IssueImage1 from '../assets/images/issues-image-1.png';
// import IssueImage2 from '../assets/images/issues-image-2.png';
// import IssueImage3 from '../assets/images/issues-image-3.png';


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

function Issues() {
    // const [isIssueData,setIsIssueData]=useState(false);
    // const [issueList , setAllIssueData] = useState();
    // const [isEventList , setIsEventData] = useState(false);
    const ref = useRef();
    const [headerHeight, setHeaderHeight] = useState(null);
    const [issueList , setAllIssueData] = useState();
    const [isIssueList ,setIsIssueData] = useState(false);
    const [yin_id, setYinID] = useState();
    const [height, width] = useWindowSize();
    let scrollHeight = height - (170 + 75);
    console.log("🚀 ~ file: Issues.js ~ line 31 ~ Issues ~ scrollHeight", scrollHeight)
    const [sidebar, setSidbar] = useState(false);

  
    const toggleSidebar = () => {
        setSidbar(!sidebar)
        if (sidebar) {
            document.body.className = '';
        } else {
            document.body.className = 'sb-sidenav-toggled';
        }
    }
    useEffect(() => {
        setYinID(localStorage.getItem("yin_id"))
        let headerHeight = ref.current.clientHeight;
        setHeaderHeight(headerHeight);
    }, []);
    
    useEffect(() => {
        axios.get(process.env.REACT_APP_TALK_API+'/issue/list/forum/FORUM_COL0001234_BOYS')
            .then(response => {
                console.log("------------------Issue DATA ------- : ", response);
                setAllIssueData(response.data);
                setIsIssueData(true);
            }).catch(error => {
                console.log("url response in error-----", error);
            });
    },[]);
   
    return (
        <>
        
            <div className='header position-fixed clearfix issues-header' ref={ref} >
                <div className='mb-3 d-flex align-items-center w-100'>
                    <button className="btn btn-link text-white pl-0" id="sidebarToggle" onClick={toggleSidebar}><i className="fa fa-bars" aria-hidden="true"></i></button>
                    <h2>Issues</h2>
                    <Link to="/add-new-issue" className="btn btn-outline-light ml-auto">Add New Issue <i className="fa fa-plus" aria-hidden="true"></i></Link>
                </div>
                <div className="input-group mb-2 search">
                    <input type="text" className="form-control" placeholder="Search by categories of Issues" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>

            <div className="issue-card-holder" >
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
                         
                                {isIssueList?
                         issueList.map((issue,index)=>{
                            return(
                                <div key={index}>
                                {/* <Link to={"/issues-details/ISSUECOL_120223_RIVERCLEANINGDATA"} className='issue-panel'> */}
                                    <Link to={"/issues-details/"+issue.issue_id} className='issue-panel'>
                                        <div className='issue-card' style={{ backgroundImage: "url(" + issue.issue_images + ")" }}>
                                            {/* <span className='date'>{dateFormat(issue.createdAt, "dS mmm yyyy")} |  10.30 am to 12.30 pm</span> */}
                                            <span className='date'>{dateFormat(issue.createdAt, "dS mmm yyyy")}</span>
                                            {issue.issue_member_details[0].yin_id=== yin_id?<span className='assigned'>Assigned to me</span>:""}
                                            {issue.issue_types === "LIVE"?<span className='status bg-success'>Open</span>:""}
                                            {issue.issue_types === "COMPLETED"?<span className='status bg-success'>Completed</span>:""}
                                            {issue.issue_types === "DROPPED"?<span className='status bg-danger'>Abandoned</span>:""}
                                            {issue.issue_types === "EXTERNAL"?<span className='status bg-warning'>External</span>:""}
                                        </div>
                                        <h6>{issue.issue_title}</h6>
                                        
                                    </Link>
                                </div>
                                 )
                                })
                                  :<h2>No event data</h2>}
                                
                            </div>
                        </div>
                    </div>
                </Scrollbar>
                </div>
                
            <FloatingFooter />
        </>
        
    )
                                
 }



export default Issues;
