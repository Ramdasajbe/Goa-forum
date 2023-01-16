import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

const LiveIssues = (props) => {

    return (
        <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} className='live-issues'>
            {props.issueAllData.map((issues,index)=>{
                return(
                    <div key={index}>
                        <div className='p-2 text-left'>
                            <h2 className='mb-1'>{issues.issue_title}</h2> 
                            
                            <p className='time mb-2'>{dateFormat(issues.issue_created_at, "dS mmmm yyyy")}</p>
                        </div>
                        <iframe
                            className='m-0'
                            src={issues.issue_images[0]}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                        <p className='pl-2 pr-2 pt-2 mb-3 text-left truncate truncate-2 '>{issues.issue_description}</p>
                        <Link to={"/issues-details/"+issues.issue_id} className='btn btn-primary float-left'>View Details</Link>
                    </div>);
            })}
            {/* <div>
                <div className='p-2 text-left'>
                    <h2 className='mb-1'>Issues Title 2</h2> 
                    
                    <p className='time mb-2'>5 Minutes ago</p>
                </div>
                <iframe
                    className='m-0'
                    src={`https://www.youtube.com/embed/uilkmUoXoLU`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <p className='pl-2 pr-2 pt-2 mb-3 text-left truncate truncate-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <button className='btn btn-primary float-left'>View Details</button>
            </div>
            <div>
                <div className='p-2 text-left'>
                    <h2 className='mb-1'>Issues Title 2</h2>
                    <p className='time mb-2'>5 Minutes ago</p>
                </div>
                <iframe
                    className='m-0'
                    src={'https://foxberry-images.s3.amazonaws.com/yin/MHPC00002464/5692profile.png'}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <p className='pl-2 pr-2 pt-2 mb-3 text-left truncate truncate-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <button className='btn btn-primary float-left'>View Details</button>
            </div> */}
        </Carousel>
    );
}

export default LiveIssues;