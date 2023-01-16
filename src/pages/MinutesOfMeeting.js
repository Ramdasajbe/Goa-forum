import React from 'react'
import { Link } from 'react-router-dom'
import SliderImage from '../assets/images/slide-image.png';

function MinutesOfMeeting() {
    return (
        <>
            <div className='header position-fixed clearfix'>
                <div className='d-flex align-items-center w-100'>
                    <Link to="/type" className="btn btn-link text-white pl-0" id="sidebarToggle"><i className="las la-arrow-left"></i></Link>
                    <h2>Minutes of Meeting</h2>
                </div>
            </div>
            <div className="page-content w-100 minutes-meeting">
                <div className="slider-area" style={{ backgroundImage: "url(" + SliderImage + ")" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slider-content ">
                                    <span className='count-block flex-shrink-1'>4</span>
                                    <div className='w-100'>
                                        <ul className="list-inline top-block mb-3 d-flex align-items-center justify-content-between">
                                            <li className="list-inline-item">
                                                <h4 className="mb-0 activity-title">Activity Title  |  5th Jan 2022</h4>
                                            </li>
                                            <li className="list-inline-item float-right">
                                                <div className="d-flex align-items-center">
                                                    <span className="badge bg-success ">Completed</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <p className="truncate truncate-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="regular-content">
                    <div className="container">
                        <div className="row d-flex align-items-center mb-3">
                            <div className="col-sm-12 col-12">
                                <h3 className="section-title mb-0">List of Activities</h3>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-sm-12 issue-details">
                                <ul className='activity-list'>
                                    <li>
                                        <span className="count-holder flex-shrink-1">1</span>
                                        <div className='activity-details'>
                                            <p className='desc truncate truncate-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="count-holder flex-shrink-1">2</span>
                                        <div className='activity-details'>
                                            <p className='desc truncate truncate-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="count-holder flex-shrink-1">3</span>
                                        <div className='activity-details'>
                                            <p className='desc truncate truncate-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="count-holder flex-shrink-1">4</span>
                                        <div className='activity-details'>
                                            <p className='desc truncate truncate-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                                        </div>
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

export default MinutesOfMeeting
