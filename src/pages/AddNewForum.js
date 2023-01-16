import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ReactTagInput from "@pathofdev/react-tag-input";

import ImgPreview from '../assets/images/img-preview.png';
import "@pathofdev/react-tag-input/build/index.css";

function AddNewForum() {

    const [tags, setTags] = useState(["example tag"])

    return <>
        <div className='header position-fixed clearfix'>
            <div className='d-flex align-items-center w-100'>
                <Link to="/forum" className="btn btn-link text-white pl-0"><i className="las la-arrow-left"></i></Link>
                <h2>Add New Forum</h2>
            </div>
        </div>
        <div className="page-content w-100 issue-details add-new-issues">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-12 col-sm-6">
                        <div className="form-group common">
                            <label className='label-caption' htmlFor='collegeName'>College Name</label>
                            <input type="text" id="collegeName" className="form-control" placeholder="Type here" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="form-group common">
                            <label className='label-caption' htmlFor='name'>Name</label>
                            <input type="text" id="name" className="form-control" placeholder="Type here" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="form-group common">
                            <label className='label-caption' htmlFor='displayName'>display Name</label>
                            <input type="text" id="displayName" className="form-control" placeholder="Type here" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="form-group common mb-4">
                            <label className='label-caption' htmlFor='forumType'>Forum Type</label>
                            <select className="custom-select" name="forum_type" id="forumTyp">
                                <option value="">Forum Type</option>
                                <option value="BOYS_FORUM">BOYS_FORUM</option>
                                <option value="GIRL_FORUM">GIRL_FORUM</option>
                                <option value="MIXEDGENDER">MIXEDGENDER</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="form-group common">
                            <label className='label-caption' htmlFor='shortDescription'>Short Description</label>
                            <textarea className="form-control" id="shortDescription" placeholder='Type here' rows="3"></textarea>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="form-group common">
                            <label className='label-caption' htmlFor='FullDescription'>Full Description</label>
                            <textarea className="form-control" id="FullDescription" placeholder='Type here' rows="3"></textarea>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="form-group common">
                            <label className='label-caption photo-label' htmlFor='file'>Add Photo</label>
                            <div className="box">
                                <input type="file" name="file" id="file" className="inputfile" data-multiple-caption="{count} files selected" multiple />
                                <label htmlFor="file"><i className="las la-camera"></i></label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="form-group common">
                            <div className='img-preview mb-2'>
                                <img src={ImgPreview} alt="ImgPreview" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12">
                        <div className="form-group common">
                            <div className="checkbox custom-size">
                                <input type="checkbox" id="isPublished" name="is_published" />
                                <label className='label-caption' htmlFor="isPublished">Is Published</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12">
                        <div className="form-group common">
                            <label className='label-caption photo-label' htmlFor='Tags'>Add Tags</label>
                            <ReactTagInput
                                tags={tags}
                                onChange={(newTags) => setTags(newTags)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-12">
                        <ul className='list-inline text-center mb-0'>
                            <li className='list-inline-item'>
                                <button type='button' className='btn btn-secondary'>Add</button>
                            </li>
                            <li className='list-inline-item'>
                                <button type='button' className='btn btn-secondary'>Cancel</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default AddNewForum;
