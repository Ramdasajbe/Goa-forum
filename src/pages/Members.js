import React from 'react';
import { Link } from 'react-router-dom';


import MemberImage1 from '../assets/images/member-1.png';
import MemberImage2 from '../assets/images/member-2.png';
import MemberImage3 from '../assets/images/member-3.png';
import MemberImage4 from '../assets/images/member-4.png';

function Members() {
    return <>
        <div className='header position-fixed clearfix'>
            <div className='d-flex align-items-center w-100'>
                <Link to="/issues" className="btn btn-link text-white pl-0"><i className="las la-arrow-left"></i></Link>
                <h2>Members</h2>
            </div>
        </div>
        <div className="page-content w-100 members-container">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-sm-12">
                        <div className="member-block d-flex">
                            <figure className="flex-shrink-1"><img src={MemberImage1} alt="MemberImage1" /></figure>
                            <div className='w-100'>
                                <div className="row d-flex align-items-center">
                                    <div className='col-sm-7 col-12'>
                                        <h3 className="member-name">Manisha Deshpande</h3>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <button className='btn btn-link float-right'><i class="las la-phone"></i></button>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>College Name : </span> Lorem ipsum dolor sit amet</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Designation :  </span> Forum Director</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>Mobile No : </span> 9412792301</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Email Id : </span> manisha@gmail.com</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="member-block d-flex">
                            <figure className="flex-shrink-1"><img src={MemberImage2} alt="MemberImage2" /></figure>
                            <div className='w-100'>
                                <div className="row d-flex align-items-center">
                                    <div className='col-sm-7 col-12'>
                                        <h3 className="member-name">Aniket Sabnis</h3>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <button className='btn btn-link float-right'><i class="las la-phone"></i></button>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>College Name : </span> Lorem ipsum dolor sit amet</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Designation :  </span> Boy’s Representative</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>Mobile No : </span> 9412792301</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Email Id : </span> manisha@gmail.com</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="member-block d-flex">
                            <figure className="flex-shrink-1"><img src={MemberImage3} alt="MemberImage3" /></figure>
                            <div className='w-100'>
                                <div className="row d-flex align-items-center">
                                    <div className='col-sm-7 col-12'>
                                        <h3 className="member-name">Priyanka Jadhav</h3>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <button className='btn btn-link float-right'><i class="las la-phone"></i></button>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>College Name : </span> Lorem ipsum dolor sit amet</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Designation :  </span> Group Representative</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>Mobile No : </span> 9412792301</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Email Id : </span> manisha@gmail.com</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="member-block d-flex">
                            <figure className="flex-shrink-1"><img src={MemberImage4} alt="MemberImage4" /></figure>
                            <div className='w-100'>
                                <div className="row d-flex align-items-center">
                                    <div className='col-sm-7 col-12'>
                                        <h3 className="member-name">Amruta Walimbe</h3>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <button className='btn btn-link float-right'><i class="las la-phone"></i></button>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>College Name : </span> Lorem ipsum dolor sit amet</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Designation :  </span> Group Representative</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>Mobile No : </span> 9412792301</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Email Id : </span> manisha@gmail.com</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="member-block d-flex">
                            <figure className="flex-shrink-1"><img src={MemberImage1} alt="MemberImage1" /></figure>
                            <div className='w-100'>
                                <div className="row d-flex align-items-center">
                                    <div className='col-sm-7 col-12'>
                                        <h3 className="member-name">Manisha Deshpande</h3>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <button className='btn btn-link float-right'><i class="las la-phone"></i></button>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>College Name : </span> Lorem ipsum dolor sit amet</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Designation :  </span> Forum Director</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>Mobile No : </span> 9412792301</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Email Id : </span> manisha@gmail.com</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="member-block d-flex">
                            <figure className="flex-shrink-1"><img src={MemberImage2} alt="MemberImage2" /></figure>
                            <div className='w-100'>
                                <div className="row d-flex align-items-center">
                                    <div className='col-sm-7 col-12'>
                                        <h3 className="member-name">Aniket Sabnis</h3>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <button className='btn btn-link float-right'><i class="las la-phone"></i></button>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>College Name : </span> Lorem ipsum dolor sit amet</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Designation :  </span> Boy’s Representative</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>Mobile No : </span> 9412792301</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Email Id : </span> manisha@gmail.com</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="member-block d-flex">
                            <figure className="flex-shrink-1"><img src={MemberImage3} alt="MemberImage3" /></figure>
                            <div className='w-100'>
                                <div className="row d-flex align-items-center">
                                    <div className='col-sm-7 col-12'>
                                        <h3 className="member-name">Priyanka Jadhav</h3>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <button className='btn btn-link float-right'><i class="las la-phone"></i></button>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>College Name : </span> Lorem ipsum dolor sit amet</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Designation :  </span> Group Representative</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>Mobile No : </span> 9412792301</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Email Id : </span> manisha@gmail.com</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="member-block d-flex">
                            <figure className="flex-shrink-1"><img src={MemberImage4} alt="MemberImage4" /></figure>
                            <div className='w-100'>
                                <div className="row d-flex align-items-center">
                                    <div className='col-sm-7 col-12'>
                                        <h3 className="member-name">Amruta Walimbe</h3>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <button className='btn btn-link float-right'><i class="las la-phone"></i></button>
                                    </div>
                                </div>
                                <div className="row mb-1">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>College Name : </span> Lorem ipsum dolor sit amet</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Designation :  </span> Group Representative</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-sm-7 col-12'>
                                        <label><span>Mobile No : </span> 9412792301</label>
                                    </div>
                                    <div className='col-sm-5 col-12'>
                                        <label><span>Email Id : </span> manisha@gmail.com</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Members;
