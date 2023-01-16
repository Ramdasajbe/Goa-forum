/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Scrollbar from 'react-scrollbars-custom';
import Calender from "../components/Calender";
import axios from 'axios';
import dateFormat from 'dateformat';
import dashboardSlide1 from '../assets/images/dashboard-slide.png';
// import EventImage1 from '../assets/images/event-image-1.png';
// import EventImage2 from '../assets/images/event-image-2.png';
import onGoingEvent1 from '../assets/images/ongoing-event-1.png';
import MemberImage1 from '../assets/images/member-1.png';
// import onGoingEvent2 from '../assets/images/ongoing-event-2.png';
// import onGoingEvent3 from '../assets/images/ongoing-event-3.png';
// import onGoingEvent4 from '../assets/images/ongoing-event-4.png';
// import onGoingEvent5 from '../assets/images/ongoing-event-5.png';
import { Link,useParams } from 'react-router-dom';

function Dashboard(props) {
    const [sidebar, setSidbar] = useState(false);
    const [allForum, getLoginForum] = useState();
    const [isAllForum, setIsForum] = useState(false);
    const [liveIssue, getLoginLiveIssue] = useState();
    const [isLiveIssue, setIsLiveIssue] = useState(false);
    const [eventList, getOngoingEvent] = useState();
    const [isEventList, setIsEventList] = useState(false);
    const params = useParams();

    const toggleSidebar = () => {
        setSidbar(!sidebar)
        if (sidebar) {
            document.body.className = '';
        } else {
            document.body.className = 'sb-sidenav-toggled';
        }
    }

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

    const ref = useRef();
    const [headerHeight, setHeaderHeight] = useState(null);
    const [height, width] = useWindowSize();
    let scrollHeight = height - 120;
    console.log("🚀 ~ file: Issues.js ~ line 31 ~ Issues ~ scrollHeight", scrollHeight)

    const setForumData =(forumId)=>{
        console.log("------------forum id --------------",forumId);
        localStorage.setItem("forum_id",forumId);
        // if (forumId) {
        //     return <Redirect to="/landing" />;
        //   }
      };

    useEffect(() => {
        let headerHeight = ref.current.clientHeight;
        setHeaderHeight(headerHeight);
    }, []);

    useEffect(()=>{
        let yinid = params.yin_id?params.yin_id:"MHPC00001234";
        axios.get(process.env.REACT_APP_TALK_API+'/forum/list/yin-id/'+yinid)
        .then(response => {
            console.log("-------------------FORUM DATA ---- : ", response);
            getLoginForum(response.data);
            setIsForum(true);
        }).catch(error => {
            console.log("url response in error-----", error);
        });

    },[params.yin_id])

    useEffect(()=>{
        let yinid = params.yin_id?params.yin_id:"MHPC00001234";
        axios.get(process.env.REACT_APP_TALK_API+'/issue/list/yin-id/'+yinid)
        .then(response => {
            console.log("-------------------LIVE ISSUES DATA ---- : ", response);
            getLoginLiveIssue(response.data);
            setIsLiveIssue(true);
        }).catch(error => {
            console.log("url response in error-----", error);
        });

    },[params.yin_id]);

    useEffect(()=>{
        let yinid = params.yin_id?params.yin_id:"MHPC00001234";
        let eventType = "OPEN";
        axios.get(process.env.REACT_APP_TALK_API+'/event/list/yin-id/'+yinid+'?type='+eventType)
        .then(response => {
            console.log("-------------------ONGOING EVENT DATA ---- : ", response);
            getOngoingEvent(response.data);
            setIsEventList(true);
        }).catch(error => {
            console.log("url response in error-----", error);
        });

    },[params.yin_id])
    
    function eventClick(data)
    {
        console.log("----------",data)
    //   props.history.push("/issues-detail/"+data);
    }

    let options = [
        'Forum 1',
        'Forum 2',
        'Forum 3',
        'Forum 4',
        'Forum 5',
        'Forum 6',
    ];


    const [singleSelections, setSingleSelections] = useState([]);
    

    return (
        <>
            <div className='header position-fixed dashboard clearfix' ref={ref}>
                <div className='mb-3 d-flex align-items-center w-100'>
                    <button className="btn btn-link text-white pl-0" id="sidebarToggle" onClick={toggleSidebar}>
                        <i className="fa fa-bars" aria-hidden="true"></i></button>
                        <div className='image-holder'>
                        <img src={MemberImage1} alt="MemberImage1" />
                    </div>

                    <h2>Hi, Amruta</h2>
                    <ul className='list-inline ml-auto mb-0'>
                        <li className='list-inline-item'>
                            <button type="button" className='btn btn-link btn-notification text-white p-1'>
                                <i className="las la-bell"></i>
                                <span className='badge badge-danger'>20</span>
                            </button>
                        </li>
                        {/* <li className='list-inline-item ml-2'>
                            <button type="button" className='btn btn-link text-white p-1'><i className="las la-sign-out-alt"></i></button>
                        </li> */}
                    </ul>

                </div>
                <div className="input-group mb-2 search">
                    <input type="text" className="form-control" placeholder="Search by categories of Issues" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div className='marquee d-flex align-items-start'>
                    <i className="las la-bullhorn"></i>
                    <marquee width="100%" direction="left" height="28px">
                        <Link to='#'>This is a sample scrolling text that has scrolls texts to left.</Link>
                        <Link to='#'>This is a sample scrolling text that has scrolls texts to right.</Link>
                    </marquee>
                </div>
            </div>
            <div className="page-content w-100 dashboard">
                <Scrollbar style={{ height: scrollHeight }}>
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-sm-12">
                                <h3 className="section-title mb-3 text-white"><Link to="/forum">My Forums</Link></h3>
                                <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} className='event-carousel'>
                                    {isAllForum?allForum.map((forum,index)=>{
                                        return(
                                            <div key={index}>
                                                <div className='issue-panel d-block' onClick={()=>setForumData(forum.forum_id)}>
                                                    <div className='issue-card' style={{ backgroundImage: "url(" + forum.forum_images + ")" }}>
                                                        <span className='title'>{forum.name}</span>
                                                        <span className='date'>{dateFormat(forum.forum_created_date, "dS mmmm yyyy")}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }):<div>
                                        <div className='issue-panel d-block'>
                                            <div className='issue-card' style={{ backgroundImage: "url(" + dashboardSlide1 + ")" }}>
                                                <span className='title'>No forum assigned to you</span>
                                            </div>
                                        </div>
                                    </div>}
                                       
                                    {/* <div>
                                        <div className='issue-panel d-block'>
                                            <div className='issue-card' style={{ backgroundImage: "url(" + dashboardSlide1 + ")" }}>
                                                <span className='title'>Forum Title</span>
                                                <span className='date'>10th December 2021</span>
                                            </div>
                                        </div>
                                    </div> */}
                                </Carousel>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-sm-12">
                                <h3 className="section-title">Live Issues</h3>
                                <div className='issue-events-carousel'>
                                    <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} className='issue-carousel'>
                                        
                                            {isLiveIssue?liveIssue.map((issues,index)=>{
                                                return(
                                                    <div key={index}>
                                                        <div className='row'>
                                                        <div className='col-sm-6' >
                                                            <div className='event-block clearfix'>
                                                                <div className='p-2 mb-2 text-left d-block'>
                                                                    <h2 className='mb-1'>{issues.issue_title}</h2>
                                                                    <p className='time'>{dateFormat(issues.issue_created_date, "dS mmmm yyyy")}</p>
                                                                </div>
                                                                <figure>
                                                                    <img src={issues.issue_images} alt="EventImage1" />
                                                                </figure>
                                                                <div className='p-2'>
                                                                    <p className='event-desc truncate truncate-2 mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                                                </div>
                                                                {/* <div className='btn btn-primary' onClick={()=>eventClick(issues.issue_id)}>View Details</div> */}
                                                                <Link to={"/issues-details/"+issues.issue_id} className='btn btn-primary'>View Details</Link>
                                                                
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                )}) :""}
                                    </Carousel>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-sm-12">
                                <h3 className="section-title">Ongoing Events</h3>
                                <div className='row'>
                                {isEventList?eventList.map((event,index)=>{
                                        return(
                                            <div className='col-sm-3 col-4' key={index}>
                                                <Link to={"/event-details/"+event.event_id}>
                                                <div className='event-box'>
                                                    <div className='image-holder'>
                                                        <img src={event.event_images?event.event_images:onGoingEvent1} alt={index} />
                                                    </div>
                                                    <h4 className='event-name'>{event.event_title}</h4>
                                                    <p>{event.event_member_details.length} Members</p>
                                                </div>
                                                </Link>
                                            </div>
                                        )
                                    }):""}

                                </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-sm-12 mb-4">
                                <h3 className="section-title">My Calendar</h3>
                                <Calender/>
                            </div>
                        </div>
                    </div>
                </Scrollbar>
            </div>
        </>
    )
}

export default Dashboard
