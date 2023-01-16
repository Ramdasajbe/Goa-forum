import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Scrollbar from 'react-scrollbars-custom';

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


function MembersFilter() {
    const [height] = useWindowSize();
    let scrollHeight = height - (70 + 60);

    return <>
        <div className='header position-fixed clearfix'>
            <div className='d-flex align-items-center w-100'>
                <Link to="/members" className="btn btn-link text-white pl-0"><i className="las la-arrow-left"></i></Link>
                <h2>Filter</h2>
            </div>
        </div>
        <div className="page-content w-100 members-container filter">
            <Scrollbar style={{ height: scrollHeight }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className='card mb-4'>
                                <ul className='list-inline mb-0'>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="filter_1" id="All" checked />
                                            <label className="btn" for="All">All</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="filter_1" id="Recently_Added" />
                                            <label className="btn" for="Recently_Added">Recently Added</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className='card mb-4'>
                                <h3 class="section-title">Search By Forum</h3>
                                <ul className='list-inline mb-0'>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="by_forum" id="ForumTitle0" checked />
                                            <label className="btn" for="ForumTitle0">Forum Title</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="by_forum" id="ForumTitle1" />
                                            <label className="btn" for="ForumTitle1">Forum Title</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="by_forum" id="ForumTitle2" />
                                            <label className="btn" for="ForumTitle2">Forum Title</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="by_forum" id="ForumTitle3" />
                                            <label className="btn" for="ForumTitle3">Forum Title</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className='card mb-4'>
                                <h3 class="section-title">Search By College</h3>
                                <ul className='list-inline mb-0'>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="by_college" id="CollegeName0" checked />
                                            <label className="btn" for="CollegeName0">College Name</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="by_college" id="CollegeName1" />
                                            <label className="btn" for="CollegeName1">Forum Title</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="by_college" id="CollegeName2" />
                                            <label className="btn" for="CollegeName2">Forum Title</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="by_college" id="CollegeName3" />
                                            <label className="btn" for="CollegeName3">Forum Title</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className='card mb-4'>
                                <h3 class="section-title">Search By Group</h3>
                                <ul className='list-inline mb-0'>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="by_group" id="GroupName0" checked />
                                            <label className="btn" for="GroupName0">GroupName</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="by_group" id="GroupName1" />
                                            <label className="btn" for="GroupName1">Forum Title</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="by_group" id="GroupName2" />
                                            <label className="btn" for="GroupName2">Forum Title</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='checkbox button'>
                                            <input type="checkbox" className="btn-check" name="by_group" id="GroupName3" />
                                            <label className="btn" for="GroupName3">Forum Title</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Scrollbar>
            <ul className='list-inline filter-button mb-0'>
                <li className='list-inline-item m-0 w-50'>
                    <button className='btn btn-primary w-100 rounded-0'>Apply</button>
                </li>
                <li className='list-inline-item m-0 w-50'>
                    <button className='btn btn-light w-100 rounded-0'>Clear</button>
                </li>
            </ul>
        </div>
    </>;
}

export default MembersFilter;
