import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Scrollbar from "react-scrollbars-custom";
import LiveIssues from "../components/LiveIssues";
import MeetingUpdates from "../components/MeetingUpdates";
import Events from "../components/Events";
import dateFormat from "dateformat";
import SliderImage from "../assets/images/slide-image.png";
import MemberImage1 from "../assets/images/member-1.png";
// import MemberImage2 from '../assets/images/member-2.png';
// import MemberImage3 from '../assets/images/member-3.png';
// import MemberImage4 from '../assets/images/member-4.png';

export default class DashboardForum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forumData: [],
      isForumData: false,
      forumMember: [],
      isForumMember: false,
      activityData: [],
      isActivityData: false,
      issueData: [],
      isIssueData: false,
      meetingData: [],
      isMeetingData: false,
      eventData: [],
      isEventData: false,
      loader: true,
      error: "",
    };
    this.getForumData = this.getForumData.bind(this);
    this.getEventData = this.getEventData.bind(this);
    this.getIssueData = this.getIssueData.bind(this);
    this.getMeetingData = this.getMeetingData.bind(this);
    this.getActivityData = this.getActivityData.bind(this);
    this.getMemberData = this.getMemberData.bind(this);
  }

  UNSAFE_componentWillMount() {
    let forumId = localStorage.getItem("forum_id")
      ? localStorage.getItem("forum_id")
      : "FORUM_COL0001234_BOYS";
    this.getForumData(forumId);
  }

  async getForumData(forumId) {
    let currentComponent = this;
    await axios
      .get(process.env.REACT_APP_TALK_API + "/forum/get/forum/info/" + forumId)
      .then((response) => {
        console.log("----------------- FORUM DATA ------------ : ", response);
        console.log(
          "----------------- FORUM DATA FORUM ID------------ : ",
          response.data[0].forum_id
        );
        console.log(
          "----------------- FORUM DATA FORUM ID------------ : ",
          response.data[0].forum_member_details
        );
        if (response.data.error) {
          currentComponent.setState({
            isForumData: false,
            loader: false,
          });
        } else {
          currentComponent.setState({
            forumData: response.data[0],
            isForumData: true,
            loader: false,
          });
        }

        if (this.state.isForumData) {
          this.getMemberData(response.data[0].forum_id);
          this.getEventData(response.data[0].forum_id);
          this.getIssueData(response.data[0].forum_id);
          this.getMeetingData(response.data[0].forum_id);
          this.getActivityData(response.data[0].forum_id);
        }
      })
      .catch((error) => {
        console.log("url response in error-----", error);
      });
  }

  async getMemberData(forumId) {
    let currentComponent = this;
    await axios
      .get(
        process.env.REACT_APP_TALK_API +
          "/forum/get/forum/member-details/" +
          forumId
      )
      .then((response) => {
        console.log("-------------------MEMBER  DATA ---- : ", response);
        currentComponent.setState({
          forumMember: response.data,
          loader: false,
        });
      })
      .catch((error) => {
        console.log("url response in error-----", error);
      });
  }
  //GET EVENT DATA
  async getEventData(forumId) {
    let currentComponent = this;
    await axios
      .get(process.env.REACT_APP_TALK_API + "/event/list/forum/" + forumId)
      .then((response) => {
        console.log("-------------------EVENT DATA ---- : ", response);
        if (response.data.error) {
          currentComponent.setState({
            isEventData: false,
            loader: false,
          });
        } else {
          currentComponent.setState({
            eventData: response.data,
            isEventData: true,
            loader: false,
          });
        }
      })
      .catch((error) => {
        console.log("url response in error-----", error);
      });
  }
  //GET ISSUE DATA
  async getIssueData(forumId) {
    let currentComponent = this;
    await axios
      .get(process.env.REACT_APP_TALK_API + "/issue/list/forum/" + forumId)
      .then((response) => {
        console.log("--------------ISSUE DATA ---------- : ", response);
        if (response.data.error) {
          currentComponent.setState({
            isIssueData: false,
            loader: false,
          });
        } else {
          currentComponent.setState({
            issueData: response.data,
            isIssueData: true,
            loader: false,
          });
        }
      })
      .catch((error) => {
        console.log("url response in error-----", error);
      });
  }
  //GET Meeting DATA
  async getMeetingData(forumId) {
    let currentComponent = this;
    await axios
      .get(
        process.env.REACT_APP_TALK_API +
          "/meeting/list/meeting/forum/" +
          forumId
      )
      .then((response) => {
        console.log("----------MEETING API  ------------ : ", response.data);
        console.log(
          "----------MEETING API  ------------ : ",
          response.data.error
        );
        if (response.data.error) {
          currentComponent.setState({
            isMeetingData: false,
            loader: false,
          });
        } else {
          currentComponent.setState({
            meetingData: response.data,
            isMeetingData: true,
            loader: false,
          });
        }
      })
      .catch((error) => {
        console.log("url response in error-----", error);
      });
  }
  //GET ACTIVITY DATA
  async getActivityData(forumId) {
    let currentComponent = this;
    await axios
      .get(
        process.env.REACT_APP_TALK_API +
          "/activity/list/activity/forum/" +
          forumId
      )
      .then((response) => {
        console.log(
          "-------------------GET ACTIVITY DETAILS------------ : ",
          response
        );
        if (response.data.error) {
          currentComponent.setState({
            isActivityData: false,
            loader: false,
          });
        } else {
          currentComponent.setState({
            activityData: response.data,
            isActivityData: true,
            loader: false,
          });
        }
      })
      .catch((error) => {
        console.log("url response in error-----", error);
      });
  }

  render() {
    const MemberCount = this.state.forumMember.length;
    const ForumMember = this.state.forumMember.map((member, index) => (
      <div className="member-block d-flex" key={index}>
        <figure className="flex-shrink-1">
          <img
            src={member.profile_image ? member.profile_image : MemberImage1}
            alt="MemberImage1"
          />
        </figure>
        <div className="w-100">
          <h3 className="member-name">
            {member.first_name} {member.last_name}
          </h3>
          <label>
            <span>College Name : </span> {member.college_name}
          </label>
          <label>
            <span>Designation : </span>
            {member.designation}
          </label>
        </div>
      </div>
    ));

    const ActivityOfForum = this.state.activityData.map((activities, index) => (
      <div className="meeting-header d-flex" key={index}>
        <span className="count-holder flex-shrink-1">{index + 1}</span>
        <div className="meeting-heading w-100">
          <p className="date">
            {dateFormat(activities.activity_created_date, "dS mmmm yyyy")}
          </p>
          <p className="desc truncate truncate-3 ">
            {activities.activity_title}
          </p>
        </div>
      </div>
    ));

    return (
      <>
        {/* <div className="full-page"> */}
        <div className="header position-fixed clearfix">
          <div className="d-flex align-items-center w-100">
            <Link
              to="/type"
              className="btn btn-link text-white pl-0"
              id="sidebarToggle"
            >
              <i className="las la-arrow-left"></i>
            </Link>
            <h2>Forum - Dashboard</h2>
            <Link to="/add-new-forum" className="btn btn-outline-light ml-auto">
              Add New Forum <i className="fa fa-plus" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
        <div className="page-content w-100">
          <div
            className="slider-area"
            style={{ backgroundImage: "url(" + SliderImage + ")" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {this.state.isForumData ? (
                    <div className="slider-content">
                      <ul className="list-inline d-flex align-items-center justify-content-between mb-3">
                        <li className="list-inline-item">
                          <h6 className="forum-title">
                            {this.state.forumData.diaplay_name}
                          </h6>
                        </li>
                        <li className="list-inline-item">
                          <p className="date">
                            {dateFormat(
                              this.state.forumData.forum_created_date,
                              "dS mmmm yyyy"
                            )}
                          </p>
                        </li>
                      </ul>
                      <p className="mb-3 truncate truncate-3">
                        {this.state.forumData.description}
                      </p>
                      <p className="director-name">
                        <span>Forum Director : </span>{" "}
                        {this.state.forumData.forum_created_by}
                      </p>
                    </div>
                  ) : (
                    <div className="slider-content">
                      <h5>No forum found for you</h5>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="regular-content">
            <div className="container">
              <div className="row">
                {this.state.isIssueData ? (
                  <div className="col-sm-6">
                    <h3 className="section-title">
                      Live Issues{" "}
                      <i
                        className="fa fa-circle status text-success"
                        aria-hidden="true"
                      ></i>
                    </h3>
                    <ul className="list-inline quick-tabs mb-3">
                      <li className="list-inline-item">
                        <Link to="/issues" className="active">
                          Upcoming
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="/issues">Old</Link>
                      </li>
                    </ul>

                    <div className="card mb-5">
                      <div className="card-body p-0">
                        <LiveIssues issueAllData={this.state.issueData} />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {this.state.isMeetingData ? (
                  <div className="col-sm-6">
                    <h3 className="section-title">Meetings Updates </h3>
                    <ul className="list-inline quick-tabs mb-3">
                      <li className="list-inline-item">
                        <Link to="/forum" className="active">
                          Upcoming
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="/forum">Old</Link>
                      </li>
                    </ul>

                    <div className="card mb-5">
                      <div className="card-body p-0">
                        <MeetingUpdates
                          meetingAllData={this.state.meetingData}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              {this.state.isEventData ? (
                <div className="row">
                  <div className="col-sm-12">
                    <h3 className="section-title">Events</h3>
                    <ul className="list-inline quick-tabs mb-3">
                      <li className="list-inline-item">
                        <Link to="/forum" className="active">
                          Upcoming
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="/forum">Old</Link>
                      </li>
                    </ul>

                    <div className="card mb-5">
                      <div className="card-body p-0">
                        <Events eventAllData={this.state.eventData} />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="row">
                <div className="col-sm-5">
                  <h3 className="section-title">Updates</h3>
                  <div className="card mb-5 updates">
                    <div className="card-body p-0">
                      <Scrollbar style={{ height: 340 }}>
                        <div className="update-holder">{ActivityOfForum}</div>
                      </Scrollbar>
                    </div>
                  </div>
                </div>
                <div className="col-sm-7">
                  <h3 className="section-title">Members ({MemberCount})</h3>
                  <div className="card mb-5 members">
                    <div className="card-body">
                      <Scrollbar style={{ height: 340 }}>
                        {ForumMember}
                      </Scrollbar>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}
