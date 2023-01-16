import React, { useState, useEffect} from 'react'
import { Link,useParams} from 'react-router-dom';
import { Modal } from 'react-bootstrap'
import ImgPreview from '../assets/images/img-preview.png';
import MemberImage1 from '../assets/images/member-1.png';
import axios from 'axios';
import S3 from "react-aws-s3";
import Compressor from 'compressorjs';
window.Buffer = window.Buffer || require('buffer').Buffer;

function UpdateIssues() {
    const [show, setShow] = useState(false);
    const [addMemberModal, setMember] = useState(false);
    const [activityDetails, setActivityDetails]= useState();
    const [isActivityDetails, setIsActivityDetails] = useState(false);
    const [issueDetails, setIssueDetails]= useState();
    const [isIssueDetails, setIsIssueDetails] = useState(false);
    // const [eventDatails, setEventDatails]= useState();
    // const [isEventDatails, setIsEventDatails] = useState(false);
    const [memberDetails, setMemberDetails]= useState();
    const [isMemberDetails, setIsMemberDetails] = useState(false);
    const [imagePreviewUrl,setImagePreviewUrl] = useState(ImgPreview);
    const [imageURL , setImageURl] = useState("");
    const [title , setTitle] = useState("");
    const [description , setDescriptions] = useState("");
    const [activityTitle , setActivityTitle] = useState("");
    const [activityDescription , setActivityDescriptions] = useState("");
    const [error , setError] = useState("");
    const [collegeCode , setcollegeCode] = useState("");
    const [issueTypes , setissueTypes] = useState("");
    const [issueTags , setissueTags] = useState("");
    const [issueMember , setIssueMemberDetails] = useState("");
    const [errorAddActivity , setAddActivityError] = useState("");
    const [forumId,setForumId] = useState();
    const [forumMember, setForummember] = useState();
    const [isforumMember, setIsForummember] = useState(false);
    const [newMemberYinID, setnewMemberYinID] = useState("");
    const [errorNewMember , setErrorNewMember] = useState("");
    const [isTitleChange, setIsTitleChange] = useState(false);
    const [isDescriptionChange, setIsDescriptionChange] = useState(false);
    const [isImageChange, setIsImageChange] = useState(false);



    const params = useParams();
    // const [activity, setActivity] = useState(false);
    // const [commentsModal, setCommentsModal] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseMember = () => setMember(false);

    const handleShowMember = () => {
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


    }

    useEffect(() => {
        params.issue_id = params.issue_id?params.issue_id:'ISSUECOL_120223_RIVERCLEANINGDATA';
        axios.get(process.env.REACT_APP_TALK_API+'/issue/list/issue_id/'+params.issue_id)
            .then(response => {
                console.log("............Issue data..........", response);
                setIssueDetails(response.data);
                setTitle(response.data[0].issue_title);
                setDescriptions(response.data[0].issue_description);
                setImageURl(response.data[0].issue_images);
                setIsIssueDetails(true);
                setImagePreviewUrl(response.data[0].issue_images);
                setForumId(response.data[0].forum_id);
                setIssueMemberDetails(response.data[0].issue_member_details);
                setcollegeCode(response.data[0].college_code);
                setissueTypes(response.data[0].issue_type);
                setissueTags(response.data[0].issue_tags);
                if(response.data[0].forum_id){
                    getActivityData(params.issue_id);
                    getMemberDetails(params.issue_id);
                }

            }).catch(error => {
                console.log("url response in error-----", error);
            });
    },[]);

   function getActivityData(issueIDS){
        axios.get(process.env.REACT_APP_TALK_API+'/activity/list/activity/issue-id/'+ issueIDS)
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
   }

    function getMemberDetails(issueIDS){
        axios.get(process.env.REACT_APP_TALK_API+'/issue/get/issue/member-details/' + issueIDS)
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

    function setIssueTitle(e) {
        e.preventDefault();
        // console.log('------set issue update title---------',e.target.value);
        setTitle(e.target.value);
        setIsTitleChange(true);
    }

    function setIssueDescription(e) {
        e.preventDefault();
        // console.log('The link was clicked.',e.target.value);
        setDescriptions(e.target.value);
        setIsDescriptionChange(true);

    }

    function newMemberYINID(e){
        e.preventDefault();
        // console.log('-----new member yin id------------',e.target.value);
        setnewMemberYinID(e.target.value);
    }

    function uploadImageToS3(event){
            const config = {
                bucketName: process.env.REACT_APP_BUCKET_NAME,
                dirName: process.env.REACT_APP_DIR_NAME+"/talk/issues",
                region: process.env.REACT_APP_REGION,
                accessKeyId: process.env.REACT_APP_ACCESS_ID,
                secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
                s3Url:"https://foxberry-images.s3.amazonaws.com"
                };
                console.log("upload image to s3------------",config);
    
            var fileInput = false;
            const image=event.target.files[0];
            if (event.target.files && event.target.files[0]) {
                let a = URL.createObjectURL(event.target.files[0]);
                setImagePreviewUrl(a);
                fileInput = true;
            }

            if (fileInput) {
                new Compressor(image, {
                quality: 0.9,
                success: (compressedResult) => {
                    console.log("image data after result- compressedResultcompressedResultcompressedResult-------------- ",compressedResult);
                        let getTimeStamp = new Date().getTime();
                        let newFileName = forumId+"_"+getTimeStamp;
                        console.log("------- filename image upload --------",newFileName);
                    const ReactS3Client = new S3(config);
                    ReactS3Client.uploadFile(compressedResult, newFileName).then((res) => {
                             console.log("image uploaded successfully!!!!",res);
                             setImageURl(res.location);
                             setIsImageChange(true);
                          
                    }).catch(err => {
                        console.log("-------error in s3 react--------------",err);
                        console.error(err);
                    });
                },
            });
                console.log("--------------- Upload image -----------");
            } 
        
    }

    function updateIssueInForum(){
        console.log("----------Add new issue in forum called-------");
         if(isTitleChange === true || isDescriptionChange === true || isImageChange === true){
            if(title === ""){
                setError("Please enter title");
            }else if(description === ""){
                setError("Please enter description");
            }else if(imageURL === ""){
                setError("Please add image");
            }else{

                let issueData = {
                    issue_id:params.issue_id,
                    college_code:collegeCode,
                    issue_title:title,
                    issue_description:description,
                    issue_full_description:description,
                    issue_images:imageURL,
                    issue_types:issueTypes,
                    forum_id:forumId,
                    issue_member_details:issueMember,
                    is_published:true,
                    issue_tags:issueTags
                }
                axios.post(process.env.REACT_APP_TALK_API+'/issue/update',issueData)
                .then(response => {
                    console.log("-------------------ISSUE UPDATED SUCCESSFULLY ---- : ", response);
                }).catch(error => {
                    console.log("url response in error-----", error);
                });

            }
        }else{
            setError("No data has been update");
        }
    }
      

    function ActivityTitle(e) {
        e.preventDefault();
        // console.log('--setActivityTitle-------',e.target.value);
        setActivityTitle(e.target.value);
    }

    function ActivityDescription(e) {
        e.preventDefault();
        // console.log('-------setActivityDescriptions---------',e.target.value);
        setActivityDescriptions(e.target.value);
    }

    function addNewActivity(){
        console.log("---------Add new activity---------");
        if(activityTitle === ""){
            setAddActivityError("Please enter title");
        }else if(activityDescription === ""){
            setAddActivityError("Please enter description");
        }else{

            let issueData = {
                issue_id:params.issue_id,
                forum_id:forumId,
                activity_title:activityTitle,
                activity_description:activityDescription,
                activity_status:"PENDING",
                activity_member_details:issueMember,
                is_published:true,
            }
            axios.post(process.env.REACT_APP_TALK_API+'/activity/create',issueData)
            .then(response => {
                console.log("-------------------Activity ADDED SUCCESSFULLY ---- : ", response);
                getActivityData(params.issue_id);
                handleClose();
            }).catch(error => {
                console.log("url response in error-----", error);
            });

        }
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
                    getMemberDetails(params.issue_id)
                    handleCloseMember();
                }
                
            }).catch(error => {
                console.log("url response in error-----", error);
            });

        }
    }
    return (
        <>
            <div className='header position-fixed clearfix'>
                <div className='d-flex align-items-center w-100'>
                    <Link to={"/issues-details/"+params.issue_id} className="btn btn-link text-white pl-0"><i className="las la-arrow-left"></i></Link>
                    <h2>Update Issue</h2>
                </div>
            </div>
            {isIssueDetails?<>
            <div className="page-content w-100 issue-details add-new-issues">
                {/****************** For Forum Director *********************/}
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-sm-12 ">
                            <div className="form-group common">
                                <label htmlFor='title' className='sr-only'>Give a Title to the Issue </label>
                                <input type="text" id="title" className="form-control" onChange={setIssueTitle} placeholder="Give a Title to the Issue" defaultValue={issueDetails[0].issue_title} />
                            </div>

                            <div className="form-group common">
                                <label htmlFor='description' className='sr-only'>Give a description to the Issue</label>
                                <textarea className="form-control" id="description" onChange={setIssueDescription} placeholder='Give a description to the Issue' rows="3" defaultValue={issueDetails[0].issue_description} ></textarea>
                            </div>

                            <div className='row'>
                                <div className="col-sm-3">
                                    <label htmlFor='file' className='photo-label'>Add Photo</label>
                                    <div className="box">
                                        <input type="file" name="file"  onChange={uploadImageToS3} id="file" className="inputfile" data-multiple-caption="{count} files selected" multiple />
                                        <label htmlFor="file"><i className="las la-camera"></i></label>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className='img-preview'>
                                        <img src={imagePreviewUrl} alt="ImgPreview" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-center mb-3">
                        <div className="col-sm-8 col-6">
                            <h3 className="section-title mb-0">Meetings Updates </h3>
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

                    <div className="row d-flex align-items-center mb-3">
                        <div className="col-sm-8 col-6">
                            <h3 className="section-title mb-0">List of Activities</h3>
                        </div>
                        <div className="col-sm-4 col-6">
                            <button className='btn btn-primary float-right' onClick={handleShow}>Add New Activity <i className="las la-plus"></i></button>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-12">
                            <ul className='activity-list'>
                                {isActivityDetails?activityDetails.map((activity,index)=>(
                                <li key={index}>
                                    <span className="count-holder flex-shrink-1">{index+1}</span>
                                    <div className='activity-details'>
                                        <ul className='list-inline top-block mb-3 '>
                                            <li className='list-inline-item'>
                                                <h4 className='mb-0 activity-title'>{activity.activity_title}</h4>
                                            </li>
                                        </ul>
                                        <p className='desc truncate truncate-2 mb-2'>{activity.activity_description} </p>
                                    </div>
                                </li>
                                )):""}
                                

                            </ul>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-sm-12">
                        <div className='errorDiv'>{error}</div>
                            <ul className='list-inline text-center mb-0'>
                                <li className='list-inline-item'>
                                    <button type='button' className='btn btn-secondary' onClick={updateIssueInForum}>Save Issue</button>
                                </li>
                                <li className='list-inline-item'>
                                    <Link to={"/issues-details/"+params.issue_id} className='btn btn-secondary'>Cancel</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/****************** For Forum Director *********************/}
            </div></>
            :""}

            <Modal show={show} onHide={handleClose} animation={true} backdrop="static" centered >
                <Modal.Header className='text-center'>
                    <Modal.Title >Add Activity</Modal.Title>
                    <button type="button" className="close" aria-hidden="true" onClick={handleClose}><i className="las la-times"></i></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-sm-12">
                        <div className="form-group common">
                            <label htmlFor='title' className='sr-only'>Title</label>
                            <input type="text" id="title" className="form-control" onChange={ActivityTitle}  placeholder="Title" />
                        </div>
                        <div className="form-group common mb-0">
                            <label htmlFor='description' className='sr-only'>Write Description</label>
                            <textarea className="form-control" id="description" onChange={ActivityDescription} placeholder='Write Description' rows="3"></textarea>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='errorDiv'>{errorAddActivity}</div>
                    <ul className='list-inline text-center w-100'>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={handleClose}>Close</button>
                        </li>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={addNewActivity}>Save Changes</button>
                        </li>
                    </ul>
                </Modal.Footer>
            </Modal>


            <Modal show={addMemberModal} onHide={handleCloseMember} animation={true} backdrop="static" centered >
                <Modal.Header className='text-center'>
                    <Modal.Title >Add New Member</Modal.Title>
                    <button type="button" className="close" aria-hidden="true" onClick={handleCloseMember}><i className="las la-times"></i></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-sm-12">
                        <form>
                            <div className="form-group common mb-4">
                                <select className="custom-select with-icon" name="newmember" onChange={newMemberYINID}>
                                    <option value="" >Select member</option>
                                    {isforumMember?forumMember.map((forum,index)=>{
                                        return(<option value={forum.yin_id} key={index} >{forum.first_name} {forum.last_name}</option>)
                                    }):""}
                                </select>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className='errorDiv'>{errorNewMember}</div>
                    <ul className='list-inline text-center w-100'>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={addNewMemberInIssue}>Add</button>
                        </li>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={handleCloseMember}>Cancel</button>
                        </li>
                    </ul>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateIssues;
