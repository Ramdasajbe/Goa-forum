import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Scrollbar from 'react-scrollbars-custom';

import MemberImage1 from '../assets/images/member-1.png';
import MemberImage2 from '../assets/images/member-2.png';
import MemberImage3 from '../assets/images/member-3.png';
import MemberImage4 from '../assets/images/member-4.png';

import MemberChat1 from '../assets/images/chat-profile-1.jpg';
import MemberChat2 from '../assets/images/chat-profile-2.jpg';
import MemberChat3 from '../assets/images/chat-profile-3.jpg';
import MemberChat4 from '../assets/images/chat-profile-4.jpg';
import MemberChat5 from '../assets/images/chat-profile-5.jpg';
import chatMessageImg from '../assets/images/chat-message-img.jpg';

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

function GroupChat() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 640, min: 464 },
            items: 6
        },
        mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 6
        }
    };


    const [height] = useWindowSize();
    let scrollHeight = height - (132 + 80);


    return <>
        <div className='header position-fixed clearfix group-chat-header'>
            <div className='d-flex flex-row  align-items-center justify-content-between w-100'>
                <Link to="/issues" className="btn btn-link text-white pl-0"><i className="las la-arrow-left"></i></Link>
                <h2 className='align-self-center'>Air Pollution</h2>
                <ul className='list-inline mb-0 d-flex flex-row'>
                    <li className='list-inline'>
                        <button type='button' className='btn btn-link'><i className="las la-video"></i></button>
                    </li>
                    <li className='list-inline'>
                        <button type='button' className='btn btn-link'><i className="las la-phone"></i></button>
                    </li>
                    <li className='list-inline'>
                        <button type='button' className='btn btn-link'><i className="las la-ellipsis-v"></i></button>
                    </li>
                </ul>
            </div>
            {/* <Carousel showArrows={true} showIndicators={false} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} className='event-carousel'> */}
            <Carousel responsive={responsive}>
                <div className='image-holder'>
                    <img src={MemberImage1} alt="MemberImage1" />
                </div>
                <div className='image-holder'>
                    <img src={MemberImage2} alt="MemberImage2" />
                </div>
                <div className='image-holder'>
                    <img src={MemberImage3} alt="MemberImage3" />
                </div>
                <div className='image-holder'>
                    <img src={MemberImage4} alt="MemberImage4" />
                </div>
                <div className='image-holder'>
                    <img src={MemberImage1} alt="MemberImage1" />
                </div>
                <div className='image-holder'>
                    <img src={MemberImage2} alt="MemberImage2" />
                </div>
                <div className='image-holder'>
                    <img src={MemberImage3} alt="MemberImage3" />
                </div>
                <div className='image-holder'>
                    <img src={MemberImage4} alt="MemberImage4" />
                </div>
                <div className='image-holder'>
                    <img src={MemberImage1} alt="MemberImage1" />
                </div>
                <div className='image-holder'>
                    <img src={MemberImage2} alt="MemberImage2" />
                </div>
                <div className='image-holder'>
                    <img src={MemberImage3} alt="MemberImage3" />
                </div>
                <div className='image-holder'>
                    <img src={MemberImage4} alt="MemberImage4" />
                </div>
            </Carousel>
        </div>
        <div className="page-content w-100 group-chat-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Scrollbar style={{ height: scrollHeight }}>
                            <div className='chat-message'>
                                <span className='date'>Today, 3.24 pm</span>
                            </div>
                            <div className='user-chat sender d-flex flex-row'>
                                <figure className='flex-shrink-1'>
                                    <img src={MemberChat1} alt='receiver'></img>
                                </figure>
                                <div className='message bg-light-pink'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className='date-time'>3.25 pm</p>
                                </div>
                            </div>
                            <div className='user-chat sender d-flex flex-row'>
                                <figure className='flex-shrink-1'>
                                    <img src={MemberChat2} alt='receiver'></img>
                                </figure>
                                <div className='message bg-light-yellow'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    <p className='date-time'>3.28 pm</p>
                                </div>
                            </div>
                            <div className='user-chat sender d-flex flex-row'>
                                <figure className='flex-shrink-1'>
                                    <img src={MemberChat3} alt='receiver'></img>
                                </figure>
                                <div className='message bg-light-yellow-too'>
                                    <p>Yes</p>
                                    <p className='date-time'>4.00 pm</p>
                                </div>
                            </div>
                            <div className='user-chat sender d-flex flex-row'>
                                <figure className='flex-shrink-1'>
                                    <img src={MemberChat4} alt='receiver'></img>
                                </figure>
                                <div className='message bg-light-gray'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet.</p>
                                    <p className='date-time'>4.02 pm</p>
                                </div>
                            </div>
                            <div className='user-chat receiver d-flex flex-row flex-row-reverse'>
                                <figure className='flex-shrink-1'>
                                    <img src={MemberChat5} alt='receiver'></img>
                                </figure>
                                <div className='message'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className='date-time'>4.10 pm</p>
                                </div>
                            </div>
                            <div className='user-chat receiver d-flex flex-row flex-row-reverse'>
                                <figure className='flex-shrink-1'>
                                    <img src={MemberChat5} alt='receiver'></img>
                                </figure>
                                <div className='message'>
                                    <img src={chatMessageImg} alt='img' className='msg-img' />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className='date-time'>4.10 pm</p>
                                </div>
                            </div>
                        </Scrollbar>
                        <div className='chat-input d-flex align-items-center justify-content-between'>
                            <div className='input-holder w-100 d-flex align-items-center justify-content-between'>
                                <div className="input-group common w-100 p-0 d-flex align-items-center justify-content-between">
                                    <div className="input-group-prepend">
                                        <button type='button' className='btn btn-link'>
                                            <span className="input-group-text"><i className="las la-smile"></i></span>
                                        </button>
                                    </div>
                                    <textarea type="text" className="form-control" placeholder="Type Message"></textarea>
                                </div>
                                <div className='flex-shrink-1 d-flex align-items-center justify-content-center'>
                                    <button type='button' className='btn btn-link'><i className="las la-paperclip"></i></button>
                                    <button type='button' className='btn btn-link'><i className="las la-microphone"></i></button>
                                    <button type='button' className='btn btn-link'><i className="las la-camera"></i></button>
                                </div>
                            </div>
                            <button type='button' className='btn btn-secondary d-flex align-items-center justify-content-center'><i className="las la-paper-plane"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default GroupChat;
