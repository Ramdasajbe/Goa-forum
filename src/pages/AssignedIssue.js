import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import { SlideDown } from 'react-slidedown'

import SliderImage from '../assets/images/assigned-issue-bg.png';
import MemberImage1 from '../assets/images/member-1.png';
import MemberImage2 from '../assets/images/member-2.png';
import MemberImage3 from '../assets/images/member-3.png';
import EventImage1 from '../assets/images/event-image-1.png';
import EventImage2 from '../assets/images/event-image-2.png';

function AssignedIssue() {

    const [closed, setClosed] = useState('false');

    const toggleComment = () => {
        console.log('this is:', this);
        setClosed(!closed)
    }

    return (
        <>
            <div className='header position-fixed clearfix issues-details-header'>
                <div className='d-flex align-items-center w-100'>
                    <Link to="/issues" className="btn btn-link text-white pl-0"><i className="las la-arrow-left"></i></Link>
                    <h2>Assigned Issue</h2>
                </div>
            </div>
            <div className="page-content w-100 issue-details assigned-issue">
                <div className="slider-area" style={{ backgroundImage: "url(" + SliderImage + ")" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slider-content">
                                    <ul className="list-inline d-flex align-items-center justify-content-between mb-3">
                                        <li className="list-inline-item">
                                            <h6 className="forum-title">Issue Title</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="date">2st Jan 2022</p>
                                        </li>
                                    </ul>
                                    <span className="badge bg-warning mb-2">Pending</span>
                                    <p className="mb-2 truncate truncate-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <p className="director-name mb-3"><span>Forum Director : </span> Vikrant Bhave</p>

                                    <div className='row'>
                                        <div className='col-sm-12'>
                                            <ul className='member-list list-inline member-list d-flex align-items-center mb-2 flex-wrap'>
                                                <li className='list-inline-item'>
                                                    <label className='caption mb-0'>Members : </label>
                                                    <label className='value mb-0'>Total : 15 Members   |   </label>
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
                                                <li className='list-inline-item'>
                                                    <Link to="#" className='value mb-0'>+ 12 Members</Link>
                                                </li>
                                            </ul>
                                            <ul className='member-list list-inline member-list d-flex align-items-center mb-0'>
                                                <li className='list-inline-item'>
                                                    <p className="director-name">Attached Files : <Link to="#"><span>Issue_Discussions.pdf </span></Link></p>
                                                </li>
                                                <li className='list-inline-item ml-auto'>
                                                    <Link to="#" className='btn btn-secondary'><i className="las la-bullhorn"></i> Amplify this Issue</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="regular-content issue-details mb-0">
                    <div className="container">
                        <div className="row d-flex align-items-center mb-3">
                            <div className="col-sm-12 col-12">
                                <h3 className="section-title">List of Activities</h3>
                                <ul className="list-inline quick-tabs mb-2">
                                    <li className="list-inline-item">
                                        <a className="active" href="#">Upcoming</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">Old</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <ul className='activity-list'>
                                    <li>
                                        <span className="count-holder flex-shrink-1">1</span>
                                        <div className='activity-details clearfix'>
                                            <ul className='list-inline top-block mb-3 '>
                                                <li className='list-inline-item'>
                                                    <h4 className='mb-0 activity-title'>Activity Title  |  5th Jan 2022</h4>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                                            <button className='btn btn-link text-blue float-right p-2' onClick={toggleComment}><i className="las la-comments"></i></button>
                                        </div>
                                        <SlideDown className={'pure-menu pure-menu-scrollable'} closed={closed}>
                                            <div className="form-group common">
                                                <label htmlFor='description' className='sr-only'>Give a description to the Issue</label>
                                                <textarea className="form-control" id="description" placeholder='Give a description to the Issue' rows="3"></textarea>
                                            </div>
                                        </SlideDown>
                                    </li>
                                    <li>
                                        <span className="count-holder flex-shrink-1">2</span>
                                        <div className='activity-details clearfix'>
                                            <ul className='list-inline top-block mb-3 '>
                                                <li className='list-inline-item'>
                                                    <h4 className='mb-0 activity-title'>Activity Title  |  5th Jan 2022</h4>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                                            <button className='btn btn-link text-blue float-right p-2' onClick={toggleComment}><i className="las la-comments"></i></button>
                                        </div>
                                        <SlideDown className={'pure-menu pure-menu-scrollable'} closed={closed}>
                                            <div className="form-group common">
                                                <label htmlFor='description' className='sr-only'>Give a description to the Issue</label>
                                                <textarea className="form-control" id="description" placeholder='Give a description to the Issue' rows="3"></textarea>
                                            </div>
                                        </SlideDown>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-sm-12">
                                <button className='btn btn-secondary float-right'>Submit <i className="las la-check ml-2"></i></button>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-sm-12">
                                <h3 className="section-title">Events</h3>
                                <ul className="list-inline quick-tabs mb-3">
                                    <li className="list-inline-item">
                                        <a className="active" href="#">Upcoming</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">Old</a>
                                    </li>
                                </ul>
                                <div className='issue-events-carousel'>
                                    <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} className='event-carousel'>
                                        <div>
                                            <div className='row'>
                                                <div className='col-sm-6'>
                                                    <div className='event-block clearfix'>
                                                        <div className='p-2 text-left'>
                                                            <h2 className='mb-1'>Event Name</h2>
                                                            <p className='time mb-2'>2nd Jan 2022</p>
                                                        </div>
                                                        <figure>
                                                            <img src={EventImage1} alt="EventImage1" />
                                                        </figure>
                                                        <div className='p-2'>
                                                            <p className='event-desc truncate truncate-2 mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                                        </div>
                                                        <button className='btn btn-primary'>View Details</button>
                                                    </div>
                                                </div>
                                                <div className='col-sm-6'>
                                                    <div className='event-block clearfix'>
                                                        <div className='p-2 text-left'>
                                                            <h2 className='mb-1'>Event Name</h2>
                                                            <p className='time mb-2'>15th Jan 2022</p>
                                                        </div>
                                                        <figure>
                                                            <img src={EventImage2} alt="EventImage2" />
                                                        </figure>
                                                        <div className='p-2'>
                                                            <p className='event-desc truncate truncate-2 mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                                        </div>
                                                        <button className='btn btn-primary'>View Details</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Slide 1 */}

                                        <div>
                                            <div className='row'>
                                                <div className='col-sm-6'>
                                                    <div className='event-block clearfix'>
                                                        <div className='p-2 text-left'>
                                                            <h2 className='mb-1'>Clean City</h2>
                                                            <p className='time mb-2'>2nd Jan 2022</p>
                                                        </div>
                                                        <figure>
                                                            <img src={EventImage1} alt="EventImage1" />
                                                        </figure>
                                                        <div className='p-2'>
                                                            <p className='event-desc truncate truncate-2 mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                                        </div>
                                                        <button className='btn btn-primary'>View Details</button>
                                                    </div>
                                                </div>
                                                <div className='col-sm-6'>
                                                    <div className='event-block clearfix'>
                                                        <div className='p-2 text-left'>
                                                            <h2 className='mb-1'>Save Water</h2>
                                                            <p className='time mb-2'>15th Jan 2022</p>
                                                        </div>
                                                        <figure>
                                                            <img src={EventImage2} alt="EventImage2" />
                                                        </figure>
                                                        <div className='p-2'>
                                                            <p className='event-desc truncate truncate-2 mb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                                        </div>
                                                        <button className='btn btn-primary'>View Details</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Slide 2 */}
                                    </Carousel >
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <ul className='list-inline text-center'>
                                    <li className='list-inline-item'>
                                        <button type='button' className='btn btn-secondary'>Accept</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssignedIssue
