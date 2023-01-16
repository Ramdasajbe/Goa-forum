import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';

import SliderImage from '../assets/images/issue-details-image.png';

function Updates() {
    return (
        <>
            <div className='header position-fixed clearfix issues-details-header'>
                <div className='d-flex align-items-center w-100'>
                    <Link to="#" className="btn btn-link text-white pl-0"><i className="las la-arrow-left"></i></Link>
                    <h2>Updates</h2>
                    <button type="button" className="btn btn-outline-light ml-auto">Check Updates</button>
                </div>
            </div>
            <div className="page-content w-100 issue-details updates-page">
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
                                    <div className='d-flex align-items-center'>
                                        <span className='badge bg-warning'>Pending</span>
                                        <div className='filter-dropdown'>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-blue p-0" role="menuitemradio">
                                                    <i className="las la-ellipsis-v"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <ul className='mb-0'>
                                                        <li>
                                                            <div className="radio">
                                                                <input type="radio" id="markAsCompleted" name="activityAction" />
                                                                <label for="markAsCompleted">Mark as Completed</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="radio">
                                                                <input type="radio" id="MarkAsAbandoned" name="activityAction" />
                                                                <label for="MarkAsAbandoned">Mark as Abandoned</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="radio">
                                                                <input type="radio" id="askForHelp" name="activityAction" />
                                                                <label for="askForHelp">Ask for Help</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="regular-content">
                    <div className="container">
                        <div className="row d-flex align-items-center mb-3">
                            <div className="col-sm-10">
                                <h3 className="section-title mb-0">List of Activities</h3>
                            </div>
                            <div className="col-sm-2">
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
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-sm-12">
                                <ul className='activity-list'>
                                    {/* Activity Start */}
                                    <li>
                                        <span className="count-holder flex-shrink-1">4</span>
                                        <div className='activity-details'>
                                            <ul className='list-inline top-block mb-3 '>
                                                <li className='list-inline-item'>
                                                    <h4 className='mb-0 activity-title'>Activity Title  |  5th Jan 2022</h4>
                                                </li>
                                                <li className='list-inline-item float-right'>
                                                    <div className='d-flex align-items-center'>
                                                        <span className='badge bg-success '>Completed</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                                            <p className='owners'><span>Activity Owners : </span>Manisha Deshpande, Amruta Walimbe, Ashutosh Kulkarni</p>
                                        </div>
                                    </li>
                                    {/* Activity End */}
                                    {/* Activity Start */}
                                    <li>
                                        <span className="count-holder flex-shrink-1">3</span>
                                        <div className='activity-details'>
                                            <ul className='list-inline top-block mb-3 '>
                                                <li className='list-inline-item'>
                                                    <h4 className='mb-0 activity-title'>Activity Title  |  4th Jan 2022</h4>
                                                </li>
                                                <li className='list-inline-item float-right'>
                                                    <div className='d-flex align-items-center'>
                                                        <span className='badge bg-success '>Completed</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                                            <p className='owners'><span>Activity Owners : </span>Vivek Sharma, Priyanka Jadhav</p>
                                        </div>
                                    </li>
                                    {/* Activity End */}
                                    {/* Activity Start */}
                                    <li>
                                        <span className="count-holder flex-shrink-1">2</span>
                                        <div className='activity-details'>
                                            <ul className='list-inline top-block mb-3 '>
                                                <li className='list-inline-item'>
                                                    <h4 className='mb-0 activity-title'>Activity Title  |  3th Jan 2022</h4>
                                                </li>
                                                <li className='list-inline-item float-right'>
                                                    <div className='d-flex align-items-center'>
                                                        <span className='badge bg-success '>Completed</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. </p>
                                            <p className='owners'><span>Activity Owners : </span>Manisha Deshpande, Amruta Walimbe, Ashutosh Kulkarni</p>
                                        </div>
                                    </li>
                                    {/* Activity End */}
                                    {/* Activity Start */}
                                    <li>
                                        <span className="count-holder flex-shrink-1">1</span>
                                        <div className='activity-details'>
                                            <ul className='list-inline top-block mb-3 '>
                                                <li className='list-inline-item'>
                                                    <h4 className='mb-0 activity-title'>Activity Title</h4>
                                                </li>
                                                <li className='list-inline-item float-right'>
                                                    <div className='d-flex align-items-center'>
                                                        <span className='badge bg-success '>Completed</span>
                                                    </div>
                                                </li>
                                            </ul>
                                            <p className='owners'><span>Activity Owners : </span>Manisha Deshpande, Amruta Walimbe, Ashutosh Kulkarni</p>
                                        </div>
                                    </li>
                                    {/* Activity End */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Updates
