import React from 'react';
import { Link } from 'react-router-dom'

import SliderImage from '../assets/images/issue-details-image.png';

function ActivityDetails() {
    return <>
        <div className='header position-fixed clearfix issues-details-header'>
            <div className='d-flex align-items-center w-100'>
                <Link to="/issues-details" className="btn btn-link text-white pl-0"><i className="las la-arrow-left"></i></Link>
                <h2>Activity Details</h2>
            </div>
        </div>
        <div className="page-content w-100 issue-details activity-details">
            <div className="slider-area" style={{ backgroundImage: "url(" + SliderImage + ")" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="slider-content">
                                <ul className="list-inline d-flex align-items-center justify-content-between mb-3">
                                    <li className="list-inline-item">
                                        <h6 className="forum-title">Air Pollution</h6>
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="date">1st Jan to 10th Jan 2022</p>
                                    </li>
                                </ul>
                                <p className="mb-3 truncate truncate-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="regular-content">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-sm-12">
                            <ul className='activity-list'>
                                <li>
                                    <span className="count-holder flex-shrink-1">1</span>
                                    <div className='activity-details'>
                                        <ul className='list-inline top-block justify-content-start mb-3 '>
                                            <li className='list-inline-item'>
                                                <h4 className='mb-0 activity-title'>Activity Title  |  5th Jan 2022</h4>
                                            </li>
                                        </ul>
                                        <p className='desc truncate truncate-2 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                                        <p className='owners'><span>Activity Owners : </span>Manisha Deshpande, Amruta Walimbe, Ashutosh Kulkarni</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <h3 class="section-title mt-4">Comments</h3>
                            <div className='comments'>
                                <ul className='activity-list'>
                                    <li>
                                        <span className="count-holder flex-shrink-1">1</span>
                                        <div className='activity-details clearfix'>
                                            <ul className='list-inline top-block justify-content-start mb-3 '>
                                                <li className='list-inline-item'>
                                                    <h4 className='mb-0 activity-title'>Forum Director</h4>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                                            <p className='owners mb-2'><span>Activity Owners : </span>Manisha Deshpande, Amruta Walimbe, Ashutosh Kulkarni</p>
                                            <p className='date float-right'>4th Feb 2022 | 4.51pm</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="count-holder flex-shrink-1">1</span>
                                        <div className='activity-details clearfix'>
                                            <ul className='list-inline top-block justify-content-start mb-3 '>
                                                <li className='list-inline-item'>
                                                    <h4 className='mb-0 activity-title'>Forum Director</h4>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                                            <p className='owners mb-2'><span>Activity Owners : </span>Manisha Deshpande, Amruta Walimbe, Ashutosh Kulkarni</p>
                                            <p className='date float-right'>4th Feb 2022 | 4.51pm</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default ActivityDetails;
