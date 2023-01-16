import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import EventImage1 from '../assets/images/event-image-1.png';
// import EventImage2 from '../assets/images/event-image-2.png';

const Events = (props) => {
    
    return (
        <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} className='event-carousel'>
           {props.eventAllData.map((event,index)=>{
               return(
                <div key={index}>
                    <div className='row'>
                        <div className='col-12 col-sm-7 col-lg-7  m-auto'>
                            <div className='event-block clearfix'>
                                <div className='p-2 text-left'>
                                    <h2 className='mb-1'>{event.event_title}</h2>
                                    <p className='time mb-2'>{dateFormat(event.event_created_date, "dS mmm yyyy")}  |  10.30 am to 12.30 pm</p>
                                    <Link to="/forum" className='btn btn-link btn-calender'><i className='las la-calendar'></i></Link>
                                </div>
                                <figure>
                                    <img src={EventImage1} alt="EventImage1" />
                                </figure>
                                <div className='p-2'>
                                    <p className='event-desc truncate truncate-2 mb-1'>{event.event_description} </p>
                                </div>
                                <Link to={"/event-details/"+event.event_id} className='btn btn-primary float-right'>View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
               );
           })}

        </Carousel >
    );
}

export default Events;