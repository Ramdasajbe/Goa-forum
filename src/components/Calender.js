import React from 'react';
import axios from 'axios';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
// import { INITIAL_EVENTS } from './event-utils'


export default class Calender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekendsVisible: true,
      currentEvents: [],
      INITIAL_EVENTS:[],
      loader:true,
      viewData:false,
      error:"",

    };
    this.getCalenderData = this.getCalenderData.bind(this);

  }

  UNSAFE_componentWillMount(){
      this.getCalenderData();
  }

  async getCalenderData(){
    console.log("-------get calender of user---------- ");
    let yinID = localStorage.getItem("yin_id");
    let data=[];
    axios.get(process.env.REACT_APP_TALK_API+'/calender/all/list/yin-id/'+yinID)
    .then(response => {
        console.log("-------------------CALENDER DATA DATA ---- : ", response);
        for(let i=0;i<response.data.length;i++){
          let datas = {
            title:response.data[i].title,
            start:response.data[i].start_date,
            end:response.data[i].end_date,
          }
          data.push(datas);
        }

        console.log("------------------",data);
        this.setState({
          INITIAL_EVENTS:data,
          viewData:true,
        })
    }).catch(error => {
        console.log("url response in error-----", error);
    });
  }

    
      render() {
        return (
          <div className='demo-app'>
            {this.state.viewData?<div className='demo-app-main'>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                  left: 'dayGridMonth,timeGridWeek',
                  center: 'title',
                  right: 'prev,next'
                }}
                initialView='dayGridMonth'
                // editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                weekends={this.state.weekendsVisible}
                initialEvents={this.state.INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                // select={this.handleDateSelect}
                // eventContent={renderEventContent} // custom render function
                // eventClick={this.handleEventClick}
                // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                
              /> 
  
            </div>:""}
          </div>
        )
      }
    

      handleWeekendsToggle = () => {
        this.setState({
          weekendsVisible: !this.state.weekendsVisible
        })
      }
      handleEventClick = (clickInfo) => {
        if (clickInfo.event.title) {
          clickInfo.event.remove()
        }
      }
    
      handleEvents = (events) => {
        this.setState({
          currentEvents: events
        })
      }
    
    }
    
    function renderEventContent(eventInfo) {
      return (
        <>
          <b>{eventInfo.event.time}</b>
          <i>{eventInfo.event.title}</i>
        </>
      )
    }
    
