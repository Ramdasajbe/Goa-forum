import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Scrollbar from 'react-scrollbars-custom';
import dateFormat from 'dateformat';

const MeetingUpdates = (props) => {
    return (
        <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} className='meeting-update-carousel'>
            {props.meetingAllData.map((meeting,index)=>{
                return(
                    <div key={index}>
                    <Scrollbar style={{ height: 340 }}>
                        <div className='meeting-header d-flex'>
                            <span className='count-holder flex-shrink-1'>1</span>
                            <div className='meeting-heading w-100'>
                                <h2 className='title'>{meeting.meeting_title}</h2>
                                <p className='date'>{dateFormat(meeting.meeting_created_at, "dS mmm yyyy")}</p>
                                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                            </div>
                        </div>
                        <p className='meeting-desc'>
                        <div dangerouslySetInnerHTML={{__html:`<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <br/>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        <br/>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>`}} />
                        </p>
                       
                        
                    </Scrollbar>
                </div>
                );
            })}
            
            {/* <div >
                    <Scrollbar style={{ height: 340 }}>
                        <div className='meeting-header d-flex'>
                            <span className='count-holder flex-shrink-1'>1</span>
                            <div className='meeting-heading w-100'>
                                <h2 className='title'>Meeting Title 1 </h2>
                                <p className='date'>31st November 2021</p>
                                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                            </div>
                        </div>
                        <p className='meeting-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <p className='meeting-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                        <p className='meeting-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <p className='meeting-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <p className='meeting-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <p className='meeting-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <p className='meeting-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </Scrollbar>
                </div>
            <div>
                <div className='meeting-header d-flex'>
                    <span className='count-holder flex-shrink-1'>2</span>
                    <div className='meeting-heading w-100'>
                        <h2 className='title'>Meeting Title 2</h2>
                        <p className='date'>31st November 2021</p>
                        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                    </div>
                </div>
                <p className='meeting-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                <p className='meeting-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div> */}
        </Carousel >
    );
}

export default MeetingUpdates;