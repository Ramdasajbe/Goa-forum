import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Scrollbar from "react-scrollbars-custom";
import { Modal } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import dateFormat from "dateformat";
import FloatingFooter from "../components/FloatingFooter";
import EventImage1 from "../assets/images/event-image-1.png";
import EventImage2 from "../assets/images/event-image-2.png";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

function Events() {
  const ref = useRef();
  const [headerHeight, setHeaderHeight] = useState(null);
  const [eventList, setAllEventData] = useState([]);
  const [isEventList, setIsEventData] = useState(false);
  const [title, setTitle] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [entityId, setEntityId] = useState();
  const [entityLink, setEntityLink] = useState();
  const [entityStatus, setEntityStatus] = useState("PENDING");
  const [eventDescription, setEventDescription] = useState();
  const [eventImage, setEventImage] = useState();
  const [height, width] = useWindowSize();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (eventDetails) => {
    setShow(true);
    setTitle(eventDetails.event_title);
    setStartDate(eventDetails.event_date);
    setEndDate(eventDetails.event_date);
    setStartTime(eventDetails.event_start_time);
    setEndTime(eventDetails.event_end_time);
    setEntityId(eventDetails.event_id);
    setEntityLink(eventDetails.event_link);
    setEventDescription(eventDetails.event_description);
    setEventImage(eventDetails.event_images);
    setEntityStatus("PENDING");
  };

  let scrollHeight = height - (155 + 75);
  console.log(
    "🚀 ~ file: Issues.js ~ line 31 ~ Issues ~ scrollHeight",
    scrollHeight
  );
  const [sidebar, setSidbar] = useState(false);

  useEffect(() => {
    axios
      .get("https://yin-talk-api.foxberry.link/v1/event/all/eventhead/web")
      .then((response) => {
        console.log(
          "-------------------EVENT DATA ---- : ",
          response.data.data
        );
        if (response.data.data) {
          setAllEventData(response.data.data);
          setIsEventData(true);
        }
      })
      .catch((error) => {
        console.log("url response in error-----", error);
      });
  }, []);

  useEffect(() => {
    let headerHeight = ref.current.clientHeight;
    setHeaderHeight(headerHeight);
  }, []);

  //Sidbar Function
  const toggleSidebar = () => {
    setSidbar(!sidebar);
    if (sidebar) {
      document.body.className = "";
    } else {
      document.body.className = "sb-sidenav-toggled";
    }
  };
  let options = [
    "Forum 1",
    "Forum 2",
    "Forum 3",
    "Forum 4",
    "Forum 5",
    "Forum 6",
  ];
  const [singleSelections, setSingleSelections] = useState([]);

  const addedToCalender = () => {
    let data = {
      yin_id: localStorage.getItem("yin_id"),
      title: title,
      start_date: startDate,
      end_date: endDate,
      start_time: startTime,
      end_time: endTime,
      entity_id: entityId,
      entity_link: entityLink,
      entity_status: entityStatus,
    };
    axios
      .post(process.env.REACT_APP_TALK_API + "/calender/create", data)
      .then((response) => {
        console.log(
          "-------------------DATA ADDED IN CALENDER ---- : ",
          response
        );
        handleClose();
      })
      .catch((error) => {
        console.log("url response in error-----", error);
      });
  };
  return (
    <>
      <div
        className="header position-absolute clearfix issues-header events"
        ref={ref}
      >
        {/* <div className='mb-3 d-flex align-items-center w-100'>
                    <button className="btn btn-link text-white pl-0" id="sidebarToggle" onClick={toggleSidebar}><i className="fa fa-bars" aria-hidden="true"></i></button>
                    <h2>Events</h2>
                    <Link to="/add-new-event" className="btn btn-outline-light ml-auto">Add New Event <i className="fa fa-plus" aria-hidden="true"></i></Link>
                </div> */}
        {/* <div className="input-group mb-2 search">
                    <input type="text" className="form-control" placeholder="Search by categories of Issues" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                </div> */}
        <button
          className="btn btn-link text-white pl-0"
          id="sidebarToggle"
          onClick={toggleSidebar}
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>

      <div className="issue-card-holder live-issues events">
        <Scrollbar style={{ height: scrollHeight }}>
          <div className="container">
            <div className="row mb-3">
              <div className="col-sm-12">
                <div className="form-group mb-2 search mx-2">
                  <Typeahead
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={setSingleSelections}
                    options={options}
                    placeholder="Find the Forums which you really like to participate"
                    selected={singleSelections}
                  />
                </div>
              </div>
            </div>

            <div className="row events-container">
              {isEventList ? (
                eventList.map((event, index) => {
                  return (
                    <div className="col-sm-6" key={index}>
                      <div className="event-block clearfix">
                        <div className="p-2 text-left">
                          <h2 className="mb-1">{event.event_title}</h2>
                          <p className="time mb-2">
                            {dateFormat(event.event_date, "dS mmm yyyy")} |{" "}
                            {event.event_start_time} to {event.event_end_time}
                          </p>
                          <button
                            type="button"
                            className="btn btn-link btn-calender text-blue"
                            onClick={() => handleShow(event)}
                          >
                            <i className="las la-calendar"></i>
                          </button>
                        </div>
                        <figure>
                          <img
                            src={
                              event.event_images
                                ? event.event_images
                                : EventImage1
                            }
                            alt="EventImage1"
                          />
                        </figure>
                        <div className="p-2">
                          <p className="event-desc truncate truncate-2 mb-1">
                            {event.event_description}
                          </p>
                        </div>
                        <Link
                          to={"/event-details/" + event.event_id}
                          className="btn btn-primary float-right"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h2 className="mx-auto mt-5">No Data Found</h2>
              )}
            </div>
          </div>
        </Scrollbar>
      </div>

      {/* <FloatingFooter /> */}

      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        backdrop="static"
        centered
      >
        <Modal.Header className="text-center">
          <Modal.Title>Add Event to Calendar ?</Modal.Title>
          <button
            type="button"
            className="close"
            aria-hidden="true"
            onClick={handleClose}
          >
            <i className="las la-times"></i>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="col-sm-8 offset-sm-2 events-container">
            <div className="event-block clearfix mb-0">
              <div className="p-2 text-left">
                <h2 className="mb-1">{title}</h2>
                <p className="time mb-2">
                  {dateFormat(startDate, "dS mmm yyyy")} | {startTime} to{" "}
                  {endTime}
                </p>
              </div>
              <figure>
                <img
                  src={eventImage ? eventImage : EventImage2}
                  alt="EventImage2"
                />
              </figure>
              <div className="p-2">
                <p className="event-desc mb-1">{eventDescription}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ul className="list-inline text-center w-100">
            <li className="list-inline-item">
              <button className="btn btn-secondary" onClick={addedToCalender}>
                Yes
              </button>
            </li>
            <li className="list-inline-item">
              <button className="btn btn-secondary" onClick={handleClose}>
                No
              </button>
            </li>
          </ul>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Events;
