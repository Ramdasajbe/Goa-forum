
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import SelectType from './pages/SelectType';
import DashboardForum from './pages/DashboardForum';
import AddNewForum from './pages/AddNewForum';
import Issues from "./pages/Issues";
import IssueDetails from "./pages/IssueDetails";
import Updates from "./pages/Updates";
import AddNewIssue from "./pages/AddNewIssue";
import Dashboard from "./pages/Dashboard";
import LiveIssuesList from './pages/LiveIssuesList';
import Meetings from "./pages/Meetings";
import MinutesOfMeeting from "./pages/MinutesOfMeeting";
import UpdateActivity from './pages/UpdateActivity';
import ActivityDetails from './pages/ActivityDetails';
import AssignedIssue from './pages/AssignedIssue';
import Events from './pages/Events';
import AddNewEvent from './pages/AddNewEvent';
import EventDetails from "./pages/EventDetails";
import ThinkList from "./pages/ThinkList";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Members from "./pages/Members";
import MembersFilter from "./pages/MembersFilter";
import GroupChat from "./pages/GroupChat";
import IssueUpdates from "./pages/UpdateIssues";

const AppRouter = (props) => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/type" element={<SelectType />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/forum" element={<DashboardForum />} />
        <Route exact path="/add-new-forum" element={<AddNewForum />} />
        <Route exact path="/issues" element={<Issues />} />
        <Route exact path="/issues-details" element={<IssueDetails />} />
        <Route exact path="/issues-details/:issue_id" element={<IssueDetails />} />
        <Route exact path="/add-new-issue" element={<AddNewIssue />} />
        <Route exact path="/add-new-issue/:forum_id" element={<AddNewIssue />} />
        <Route exact path="/updates" element={<Updates />} />
        <Route exact path="/live-issues-list" element={<LiveIssuesList />} />
        <Route exact path="/meetings" element={<Meetings />} />
        <Route exact path="/minutes-of-meetings" element={<MinutesOfMeeting />} />
        <Route exact path="/update-activity/:activity_id" element={<UpdateActivity />} />
        <Route exact path="/activity-details" element={<ActivityDetails />} />
        <Route exact path="/assigned-issue" element={<AssignedIssue />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/add-new-event" element={<AddNewEvent />} />
        <Route exact path="/event-details/:event_id" element={<EventDetails />} />
        <Route exact path="/think" element={<ThinkList />} />
        <Route exact path="/members" element={<Members />} />
        <Route exact path="/members-filter" element={<MembersFilter />} />
        <Route exact path="/chat" element={<GroupChat />} />
        <Route exact path="/update-issue/:issue_id" element={<IssueUpdates />} />
        
    </Routes>
);
export default AppRouter;