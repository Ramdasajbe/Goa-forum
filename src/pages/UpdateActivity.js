import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Modal } from 'react-bootstrap';
import axios from 'axios';
import dateFormat from 'dateformat';
import { useParams } from 'react-router-dom'
import ImgPreview from '../assets/images/img-preview.png';
import MemberImage1 from '../assets/images/member-1.png';

function UpdateActivity() {
    const [activityDetails, setActivityDetails]= useState();
    const [isActivityDetails, setIsActivityDetails] = useState(false);
    const [memberDetails, setMemberDetails]= useState();
    const [isMemberDetails, setIsMemberDetails] = useState(false);
    const [title , setActivityTitle] = useState("");
    const [description , setActivityDescription] = useState("");
    const [error , setError] = useState("");
    const params = useParams();
    const [forumId,setForumId] = useState();
    const [issueId,setIssueId] = useState();
    const [member, setMember] = useState(false);
    const [forumMember, setForummember] = useState();
    const [isforumMember, setIsForummember] = useState(false);
    const [newMemberYinID, setnewMemberYinID] = useState("");
    const [errorNewMember , setErrorNewMember] = useState("");
    const [isTitleChange, setIsTitleChange] = useState(false);
    const [isDescriptionChange, setIsDescriptionChange] = useState(false);

    const handleCloseMember = () => setMember(false);

    const handleShowMember = () =>{
        axios.get(process.env.REACT_APP_TALK_API+'/forum/get/forum/member-details/'+forumId)
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


    useEffect(() => {
        axios.get(process.env.REACT_APP_TALK_API+'/activity/list/activity_id/'+params.activity_id)
            .then(response => {
                console.log("............ACTIVITY DATA..........", response.data);
                setActivityDetails(response.data[0]);
                setIsActivityDetails(true);
                setForumId(response.data[0].forum_id);
                setIssueId(response.data[0].issue_id);
                getMemberDetails(params.activity_id);
                setActivityTitle(response.data[0].activity_title);
                setActivityDescription(response.data[0].activity_description);

            }).catch(error => {
                console.log("url response in error-----", error);
            });
    },[]);

    function getMemberDetails(activityIDS){
        axios.get(process.env.REACT_APP_TALK_API+'/activity/get/activity/member-details/' + activityIDS)
        .then(response => {
            console.log("-------------------MEMBER DATA ---- : ", response);
            if(response.data.error_name === "No entry found"){
                setIsMemberDetails(false);
            }else{
                setMemberDetails(response.data);
                setIsMemberDetails(true);
            }
        }).catch(error => {
            console.log("url response in error-----", error);
        });
    }
    
    function newMemberYINID(e){
        e.preventDefault();
        setnewMemberYinID(e.target.value);
    }
    
    function AddNewMemberInActivity(){
        console.log("---------Add new Member in Activity---------");
        if(newMemberYinID === ""){
            setErrorNewMember("Please select member");
        }else{

            let memberData = {
                activity_id:params.activity_id,
                yin_id:newMemberYinID,
                designation: "member"
            }
            axios.post(process.env.REACT_APP_TALK_API+'/activity/add/activity/member',memberData)
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

    function addActivityTitle(e){
        e.preventDefault();
        setActivityTitle(e.target.value);
        setIsTitleChange(true);
        setError();
    }

    function addActivityDescription(e){
        e.preventDefault();
        setActivityDescription(e.target.value);
        setIsDescriptionChange(true);
        setError();
    }

    function updateActivityDetails(){
        console.log("-------activity update----------");
        if(isTitleChange === true || isDescriptionChange === true){
            if(title === ""){
                setError("Please enter title");
            }else if(description === ""){
                setError("Please enter description");
            }else{

                let activityData = {
                    activity_id:params.activity_id,
                    activity_title:title,
                    activity_description:description,
                    activity_full_description:description,
                }
                axios.post(process.env.REACT_APP_TALK_API+'/activity/update/details',activityData)
                .then(response => {
                    console.log("-------------------ACTIVITY UPDATED SUCCESSFULLY ---- : ", response);
                }).catch(error => {
                    console.log("url response in error-----", error);
                });

            }
        }else{
            setError("No data has been update");
        }
    }
    return (
        <div>
            {isActivityDetails?
            <div className='header position-fixed clearfix'>
                <div className='d-flex align-items-center w-100'>
                    <Link to={"/issues-details/"+issueId} className="btn btn-link text-white pl-0"><i className="las la-arrow-left"></i></Link>
                    <h2>Update Activity</h2>
                </div>
            </div>:""}
            <div className="page-content w-100 issue-details add-new-issues update-activity">
                <div className="container">
                    
                {isActivityDetails?
                        <div className="row mb-2">
                        <div className="col-sm-12 ">
                            <div className="form-group common">
                                <label htmlFor='title' className='sr-only'>Give a Title to the Issue </label>
                                <input type="text" id="title" className="form-control" onChange={addActivityTitle} placeholder="Give a Title to the Issue" defaultValue={activityDetails.activity_title} />
                            </div>

                            <div className="form-group common">
                                <label htmlFor='description' className='sr-only'>Give a description to the Issue</label>
                                <textarea className="form-control" id="description" onChange={addActivityDescription} placeholder='Give a description to the Issue' rows="3" defaultValue={activityDetails.activity_description} ></textarea>
                            </div>
                        </div>
                    </div>:""}

                    <div className="row mb-3">
                        <div className="col-sm-12 ">
                        <div className='errorDiv'>{error}</div>
                            <ul className='list-inline text-center'>
                                <li className='list-inline-item'>
                                    <button type='button' className='btn btn-secondary' onClick={updateActivityDetails}>Save & Update</button>
                                </li>
                                <li className='list-inline-item'>
                                    <button type='button' className='btn btn-secondary'>Cancel</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 
                    <div className="row mb-5">
                            <div className="col-12">
                                <div className="activityBox">
                                    <h4></h4>
                                    <p className="desc mb-2 mt-2 truncate truncate-6">{}</p>
                                </div>
                        </div>
                         */}

                    <div className="row d-flex align-items-center mb-3">
                        <div className="col-sm-8 col-6">
                            <h3 className="section-title mb-0">Activity Members </h3>
                        </div>
                        <div className="col-sm-4 col-6">
                            <button className='btn btn-primary float-right' onClick={handleShowMember}>Add Member <i className="las la-plus"></i></button>
                        </div>
                    </div>

                    <div className='row'>
                        <div className="col-sm-12">
                            <div className="card mb-5 members forum-director">
                                <div className="card-body">
                                    <div className='row'>
                                    {isMemberDetails?memberDetails.map((member,index)=>(
                                        <div className="col-sm-6 col-12" key={index}>
                                            <div className="member-block d-flex" >
                                                <figure className="flex-shrink-1"><img src={member.profile_image?member.profile_image:MemberImage1} alt={"MemberImage"+index} /></figure>
                                                <div className="w-100">
                                                    <h3 className="member-name">{member.first_name} {member.last_name}</h3>
                                                    <label><span>College Name : </span> {member.college_name}</label>
                                                    <label><span>Designation :  </span>{member.designation}</label>
                                                </div>
                                            </div>
                                        </div>
                                    )):""}
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-5'>
                        <div className='col-sm-12'>
                            <ul className='list-inline mb-3'>
                                <li className='list-inline-item mr-2'>
                                    <div className="radio">
                                        <input type="radio" id="complete" name="activity_status" defaultChecked="true" />
                                        <label htmlFor="complete">Mark As Complete</label>
                                    </div>
                                </li>
                                <li className='list-inline-item mr-2'>
                                    <div className="radio">
                                        <input type="radio" id="abandoned" name="activity_status" />
                                        <label htmlFor="abandoned">Mark As Abandoned</label>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <div className="radio">
                                        <input type="radio" id="help" name="activity_status" />
                                        <label htmlFor="help">Ask for Help</label>
                                    </div>
                                </li>
                            </ul>
                            <div className="form-group common">
                                <label htmlFor='comments' className='sr-only'>Write your comments</label>
                                <textarea className="form-control" id="comments" placeholder='Write your comments' rows="3"></textarea>
                            </div>

                            <div className='row'>
                                <div className="col-sm-3">
                                    <label htmlFor='file' className='photo-label'>Add Photo</label>
                                    <div className="box">
                                        <input type="file" name="file" id="file" className="inputfile" data-multiple-caption="{count} files selected" multiple />
                                        <label htmlFor="file"><i className="las la-camera"></i></label>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className='img-preview'>
                                        <img src={ImgPreview} alt="ImgPreview" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className='list-inline text-center'>
                                <li className='list-inline-item'>
                                    <button type='button' className='btn btn-secondary'>Save & Update</button>
                                </li>
                                <li className='list-inline-item'>
                                    <button type='button' className='btn btn-secondary'>Cancel</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

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
                            <button className='btn btn-secondary' onClick={AddNewMemberInActivity}>Save Changes</button>
                        </li>
                    </ul>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default UpdateActivity
