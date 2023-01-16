import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap'
import Scrollbar from 'react-scrollbars-custom';
import SliderImage from '../assets/images/slide-image.png';

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

function Meetings() {
    const [sidebar, setSidbar] = useState(false);
    const toggleSidebar = () => {
        setSidbar(!sidebar)
        if (sidebar) {
            document.body.className = '';
        } else {
            document.body.className = 'sb-sidenav-toggled';
        }
    }

    const [scheduleMeetingModal, setScheduleMeeting] = useState(false);
    const handleCloseScheduleMeeting = () => setScheduleMeeting(false);
    const handleShowScheduleMeeting = () => setScheduleMeeting(true);

    const [scheduleMeetingHistoryModal, setMeetingHistory] = useState(false);
    const handleCloseScheduleMeetingHistory = () => setMeetingHistory(false);
    const handleShowScheduleMeetingHistory = () => setMeetingHistory(true);

    const [height] = useWindowSize();
    const scrollHeight = height - 220;

    return <>
        <div className='header position-fixed clearfix' >
            <div className='d-flex align-items-center w-100'>
                <button className="btn btn-link text-white pl-0" id="sidebarToggle" onClick={toggleSidebar}>
                    <i className="fa fa-bars" aria-hidden="true"></i></button>
                <h2>Meetings</h2>
                <ul className='list-inline d-flex align-items-center mb-0 ml-auto'>
                    <li className='list-inline-item'>
                        <button type='button' className="btn btn-outline-light" onClick={handleShowScheduleMeeting}>Schedule Meetings <i className="fa fa-plus" aria-hidden="true"></i></button>
                    </li>
                    <li className='list-inline-item'>
                        <button type="button" className=" text-white btn btn-link p-1" onClick={handleShowScheduleMeetingHistory}>
                            <i className="las la-calendar"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>

        <div className="page-content w-100 minutes-meeting">
            <div className="slider-area" style={{ backgroundImage: "url(" + SliderImage + ")" }}>

            </div>
            <div className="regular-content meetings">
                <Scrollbar style={{ height: scrollHeight }}>
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-sm-12">
                                <ul className='meetings-list mb-0'>
                                    <li className='d-flex flex-row'>
                                        <span className="count-holder flex-shrink-1 mr-3 mt-2 ml-2">1</span>
                                        <div className='activity-details clearfix w-100'>
                                            <ul className="list-inline top-block mb-2">
                                                <li className="list-inline-item"><h4 className="mb-0 activity-title">Meeting Title</h4></li>
                                                <li className="list-inline-item float-right">
                                                    <p className="date">5th Jan 2022  |  10.30 am</p>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-3'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum.</p>
                                            <button className='btn btn-primary float-right'>View Details <i className="las la-eye ml-2"></i></button>
                                        </div>
                                    </li>
                                    <li className='d-flex flex-row'>
                                        <span className="count-holder flex-shrink-1 mr-3 mt-2 ml-2">1</span>
                                        <div className='activity-details clearfix w-100'>
                                            <ul className="list-inline top-block mb-2">
                                                <li className="list-inline-item"><h4 className="mb-0 activity-title">Meeting Title</h4></li>
                                                <li className="list-inline-item float-right">
                                                    <p className="date">5th Jan 2022  |  10.30 am</p>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-3'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum.</p>
                                            <button className='btn btn-primary float-right'>View Details <i className="las la-eye ml-2"></i></button>
                                        </div>
                                    </li>
                                    <li className='d-flex flex-row'>
                                        <span className="count-holder flex-shrink-1 mr-3 mt-2 ml-2">1</span>
                                        <div className='activity-details clearfix w-100'>
                                            <ul className="list-inline top-block mb-2">
                                                <li className="list-inline-item"><h4 className="mb-0 activity-title">Meeting Title</h4></li>
                                                <li className="list-inline-item float-right">
                                                    <p className="date">5th Jan 2022  |  10.30 am</p>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-3'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum.</p>
                                            <button className='btn btn-primary float-right'>View Details <i className="las la-eye ml-2"></i></button>
                                        </div>
                                    </li>
                                    <li className='d-flex flex-row'>
                                        <span className="count-holder flex-shrink-1 mr-3 mt-2 ml-2">1</span>
                                        <div className='activity-details clearfix w-100'>
                                            <ul className="list-inline top-block mb-2">
                                                <li className="list-inline-item"><h4 className="mb-0 activity-title">Meeting Title</h4></li>
                                                <li className="list-inline-item float-right">
                                                    <p className="date">5th Jan 2022  |  10.30 am</p>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-3'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum.</p>
                                            <button className='btn btn-primary float-right'>View Details <i className="las la-eye ml-2"></i></button>
                                        </div>
                                    </li>
                                    <li className='d-flex flex-row'>
                                        <span className="count-holder flex-shrink-1 mr-3 mt-2 ml-2">1</span>
                                        <div className='activity-details clearfix w-100'>
                                            <ul className="list-inline top-block mb-2">
                                                <li className="list-inline-item"><h4 className="mb-0 activity-title">Meeting Title</h4></li>
                                                <li className="list-inline-item float-right">
                                                    <p className="date">5th Jan 2022  |  10.30 am</p>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-3'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum.</p>
                                            <button className='btn btn-primary float-right'>View Details <i className="las la-eye ml-2"></i></button>
                                        </div>
                                    </li>
                                    <li className='d-flex flex-row'>
                                        <span className="count-holder flex-shrink-1 mr-3 mt-2 ml-2">1</span>
                                        <div className='activity-details clearfix w-100'>
                                            <ul className="list-inline top-block mb-2">
                                                <li className="list-inline-item"><h4 className="mb-0 activity-title">Meeting Title</h4></li>
                                                <li className="list-inline-item float-right">
                                                    <p className="date">5th Jan 2022  |  10.30 am</p>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-3'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum.</p>
                                            <button className='btn btn-primary float-right'>View Details <i className="las la-eye ml-2"></i></button>
                                        </div>
                                    </li>
                                    <li className='d-flex flex-row'>
                                        <span className="count-holder flex-shrink-1 mr-3 mt-2 ml-2">1</span>
                                        <div className='activity-details clearfix w-100'>
                                            <ul className="list-inline top-block mb-2">
                                                <li className="list-inline-item"><h4 className="mb-0 activity-title">Meeting Title</h4></li>
                                                <li className="list-inline-item float-right">
                                                    <p className="date">5th Jan 2022  |  10.30 am</p>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-3'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum.</p>
                                            <button className='btn btn-primary float-right'>View Details <i className="las la-eye ml-2"></i></button>
                                        </div>
                                    </li>
                                    <li className='d-flex flex-row'>
                                        <span className="count-holder flex-shrink-1 mr-3 mt-2 ml-2">1</span>
                                        <div className='activity-details clearfix w-100'>
                                            <ul className="list-inline top-block mb-2">
                                                <li className="list-inline-item"><h4 className="mb-0 activity-title">Meeting Title</h4></li>
                                                <li className="list-inline-item float-right">
                                                    <p className="date">5th Jan 2022  |  10.30 am</p>
                                                </li>
                                            </ul>
                                            <p className='desc truncate truncate-2 mb-3'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus Page Maker including versions of Lorem Ipsum.</p>
                                            <button className='btn btn-primary float-right'>View Details <i className="las la-eye ml-2"></i></button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Scrollbar>
            </div>
        </div>

        <Modal show={scheduleMeetingModal} onHide={handleCloseScheduleMeeting} animation={true} backdrop="static" centered >
            <Modal.Header className='text-center'>
                <Modal.Title >Schedule Meeting</Modal.Title>
                <button type="button" className="close" aria-hidden="true" onClick={handleCloseScheduleMeeting}><i className="las la-times"></i></button>
            </Modal.Header>
            <Modal.Body>
                <div className="col-sm-12">
                    <form>
                        <div className="form-group common mb-4">
                            <input type="text" className="form-control" placeholder="Meeting Title" />
                        </div>
                        <div className="form-group common mb-4">
                            <textarea className='form-control' placeholder='Write Description'></textarea>
                        </div>
                        <div className="form-group common mb-4">
                            <select className="custom-select with-icon" name="state">
                                <option value="">Add Member</option>
                                <option value="Member 1">Member 1</option>
                                <option value="Member 2">Member 2</option>
                                <option value="Member 3">Member 3</option>
                            </select>
                        </div>
                        <div className="input-group common mb-4">
                            <input type="text" className="form-control border-right-0" placeholder="Select Date" />
                            <div className="input-group-append">
                                <span className="input-group-text text-blue-gradient" id="basic-addon2"><i className="las la-calendar"></i></span>
                            </div>
                        </div>
                        <div className="input-group common mb-4">
                            <input type="text" className="form-control border-right-0" placeholder="Select Time" />
                            <div className="input-group-append">
                                <span className="input-group-text text-blue-gradient" id="basic-addon2"><i className="las la-clock"></i></span>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <ul className='list-inline text-center w-100'>
                    <li className='list-inline-item'>
                        <button className='btn btn-secondary' onClick={handleCloseScheduleMeeting}>Schedule</button>
                    </li>
                    <li className='list-inline-item'>
                        <button className='btn btn-secondary' onClick={handleCloseScheduleMeeting}>Cancel</button>
                    </li>
                </ul>
            </Modal.Footer>
        </Modal>

        <Modal show={scheduleMeetingHistoryModal} onHide={handleCloseScheduleMeetingHistory} animation={true} backdrop="static" centered >
            <Modal.Header className='text-center'>
                <Modal.Title >Meeting History</Modal.Title>
                <button type="button" className="close" aria-hidden="true" onClick={handleCloseScheduleMeetingHistory}><i className="las la-times"></i></button>
            </Modal.Header>
            <Modal.Body>
                <div className="col-sm-12">
                    <form>
                        <div className="input-group common mb-4">
                            <input type="text" className="form-control border-right-0" placeholder="Select From Date" />
                            <div className="input-group-append">
                                <span className="input-group-text text-blue-gradient" id="basic-addon2"><i className="las la-calendar"></i></span>
                            </div>
                        </div>
                        <div className="input-group common mb-4">
                            <input type="text" className="form-control border-right-0" placeholder="Select To Time" />
                            <div className="input-group-append">
                                <span className="input-group-text text-blue-gradient" id="basic-addon2"><i className="las la-calendar"></i></span>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <ul className='list-inline text-center w-100'>
                    <li className='list-inline-item'>
                        <button className='btn btn-secondary' onClick={handleCloseScheduleMeetingHistory}>Search</button>
                    </li>
                    <li className='list-inline-item'>
                        <button className='btn btn-secondary' onClick={handleCloseScheduleMeetingHistory}>Cancel</button>
                    </li>
                </ul>
            </Modal.Footer>
        </Modal>
    </>;
}

export default Meetings;
