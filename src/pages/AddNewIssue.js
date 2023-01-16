import React from 'react';
import { useState, useEffect} from 'react';
import { Link,useParams} from 'react-router-dom';
import { Dropdown, Modal } from 'react-bootstrap'
import ImgPreview from '../assets/images/img-preview.png';
import MemberImage1 from '../assets/images/member-1.png';
// import MemberImage2 from '../assets/images/member-2.png';
// import MemberImage3 from '../assets/images/member-3.png';
// import MemberImage4 from '../assets/images/member-4.png';
import Compressor from 'compressorjs';
import S3 from "react-aws-s3";
import axios from 'axios';

function AddNewIssue() {
    const [show, setShow] = useState(false);
    const [addMemberModal, setMember] = useState(false);
    const [memberDetails, setMemberDetails]= useState();
    const [isMemberDetails, setIsMemberDetails] = useState(false);
    const [imagePreviewUrl,setImagePreviewUrl] = useState(ImgPreview);
    const [imageURL , setImageURl] = useState("");
    const [title , setTitle] = useState("");
    const [description , setDescriptions] = useState("");
    const [error , setError] = useState("");
    const [forumId,setForumId] = useState();
    const params = useParams();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseMember = () => setMember(false);
    const handleShowMember = () => setMember(true);

    useEffect(()=>{
        let issueID = params.forum_id?params.forum_id:'FORUM_COL0001234_BOYS';
        setForumId(issueID);
        axios.get(process.env.REACT_APP_TALK_API+'/forum/get/forum/member-details/'+issueID)
        .then(response => {
            console.log("-------------------ACTIVITY DATA ---- : ", response);
            if(response.data.error === "NO data found"){
                setIsMemberDetails(false);
            }else{
                setMemberDetails(response.data);
                setIsMemberDetails(true);
            }
        }).catch(error => {
            console.log("url response in error-----", error);
        });

    },[])


    function setIssueTitle(e) {
        e.preventDefault();
        console.log('The link was clicked.',e.target.value);
        setTitle(e.target.value);
    }

    function setIssueDescription(e) {
        e.preventDefault();
        console.log('The link was clicked.',e.target.value);
        setDescriptions(e.target.value);

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
                          
                    }).catch(err => {
                        console.log("-------error in s3 react--------------",err);
                        console.error(err);
                    });
                },
            });
                console.log("--------------- Upload image -----------");
            } 
        
    }

    function addNewIssueInForum(){
        console.log("----------Add new issue in forum called-------");
        if(title === ""){
            setError("Please enter title");
        }else if(description === ""){
            setError("Please enter description");
        }else if(imageURL === ""){
            setError("Please add image");
        }else{

            let issueData = {
                college_code:localStorage.getItem("college_code"),
                issue_title:title,
                issue_description:description,
                issue_full_description:description,
                issue_images:imageURL,
                issue_types:"LIVE",
                forum_id:forumId,
                issue_member_details:[{"designation":"member","yin_id":"MHPC000012"}],
                is_published:true,
                issue_tags:["issue","new issue data","cleaning data"]
            }
            axios.post(process.env.REACT_APP_TALK_API+'/issue/create',issueData)
            .then(response => {
                console.log("-------------------ISSUE ADDED SUCCESSFULLY ---- : ", response);
                let links = document.getElementById("issueScreen");
                links.click();

              
            }).catch(error => {
                console.log("url response in error-----", error);
            });

        }
    }
      
    return (
        <>
            <div className='header position-fixed clearfix'>
                <div className='d-flex align-items-center w-100'>
                    <Link to="/issues" className="btn btn-link text-white pl-0"><i className="las la-arrow-left"></i></Link>
                    <h2>Add New Issue</h2>
                </div>
            </div>
            <div className="page-content w-100 issue-details add-new-issues">
                {/****************** For Forum Director *********************/}
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-sm-12">
                            <div className="form-group common">
                                <label htmlFor='title' className='sr-only'>Give a Title to the Issue</label>
                                <input type="text" id="title" name="title" onChange={setIssueTitle} className="form-control" placeholder="Give a Title to the Issue" />
                            </div>

                            <div className="form-group common">
                                <label htmlFor='description' className='sr-only'>Give a description to the Issue</label>
                                <textarea className="form-control" onChange={setIssueDescription}  name="description" id="description" placeholder='Give a description to the Issue' rows="3"></textarea>
                            </div>

                            <div className='row'>
                                <div className="col-sm-3">
                                    <label htmlFor='file' className='photo-label'>Add Photo</label>
                                    <div className="box">
                                        <input type="file" name="file" id="file" onChange={uploadImageToS3} className="inputfile" data-multiple-caption="{count} files selected" />
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
                            <h3 className="section-title mb-0">Forum Members</h3>
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

                    

                    <div className="row mb-4">
                        <div className="col-sm-12">
                            <div className='errorDiv'>{error}</div>
                            <Link to="/issues" id="issueScreen"></Link>
                            <ul className='list-inline text-center mb-0'>
                                <li className='list-inline-item'>
                                    <button type='button' className='btn btn-secondary' onClick={addNewIssueInForum}>Save Issue</button>
                                </li>
                                <li className='list-inline-item'>
                                    <button type='button' className='btn btn-secondary'>Cancel</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/****************** For Forum Director *********************/}
            </div>

            <Modal show={show} onHide={handleClose} animation={true} backdrop="static" centered >
                <Modal.Header className='text-center'>
                    <Modal.Title >Add Activity</Modal.Title>
                    <button type="button" className="close" aria-hidden="true" onClick={handleClose}><i className="las la-times"></i></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-sm-12">
                        <div className="form-group common">
                            <label htmlFor='title' className='sr-only'>Title</label>
                            <input type="text" id="title" className="form-control" placeholder="Title" />
                        </div>
                        <div className="form-group common mb-0">
                            <label htmlFor='description' className='sr-only'>Write Description</label>
                            <textarea className="form-control" id="description" placeholder='Write Description' rows="3"></textarea>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <ul className='list-inline text-center w-100'>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={handleClose}>Close</button>
                        </li>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={handleClose}>Save Changes</button>
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
                            <div className="input-group common mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="las la-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                            <div className="input-group common mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="las la-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                            <div className="input-group common mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="las la-mobile"></i></span>
                                </div>
                                <input type="number" className="form-control" placeholder="Mobile Number" />
                            </div>
                            <div className="input-group common mb-3">
                                <ul className='list-inline mb-0'>
                                    <li className='list-inline-item mr-3'>
                                        <label className='mb-0'>Gender :</label>
                                    </li>
                                    <li className='list-inline-item mr-3'>
                                        <div className="radio">
                                            <input type="radio" id="male" name="gender" defaultChecked="true" />
                                            <label htmlFor="male" className='mb-0'>Male</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item mr-3'>
                                        <div className="radio">
                                            <input type="radio" id="female" name="gender" />
                                            <label htmlFor="female" className='mb-0'>Female</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item mr-3'>
                                        <div className="radio">
                                            <input type="radio" id="other" name="gender" />
                                            <label htmlFor="other" className='mb-0'>Other</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="form-group common mb-4">
                                <select className="custom-select with-icon" name="state">
                                    <option value="">Select State</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                </select>
                            </div>
                            <div className="form-group common mb-0">
                                <select className="custom-select with-icon collage" name="collage">
                                    <option value="">Select Collage</option>
                                    <option value="Collage 1">Collage 1</option>
                                    <option value="Collage 2">Collage 2</option>
                                    <option value="Collage 3">Collage 3</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <ul className='list-inline text-center w-100'>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={handleCloseMember}>Add</button>
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

export default AddNewIssue
