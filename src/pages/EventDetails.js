import React, { useState,useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import { Modal } from 'react-bootstrap';
import dateFormat from 'dateformat';
import SliderImage from '../assets/images/issue-details-image.png';
// import EventImage1 from '../assets/images/event-image-1.png';
import EventImage2 from '../assets/images/event-image-2.png';
import axios from 'axios';

function EventDetails(props) {
    const [show, setShow] = useState(false);
    const [eventDetails, setEventDetails]= useState();
    const [isEventDetails, setIsEventDetails] = useState(false);
    const handleClose = () => setShow(false);
    const params = useParams();
    const [imageSlider, setImageSlider] = useState(SliderImage);

    const handleShow = () =>{
        setShow(true)
    };

    useEffect(() => {
        axios.get(process.env.REACT_APP_TALK_API+'/event/list/event_id/'+params.event_id)
            .then(response => {
                console.log("-------------------EVENT DATA ---- : ", response);
                setEventDetails(response.data);
                setIsEventDetails(true);
                setImageSlider(response.data[0].event_images);
            }).catch(error => {
                console.log("url response in error-----", error);
            });
    },[]);

    const addedToCalender=()=>{

        let data={
            yin_id:localStorage.getItem("yin_id"),
            title:eventDetails[0].event_title,
            start_date:eventDetails[0].event_date,
            end_date:eventDetails[0].event_date,
            start_time:eventDetails[0].event_start_time,
            end_time:eventDetails[0].event_end_time,
            entity_id:eventDetails[0].event_id,
            entity_link:eventDetails[0].event_link,
            entity_status:"PENDING"
        }
        axios.post(process.env.REACT_APP_TALK_API+'/calender/create',data)
        .then(response => {
            console.log("-------------------DATA ADDED IN CALENDER ---- : ", response);
            handleClose();
        }).catch(error => {
            console.log("url response in error-----", error);
        });
    }
    return (
        <>
            <div className='header position-fixed clearfix issues-details-header'>
                <div className='d-flex align-items-center w-100'>
                    <Link to="/events" className="btn btn-link text-white pl-0"><i className="las la-arrow-left"></i></Link>
                    <h2>Event Details</h2>
                </div>
            </div>
            <div className="page-content w-100 issue-details updates-page">
                <div className="slider-area" style={{ backgroundImage: "url(" + imageSlider + ")" ,backgroundRepeat: "no-repeat",backgroundSize: "100% 100%" }}>
                    <div className="container">
                        {isEventDetails?
                        <div className="row">
                            <div className="col-md-12">
                                <div className="slider-content">
                                    <ul className="list-inline d-flex align-items-center justify-content-between mb-3">
                                        <li className="list-inline-item">
                                            <h6 className="forum-title">{eventDetails[0].event_title}</h6>
                                        </li>
                                        <li className="list-inline-item">
                                            <p className="date text-blue">{dateFormat(eventDetails[0].event_created_date, "dS mmm")} to {dateFormat(eventDetails[0].event_created_date, "dS mmm yyyy")}</p>
                                        </li>
                                    </ul>
                                    <p className="desc mb-2 truncate truncate-6">{eventDetails[0].event_description}</p>
                                </div>
                            </div>
                        </div>
                        :<div className="row">
                            <div className="col-md-12">
                                <div className="slider-content">
                                    <ul className="list-inline d-flex align-items-center justify-content-between mb-3">
                                        <li className="list-inline-item">
                                            <h6 className="forum-title">No event details found</h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>

                {isEventDetails?<div className="regular-content">
                    <div className="container">
                        <div className="row d-flex align-items-center mb-3">
                            <div className="col-sm-12">
                                <h3 className="section-title mb-0">Details</h3>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-sm-12">
                                
                                {eventDetails[0].event_full_description?<p className='desc mb-2'>
                                <div dangerouslySetInnerHTML={{ __html: eventDetails[0].event_full_description}} ></div></p>:""}
                                <ul className='list-inline text-center w-100 mt-4 mb-0'>
                                    <li className='list-inline-item'>
                                        <button className='btn btn-secondary' onClick={handleShow}>Save  to Calender</button>
                                    </li>
                                    <li className='list-inline-item'>
                                        <button className='btn btn-secondary'>Register</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>:""}
            </div>

            {isEventDetails?<Modal show={show} onHide={handleClose} animation={false} backdrop="static" centered >
                <Modal.Header className='text-center'>
                    <Modal.Title >Add Event to Calendar ?</Modal.Title>
                    <button type="button" className="close" aria-hidden="true" onClick={handleClose}><i className="las la-times"></i></button>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-sm-8 offset-sm-2 events-container">
                        <div className='event-block clearfix mb-0'>
                            <div className='p-2 text-left'>
                                <h2 className='mb-1'>{eventDetails[0].event_title}</h2>
                                <p className='time mb-2'>{dateFormat(eventDetails[0].event_created_date, "dS mmm yyyy")}  |  {eventDetails[0].event_start_time} to  {eventDetails[0].event_end_time}</p>
                            </div>
                            <figure>
                                <img src={eventDetails[0].event_images?eventDetails[0].event_images:EventImage2} alt="EventImage2" />
                            </figure>
                            <div className='p-2'>
                                <p className='event-desc mb-1'>{eventDetails[0].event_description} </p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <ul className='list-inline text-center w-100'>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={addedToCalender}>Yes</button>
                        </li>
                        <li className='list-inline-item'>
                            <button className='btn btn-secondary' onClick={handleClose}>No</button>
                        </li>
                    </ul>
                </Modal.Footer>
            </Modal>:""}
        </>
    )
}

export default EventDetails
