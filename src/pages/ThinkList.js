import React, { useState, useEffect, useRef } from 'react'
import Scrollbar from 'react-scrollbars-custom';
import { Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import dateFormat from 'dateformat';
import FloatingFooter from '../components/FloatingFooter';
import liveIssueImage1 from '../assets/images/live-issue-image-1.png';
// import liveIssueImage2 from '../assets/images/live-issue-image-2.png';
// import liveIssueImage3 from '../assets/images/live-issue-image-3.png';
// import issueVideoImage1 from '../assets/images/issue-video-image-1.png';
// import issueVideoImage2 from '../assets/images/issue-video-image-2.png';
import technologyImage from '../assets/images/technology-img.jpg';
import skillBuildingImage from '../assets/images/skill-building-img.jpg';
import scienceImage from '../assets/images/science-img.jpg';
import lifeStyleImage from '../assets/images/life-style-img.jpg';
import { Link } from 'react-router-dom';

function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth])
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




function ThinkList() {

    const ref = useRef();
    const [height] = useWindowSize();
    let scrollHeight = height - (135 + 75);
    console.log("🚀 ~ file: Issues.js ~ line 31 ~ Issues ~ scrollHeight", scrollHeight)
    const [sidebar, setSidbar] = useState(false);
    const [thinkList, setThinkList] = useState();
    const [isThinkList, setIsThinkList] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleSidebar = () => {
        setSidbar(!sidebar)
        if (sidebar) {
            document.body.className = '';
        } else {
            document.body.className = 'sb-sidenav-toggled';
        }
    }

    useEffect(() => {
        axios.get('http://localhost:4001/v1/contents/get/article')
            .then(response => {
                console.log("-------------------EVENT DATA ---- : ", response);
                setThinkList(response.data.data);
                setIsThinkList(true);
            }).catch(error => {
                console.log("url response in error-----", error);
            });
    },[]);

    return (
        <>
            <div className='header position-absolute clearfix issues-header' ref={ref} >
                <div className='mb-3 d-flex align-items-center w-100'>
                    <button className="btn btn-link text-white pl-0" id="sidebarToggle" onClick={toggleSidebar}><i className="fa fa-bars" aria-hidden="true"></i></button>
                    <h2>Think</h2>
                </div>
                <div className="input-group mb-2 search">
                    <input type="text" className="form-control" placeholder="Search by categories of Issues" />
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>

            <div className="issue-card-holder live-issues think" >
                <div className='clearfix mb-2'>
                    <button variant="link" id="dropdown-basic" className="btn btn-link text-white float-right" onClick={handleShow}>
                        <i className="las la-filter"></i>
                    </button>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <Scrollbar style={{ height: scrollHeight }}>
                            {isThinkList?
                            thinkList.map((think,index)=>{
                                return(
                                    <div key={index}><h3 className="section-title">{think.title}</h3>
                                <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} className='think-carousel mb-4'>
                                    
                                    {think.article_all.map((article,index)=>{
                                        return(
                                            <div key={index}>
                                            <div className='issue-card flex-block'>
                                                {article.image?<div className='image-holder' style={{ backgroundImage: "url(" + article.image + ")" }}></div>:<div className='image-holder' style={{ backgroundImage: "url(" + liveIssueImage1 + ")" }}></div>}
                                                
                                                <div className='issue-content clearfix'>
                                                    <h4 className='truncate truncate-2'>{article.title}</h4>
                                                    <p className='desc truncate truncate-4'>{article.description}</p>
                                                    <p className='time align-self-end'>{dateFormat(article.createdAt, "dS mmm yyyy")}</p>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                    }
                                </Carousel></div>
                                )
                            }):<h2>No article found</h2>}
                                

                            {/* <h3 className="section-title">Technology</h3>
                                <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} className='think-carousel mb-4'>
                                    <div>
                                        <div className='issue-card flex-block'>
                                            <div className='image-holder' style={{ backgroundImage: "url(" + liveIssueImage1 + ")" }}></div>
                                            <div className='issue-content clearfix'>
                                                <h4 className='truncate truncate-2'>There are many variations of passages of Lorem Ipsum available</h4>
                                                <p className='desc truncate truncate-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                                <p className='time align-self-end'>30th December 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='issue-card flex-block'>
                                            <div className='image-holder' style={{ backgroundImage: "url(" + liveIssueImage2 + ")" }}></div>
                                            <div className='issue-content clearfix'>
                                                <h4 className='truncate truncate-2'>There are many variations of passages of Lorem Ipsum available</h4>
                                                <p className='desc truncate truncate-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                                <p className='time align-self-end'>18th December 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='issue-card flex-block'>
                                            <div className='image-holder' style={{ backgroundImage: "url(" + liveIssueImage3 + ")" }}></div>
                                            <div className='issue-content clearfix'>
                                                <h4 className='truncate truncate-2'>There are many variations of passages of Lorem Ipsum available</h4>
                                                <p className='desc truncate truncate-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                                <p className='time align-self-end'>10th December 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel> */}

                                {/* <h3 className="section-title">Skill Building</h3>
                                <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} className='think-carousel-video mb-4'>
                                    <div>
                                        <div className='issue-card video-block'>
                                            <div className='video-image-holder' style={{ backgroundImage: "url(" + issueVideoImage1 + ")" }}>
                                                <div className='video-overlay'></div>
                                                <button className='btn btn-link btn-play'><i className="las la-play-circle"></i></button>
                                            </div>
                                            <div className='issue-content clearfix'>
                                                <p className='desc truncate truncate-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='issue-card video-block'>
                                            <div className='video-image-holder' style={{ backgroundImage: "url(" + issueVideoImage2 + ")" }}>
                                                <div className='video-overlay'></div>
                                                <button className='btn btn-link btn-play'><i className="las la-play-circle"></i></button>
                                            </div>
                                            <div className='issue-content clearfix'>
                                                <p className='desc truncate truncate-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>

                                <h3 className="section-title">Science</h3>
                                <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} className='think-carousel mb-4'>
                                    <div>
                                        <div className='issue-card flex-block'>
                                            <div className='image-holder' style={{ backgroundImage: "url(" + liveIssueImage2 + ")" }}></div>
                                            <div className='issue-content clearfix'>
                                                <h4 className='truncate truncate-2'>There are many variations of passages of Lorem Ipsum available</h4>
                                                <p className='desc truncate truncate-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                                <p className='time align-self-end'>18th December 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='issue-card flex-block'>
                                            <div className='image-holder' style={{ backgroundImage: "url(" + liveIssueImage1 + ")" }}></div>
                                            <div className='issue-content clearfix'>
                                                <h4 className='truncate truncate-2'>There are many variations of passages of Lorem Ipsum available</h4>
                                                <p className='desc truncate truncate-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                                <p className='time align-self-end'>30th December 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='issue-card flex-block'>
                                            <div className='image-holder' style={{ backgroundImage: "url(" + liveIssueImage3 + ")" }}></div>
                                            <div className='issue-content clearfix'>
                                                <h4 className='truncate truncate-2'>There are many variations of passages of Lorem Ipsum available</h4>
                                                <p className='desc truncate truncate-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                                <p className='time align-self-end'>10th December 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel>

                                <h3 className="section-title">Lifestyle</h3>
                                <Carousel showArrows={false} showStatus={false} showThumbs={false} swipeable={true} emulateTouch={true} className='think-carousel mb-0'>
                                    <div>
                                        <div className='issue-card flex-block'>
                                            <div className='image-holder' style={{ backgroundImage: "url(" + liveIssueImage3 + ")" }}></div>
                                            <div className='issue-content clearfix'>
                                                <h4 className='truncate truncate-2'>There are many variations of passages of Lorem Ipsum available</h4>
                                                <p className='desc truncate truncate-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                                <p className='time align-self-end'>10th December 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='issue-card flex-block'>
                                            <div className='image-holder' style={{ backgroundImage: "url(" + liveIssueImage2 + ")" }}></div>
                                            <div className='issue-content clearfix'>
                                                <h4 className='truncate truncate-2'>There are many variations of passages of Lorem Ipsum available</h4>
                                                <p className='desc truncate truncate-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                                <p className='time align-self-end'>18th December 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='issue-card flex-block'>
                                            <div className='image-holder' style={{ backgroundImage: "url(" + liveIssueImage1 + ")" }}></div>
                                            <div className='issue-content clearfix'>
                                                <h4 className='truncate truncate-2'>There are many variations of passages of Lorem Ipsum available</h4>
                                                <p className='desc truncate truncate-4'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                                <p className='time align-self-end'>30th December 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel> */}
                            </Scrollbar>
                        </div>
                    </div>
                </div>
            </div >

            <FloatingFooter />

            <Modal show={show} onHide={handleClose} animation={true} backdrop="static" className='custom-modal'>

                <Modal.Body className='p-0'>
                    <button type="button" className="close" aria-hidden="true" onClick={handleClose}><i className="las la-times"></i></button>
                    <ul className='filter-holder'>
                        <li>
                            <Link to="#" className='filter-block d-flex align-items-center'>
                                <img src={technologyImage} alt="technologyImage" />
                                <h5>Technology</h5>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className='filter-block d-flex align-items-center'>
                                <img src={skillBuildingImage} alt="skillBuildingImage" />
                                <h5>Skill Building</h5>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className='filter-block d-flex align-items-center'>
                                <img src={scienceImage} alt="scienceImage" />
                                <h5>Science</h5>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className='filter-block d-flex align-items-center'>
                                <img src={lifeStyleImage} alt="lifeStyleImage" />
                                <h5>Lifestyle</h5>
                            </Link>
                        </li>
                    </ul>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default ThinkList
