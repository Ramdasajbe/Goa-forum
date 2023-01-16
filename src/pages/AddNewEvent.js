import React from "react";
import { Link } from "react-router-dom";
// import DateTimeField from "react-bootstrap-datetimepicker";

import ImgPreview from "../assets/images/img-preview.png";

function AddNewEvent() {
  return (
    <>
      <div className="header position-fixed clearfix">
        <div className="d-flex align-items-center w-100">
          <Link to="/Events" className="btn btn-link text-white pl-0">
            <i className="las la-arrow-left"></i>
          </Link>
          <h2>Add New Event</h2>
        </div>
      </div>
      <div className="page-content w-100 issue-details add-new-issues">
        <div className="container">
          <div className="row mb-3">
            <div className="col-12 col-sm-6">
              <div className="form-group common">
                <label className="label-caption" htmlFor="title">
                  Title Issue
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group common mb-4">
                <label className="label-caption" htmlFor="eventVia">
                  Event Via
                </label>
                <select
                  className="custom-select"
                  name="event_via"
                  id="eventVia"
                >
                  <option value="">Event Via</option>
                  <option value="Zoom">Zoom</option>
                  <option value="Google">Google</option>
                  <option value="Meet">Meet</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group common">
                <label className="label-caption" htmlFor="shortDescription">
                  Short Description
                </label>
                <textarea
                  className="form-control"
                  id="shortDescription"
                  placeholder="Type here"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group common">
                <label className="label-caption" htmlFor="FullDescription">
                  Full Description
                </label>
                <textarea
                  className="form-control"
                  id="FullDescription"
                  placeholder="Type here"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group common">
                <label className="label-caption photo-label" htmlFor="file">
                  Add Photo
                </label>
                <div className="box">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="inputfile"
                    data-multiple-caption="{count} files selected"
                    multiple
                  />
                  <label htmlFor="file">
                    <i className="las la-camera"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group common">
                <div className="img-preview mb-2">
                  <img src={ImgPreview} alt="ImgPreview" />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12">
              <div className="form-group common">
                <div className="checkbox custom-size">
                  <input type="checkbox" id="isPublished" name="is_published" />
                  <label className="label-caption" htmlFor="isPublished">
                    Is Published
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group common">
                <label className="label-caption" htmlFor="eventLink">
                  Event Link
                </label>
                <input
                  type="text"
                  id="eventLink"
                  className="form-control"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group common">
                <label className="label-caption" htmlFor="eventDate">
                  Event Date
                </label>
                <input
                  type="text"
                  id="eventDate"
                  className="form-control"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group common">
                <label className="label-caption" htmlFor="eventStartTime">
                  Event Start Time
                </label>
                <input
                  type="text"
                  id="eventStartTime"
                  className="form-control"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group common">
                <label className="label-caption" htmlFor="eventEndTime">
                  Event End Time
                </label>
                <input
                  type="text"
                  id="eventEndTime"
                  className="form-control"
                  placeholder="Type here"
                />
                {/* <DateTimeField /> */}
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group common mb-4">
                <label className="label-caption" htmlFor="eventType">
                  Event Type
                </label>
                <select
                  className="custom-select"
                  name="event_type"
                  id="eventType"
                >
                  <option value="">Event Type</option>
                  <option value="OPEN">OPEN</option>
                  <option value="CITY_RESTRICTED">CITY_RESTRICTED</option>
                  <option value="FORUM_RESTRICTED">FORUM_RESTRICTED</option>
                  <option value="COLLEGE_RESTRICTED">COLLEGE_RESTRICTED</option>
                  <option value="CLOSED">CLOSED</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group common mb-4">
                <label className="label-caption" htmlFor="state">
                  State
                </label>
                <select
                  className="custom-select with-icon"
                  name="state"
                  id="state"
                >
                  <option value="">Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Rajasthan">Rajasthan</option>
                </select>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="form-group common mb-4">
                <label className="label-caption" htmlFor="city">
                  City
                </label>
                <select
                  className="custom-select with-icon"
                  name="city"
                  id="city"
                >
                  <option value="">Select City</option>
                  <option value="Pune">Pune</option>
                  <option value="Kolhapur">Kolhapur</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12">
              <ul className="list-inline text-center mb-0">
                <li className="list-inline-item">
                  <button type="button" className="btn btn-secondary">
                    Add
                  </button>
                </li>
                <li className="list-inline-item">
                  <button type="button" className="btn btn-secondary">
                    Cancel
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewEvent;
