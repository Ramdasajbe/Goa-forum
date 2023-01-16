import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import dateFormat from 'dateformat';
import { useParams } from 'react-router-dom'
import SliderImage from '../assets/images/issue-details-image.png';
import MemberImage1 from '../assets/images/member-1.png';
import MemberImage2 from '../assets/images/member-2.png';
import MemberImage3 from '../assets/images/member-3.png';
import EventImage1 from '../assets/images/event-image-1.png';
// import EventImage2 from '../assets/images/event-image-2.png';

function IssueDetails(props) {
        const [show, setShow] = useState(false);
        const [issueDetails, setIssueDetails]= useState();
        const [isIssueDetails, setIsIssueDetails] = useState(false);
        const [eventDatails, setEventDatails]= useState();
        const [isEventDatails, setIsEventDatails] = useState(false);
        const [activityDetails, setActivityDetails]= useState();
        const [isActivityDetails, setIsActivityDetails] = useState(false);
        const [imageSlider,setImageSlider] = useState(SliderImage);
        const params = useParams();
        const [activity, setActivity] = useState(false);
        const [member, setMember] = useState(false);
        const [forumId,setForumId] = useState();
        const [commentsModal, setCommentsModal] = useState(false);
        const [forumMember, setForummember] = useState();
        const [isforumMember, setIsForummember] = useState(false);
        const [newMemberYinID, setnewMemberYinID] = useState("");
        const [errorNewMember , setErrorNewMember] = useState("");

        const handleCloseActivity = () => setActivity(false);
        const handleShowActivity = () => setActivity(true);
    
        const handleCloseMember = () => setMember(false);
        const handleShowMember = () =>{
            axios.get(process.env.REACT_APP_TALK_API+'/forum/get/forum/member-details/' + forumId)
            .then(response => {
                console.log("-------------------MEMBER DATA ---- : ", response);
                if(response.data.error_name === "No entry found"){
                    setIsForummember(false);

                }else{
                    setForummember(response.data);
                    setIsForummember(true);
                    setMember(true);
                }
            }).catch(error => {
                console.log("url response in error-----", error);
            });
        };
    
        const handleCloseComments = () => setCommentsModal(false);
        const handleShowComments = () => setCommentsModal(true);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
    useEffect(() => {
        params.issue_id = params.issue_id?params.issue_id:'ISSUECOL_120223_RIVERCLEANINGDATA';
        axios.get(process.env.REACT_APP_TALK_API+'/issue/list/issue_id/'+params.issue_id)
            .then(response => {
                console.log("............Issue data..........", response);
                setIssueDetails(response.data);
                setForumId(response.data[0].forum_id);
                setImageSlider(response.data[0].issue_images);
                setIsIssueDetails(true);
            }).catch(error => {
                console.log("url response in error-----", error);
            });
    },[]);


    useEffect(()=>{
        let issueID = params.issue_id?params.issue_id:'ISSUECOL_120223_RIVERCLEANINGDATA';
        axios.get(process.env.REACT_APP_TALK_API+'/event/list/issue-id/'+issueID)
        .then(response => {
            console.log("-------------------ONGOING EVENT DATA ---- : ", response);
            if(response.data.error === "NO data found"){
                setIsEventDatails(false);
            }else{
                setEventDatails(response.data);
                setIsEventDatails(true);
            }
            
        }).catch(error => {
            console.log("url response in error-----", error);
            setIsEventDatails(false);
        });

    },[])


    useEffect(()=>{
        let issueID = params.issue_id?params.issue_id:'ISSUECOL_120223_RIVERCLEANINGDATA';
        axios.get(process.env.REACT_APP_TALK_API+'/activity/list/activity/issue-id/'+issueID)
        .then(response => {
            console.log("-------------------ACTIVITY DATA ---- : ", response);
            if(response.data.error === "NO data found"){
                setIsActivityDetails(false);
            }else{
                setActivityDetails(response.data);
                setIsActivityDetails(true);
            }
        }).catch(error => {
            console.log("url response in error-----", error);
        });

    },[])

    function newMemberYINID(e){
        e.preventDefault();
        console.log('-----new member yin id------------',e.target.value);
        setnewMemberYinID(e.target.value);
    }

    const updateActivityStatus = (activityid,status) =>{
        console.log("activity updae called--------",activityid);
        let issueID = params.issue_id?params.issue_id:'ISSUECOL_120223_RIVERCLEANINGDATA';

        console.log("activity updae called------",status);
        let activityData;
        activityData={
            activity_id:activityid,
            activity_status:status
        }
        axios.post(process.env.REACT_APP_TALK_API+'/activity/update/status',activityData)
        .then(response => {
            console.log("-------------------ACTIVITY STATUSDATA ---- : ", response);
            
            axios.get(process.env.REACT_APP_TALK_API+'/activity/list/activity/issue-id/'+issueID)
            .then(response => {
                console.log("-------------------ACTIVITY DATA ---- : ", response);
                setActivityDetails(response.data);
                setIsActivityDetails(true);
            }).catch(error => {
                console.log("url response in error-----", error);
            });

        }).catch(error => {
            console.log("url response in error-----", error);
        });

    }

    function addNewMemberInIssue(){
        console.log("---------Add new Member in issue---------");
        if(newMemberYinID === ""){
            setErrorNewMember("Please select member");
        }else{

            let memberData = {
                issue_id:params.issue_id,
                yin_id:newMemberYinID,
                designation: "member"
            }
            axios.post(process.env.REACT_APP_TALK_API+'/issue/add/issue/member',memberData)
            .then(response => {
                console.log("-------------------MEMBER  ADDED SUCCESSFULLY ---- : ", response);
                if(response.data.error === "Dulpicate entry found"){
                    setErrorNewMember("Member already added")
                }else{
                    handleCloseMember();
                }
                
            }).catch(error => {
                console.log("url response in error-----", error);
            });

        }
    }

    return (
        <>
            {isIssueDetails?
            <div className='header position-fixed clearfix issues-details-header'>
                <div className='d-flex align-items-center w-100'>
                    <Link to="/issues" className="btn btn-link text-white pl-0"><i className="las la-arrow-left"></i></Link>
                    <h2>Issues Details</h2>
                    <Link to={"/update-issue/"+issueDetails[0].issue_id} className="btn btn-outline-light ml-auto">Update Issue</Link>
                </div>
            </div>:""}

            <div className="page-content w-100 issue-details">
            {isIssueDetails?
            <div className="slider-area" style={{ backgroundImage: "url(" + imageSlider + ")" ,backgroundRepeat: "no-repeat",backgroundSize: "100% 100%"}}>
                    <div className="container">
                    {isIssueDetails?
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slider-content">
                                    <ul className="list-inline d-flex align-items-center justify-content-between mb-3">
                                        <li className="list-inline-item">
                                            <h6 className="forum-title">{issueDetails[0].issue_title}</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="date ">{dateFormat(issueDetails[0].issue_created_at, "dS mmm")} to {dateFormat(issueDetails[0].issue_created_at, "dS mmm yyyy")}</p>
                                        </li>
                                    </ul>
                                    <p className="mb-3 truncate truncate-3 issueDescriptionCard">{issueDetails[0].issue_description}</p>

                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <ul className='member-list list-inline member-list d-flex align-items-center mb-0 flex-wrap'>
                                                <li className='list-inline-item'>
                                                    <label className='caption mb-0'>Members : </label>
                                                    <label className='value mb-0'>Total : {issueDetails[0].issue_member_details.length} Members   |   </label>
                                                </li>
                                                <li className='list-inline-item'>
                                                    <span className='img-holder'>
                                                        <img src={MemberImage1} alt="MemberImage1" />
                                                    </span>
                                                </li>
                                                <li className='list-inline-item'>
                                                    <span className='img-holder'>
                                                        <img src={MemberImage2} alt="MemberImage2" />
                                                    </span>
                                                </li>
                                                <li className='list-inline-item'>
                                                    <span className='img-holder'>
                                                        <img src={MemberImage3} alt="MemberImage3" />
                                                    </span>
                                                </li>
                                            </ul>
                                            {/* <ul className='member-list list-inline member-list d-flex align-items-center mb-0 flex-wrap'>
                                                <li className='list-inline-item'>
                                                    <Link to="#" className='value mb-0'>+ {issueDetails[0].issue_member_details.length} Members</Link>
                                                </li>
                                                <li className='list-inline-item ml-auto'>
                                                    <Link to="#" className='btn btn-secondary'>Chat <i className="las la-comments"></i></Link>
                                                </li>
                                            </ul> */}

                                            <ul className='member-list list-inline member-list d-flex align-items-center mb-0 flex-wrap'>

                                                <li className='list-inline-item mr-auto w-50 mb-0'>
                                                    <Link to="#" className='btn btn-secondary' onClick={handleShowMember}>Add Member <i className="las la-plus"></i></Link>
                                                </li>
                                                <li className='list-inline-item ml-auto w-50 mb-0'>
                                                    <Link to="#" className='btn btn-secondary float-right'>Chat <i className="las la-comments"></i></Link>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <div><h2>No data found </h2></div>}
                    </div>
                </div>:""}
                    
                <div className="regular-content">
                    <div className="container">
                        <div className="row d-flex align-items-center mb-3">
                            <div className="col-sm-10 col-10">
                                <h3 className="section-title mb-0">List of Activities</h3>
                            </div>
                            <div className="col-sm-2 col-2">
                                <div className='filter-dropdown'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-blue float-right" role="menuitemradio">
                                            <i className="las la-filter"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <ul className='mb-0'>
                                                <li>
                                                    <div className="radio">
                                                        <input type="radio" id="All" name="customRadio" />
                                                        <label htmlFor="All">All</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="radio">
                                                        <input type="radio" id="Completed" name="customRadio" />
                                                        <label htmlFor="Completed">Completed</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="radio">
                                                        <input type="radio" id="Live" name="customRadio" />
                                                        <label htmlFor="Live">Live</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="radio">
                                                        <input type="radio" id="Dropped" name="customRadio" />
                                                        <label htmlFor="Dropped">Dropped</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="radio">
                                                        <input type="radio" id="External" name="customRadio" />
                                                        <label htmlFor="External">External</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-sm-12">
                                <ul className='activity-list'>
                                    {/* Activity Start */}
                                    {isActivityDetails?activityDetails.map((activity,index)=>{
                                        return(
                                            <li key={index}>
                                        <span className="count-holder flex-shrink-1">{index+1}</span>
                                        <div className='activity-details'>
                                            <ul className='list-inline top-block mb-3 '>
                                                <li className='list-inline-item'>
                                                    <h4 className='mb-0 activity-title'>{activity.activity_title}  |  {dateFormat(activity.activity_created_date, "dS mmmm yyyy")}</h4>
                                                </li>
                                                <li className='list-inline-item float-right'>
                                                    <div className='d-flex align-items-center'>
                                                    {activity.activity_status === "COMPLETED"?<span className='badge bg-success '>Completed</span>:""}
                                                    {activity.activity_status === "PENDING"?<span className='badge bg-warning '>Pending</span>:""}
                                                    {activity.activity_status === "ABANDONED"?<span className='badge bg-danger '>Abandoned</span>:""}

                                                    {activity.activity_status === "ASK_FOR_HELP"?<span className='badge bg-warning '>Ask for help</span>:""}
                                                        
                                                        <div className='filter-dropdown'>
                                                            <Dropdown>
                                                                <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-blue p-0" role="menuitemradio">
                                                                    <i className="las la-ellipsis-v"></i>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <ul className='mb-0'>
                                                                        <li>
                                                                            <div className="radio">
                                                                                <input type="radio" id="markAsCompleted" name="activityAction" onClick={()=>updateActivityStatus(activity.activity_id,"COMPLETED")} />
                                                                                <label htmlFor="markAsCompleted">Mark as Completed</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="radio">
                                                                                <input type="radio" id="MarkAsAbandoned" name="activityAction" onClick={()=>updateActivityStatus(activity.activity_id,"ABANDONED")}/>
                                                                                <label htmlFor="MarkAsAbandoned">Mark as Abandoned</label>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="radio">
                                                                                <input type="radio" id="askForHelp" name="activityAction" onClick={()=>updateActivityStatus(activity.activity_id,"ASK_FOR_HELP")}/>
                                                                                <label htmlFor="askForHelp">Ask for Help</label>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-2'>{activity.activity_description} </p>
                                            <p className='owners'><span>Activity Owners : </span>Manisha Deshpande, Amruta Walimbe, Ashutosh Kulkarni</p>
                                            <ul className='list-inline top-block justify-content-end mt-2 mb-0'>
                                                <li className='list-inline-item'>
                                                    <button type='button' className='btn btn-link p-1' onClick={handleShowComments}><i className="las la-comment-alt"></i></button>
                                                </li>
                                                <li className='list-inline-item'>
                                                    <Link to={"/update-activity/"+activity.activity_id} className='btn btn-link p-1 linkColor'><i className="las la-pen"></i></Link>
                                                </li>
                                                <li className='list-inline-item'>
                                                    <button type='button' className='btn btn-link p-1'><i className="las la-trash-alt"></i></button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                        )
                                    }):<h6>NO ACTIVITY FOUND</h6>}
                                    {/* Activity End */}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                    {isEventDatails?<div className="row">
                            <div className="col-sm-12">
                                <h3 className="section-title mb-0">Events</h3>
                                <div className='issue-events-carousel'>
                                    <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} className='event-carousel'>
                                        {eventDatails.map((event,index)=>{
                                            return(
                                                <div key={index}>
                                                    <div className='row'>
                                                        <div className='col-12 col-sm-6 col-lg-6 m-auto'>
                                                            <div className='event-block clearfix'>
                                                                <div className='p-2 text-left'>
                                                                    <h2 className='mb-1'>{event.event_title}</h2>
                                                                    <p className='time mb-2'>{dateFormat(event.event_created_date, "dS mmmm yyyy")}</p>
                                                                </div>
                                                                <figure>
                                                                    <img src={event.event_images?event.event_images:EventImage1} alt="EventImage1" />
                                                                </figure>
                                                                <div className='p-2'>
                                                                    <p className='event-desc truncate truncate-2 mb-1'>{event.event_description} </p>
                                                                </div>
                                                                <Link to={"/event-details/"+event.event_id} className='btn btn-primary'>View Details</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );

                                        })}
                                        {/* 7738952867 */}
                                    </Carousel>
                                </div>
                            </div>
                        </div>:""}
                    </div>
                </div>
            </div>
            <Modal show={activity} onHide={handleCloseActivity} animation={true} backdrop="static" centered >
                <Modal.Header className='text-center'>
                    <Modal.Title >Add Activity</Modal.Title>
                    <button type="button" className="close" aria-hidden="true" onClick={handleCloseActivity}><i className="las la-times"></i></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-sm-12">
                        <div className="form-group common">
                            <label htmlFor='title' className='sr-only'>Title</label>
                            <input type="text" id="title" className="form-control" placeholder="Title" />
                        </div>
                        <div className="form-group common">
                            <label htmlFor='description' className='sr-only'>Write Description</label>
                            <textarea className="form-control" id="description" placeholder='Write Description' rows="3"></textarea>
                        </div>
                        <div className="form-group common mb-0">
                            <label htmlFor='description' className='sr-only'>Write Description</label>
                            <select className="custom-select with-icon" name="state">
                                <option value="">Assign To Member</option>
                                <option value="Manisha Deshpande">Manisha Deshpande</option>
                                <option value="Aniket Sabnis">Aniket Sabnis</option>
                                <option value="Priyanka Jadhav">Priyanka Jadhav</option>
                                <option value="Amruta Walimbe">Amruta Walimbe</option>
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <ul className='list-inline text-center w-100'>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={handleCloseActivity}>Close</button>
                        </li>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={handleCloseActivity}>Save Changes</button>
                        </li>
                    </ul>
                </Modal.Footer>
            </Modal>

            <Modal show={member} onHide={handleCloseMember} animation={true} backdrop="static" centered >
                <Modal.Header className='text-center'>
                    <Modal.Title >Add Member</Modal.Title>
                    <button type="button" className="close" aria-hidden="true" onClick={handleCloseMember}><i className="las la-times"></i></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-sm-12">
                        <div className="form-group common mb-4">
                            <select className="custom-select with-icon" name="newmember" onChange={newMemberYINID}>
                                <option value="" >Select member</option>
                                {isforumMember?forumMember.map((forum,index)=>{
                                    return(<option value={forum.yin_id} key={index} >{forum.first_name} {forum.last_name}</option>)
                                }):""}
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <div className='errorDiv'>{errorNewMember}</div>
                    <ul className='list-inline text-center w-100'>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={handleCloseMember}>Close</button>
                        </li>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={addNewMemberInIssue}>Save Changes</button>
                        </li>
                    </ul>
                </Modal.Footer>
            </Modal>

            <Modal show={commentsModal} onHide={handleCloseComments} animation={true} backdrop="static" centered >
                <Modal.Header className='text-center'>
                    <Modal.Title >Add Comments on Activity</Modal.Title>
                    <button type="button" className="close" aria-hidden="true" onClick={handleCloseComments}><i className="las la-times"></i></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-sm-12 issue-details">
                        <div className='activity-details mb-4'>
                            <ul className='list-inline top-block justify-content-start mb-3 '>
                                <li className='list-inline-item'>
                                    <h4 className='mb-0 activity-title'>Activity Title  |  5th Jan 2022</h4>
                                </li>
                            </ul>
                            <p className='desc truncate truncate-2 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                            <p className='owners'><span>Activity Owners : </span>Manisha Deshpande, Amruta Walimbe, Ashutosh Kulkarni</p>
                        </div>
                        <div className="form-group common mb-0">
                            <label htmlFor='description' className='sr-only'>Write Description</label>
                            <textarea className="form-control" id="description" placeholder='Write Comments' rows="3"></textarea>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <ul className='list-inline text-center w-100'>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={handleCloseComments}>Close</button>
                        </li>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={handleCloseComments}>Save Changes</button>
                        </li>
                    </ul>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default IssueDetails;
