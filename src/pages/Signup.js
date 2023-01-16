import React, { Component } from 'react'

// import logo1 from "../Assets/images/transparent-logo.png";
// import 'font-awesome/css/font-awesome.min.css';
import { Redirect, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import axios from 'axios';





export default class Signupp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            dob: "",
            mobile: localStorage.getItem("mobile") ? localStorage.getItem("mobile") : "",
            gender: "",
            address1: "",
            address2: "",
            pincode: "",
            college_name: "",
            college_code: "",
            college_year: "",
            description: "",
            redirect: false,
            state_name: '',
            city_name: '',
            StateData: [],
            CityData: [],
            collegeData: [],
            errors: [],
            user_type:"",
            status:'',
            role:'',
            registeredError: '',
            isPasswordShown: false,
            password: "",
            college_id_image: '',
            image: '',
            redirectWeb: false,
            dropDownOptCollegeList: [],
            loading: false,
            submitButtonDisable: false,
            date: '',
            showModalPopup: false,
            uploaded_college_id:"",
            loading_college_id:false,
            isDisabled:false,
            collegeLoader:false,
        };
        this.initialState = this.state;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleFormValidation = () => {

        const { first_name, last_name, dob, mobile, gender, college_name,college_id_image, password } = this.state;
        let errors = {};
        let formIsValid = true;

        console.log("candidate data", this.state);
        if (!first_name) {
            formIsValid = false;
            errors["first_name"] = "*Please enter First name.";
            
        }
        else if (!first_name.match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["first_name"] = "*Please enter alphabet characters only.";
        }

        if (!last_name) {
            formIsValid = false;
            errors["last_name"] = "*Please enter Last name.";
        }
        else if (!last_name.match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["last_name"] = "*Please enter alphabet characters only.";
        }

        if (!dob) {
            formIsValid = false;
            errors["dob"] = "*Please enter date of birth.";
        }

        if (!mobile) {
            formIsValid = false;
            errors["mobile"] = "*Please enter mobile no.";
        }
        else if (!mobile.match(/^[0-9]{10}$/)) {
            formIsValid = false;
            errors["mobile"] = "*Please enter valid mobile no.";
        }
        if (!password) {
            formIsValid = false;
            errors["password"] = "*Please enter password";
        }


        // if (!first_name) {
        //     this.textInputFirstName.current.focus();
        // }else if (!first_name.match(/^[a-zA-Z ]*$/)) {
        //     this.textInputFirstName.current.focus();
        // }else if (!last_name) {
        //     this.textInputLastName.current.focus();
        // }else if (!last_name.match(/^[a-zA-Z ]*$/)) {
        //     this.textInputLastName.current.focus();
        // }else if (!dob) {
        //     this.textInputdob.current.focus();
        // }else if (!mobile) {
        //     this.textInputMobile.current.focus();
        // }else if (!mobile.match(/^[0-9]{10}$/)) {
        //     this.textInputMobile.current.focus();
        // }else if (!gender) {
        //     this.textInputGender.current.focus();
        // }else if (!college_id_image) {
        //     this.textInputCollege_id.current.focus();
        // }else if(!password){
        //     this.textInputPassword.current.focus();
        // }
    



        this.setState({
            errors: errors
        });
        return formIsValid;
    }
    
    handleSubmit(event) {
        event.preventDefault();

       
    
        if (this.handleFormValidation()) {
            this.setState({
                loading: true
            })
         }
    
        
            let formData = new FormData();
                    formData.append("first_name", this.state.first_name);
                    formData.append("last_name", this.state.last_name);


                    formData.append("dob", this.state.dob);
                    formData.append("mobile", this.state.mobile);
                    formData.append("gender", this.state.gender);
                    formData.append("country", "IN");
                    formData.append("state", this.state.state_name);
                    formData.append("state_code", this.state.state_name);
                    formData.append("city", this.state.city_name);
                    // formData.append("pincode", this.state.pincode);
                    formData.append("description", "test");
                    formData.append("college_name", this.state.college_name);
                    formData.append("college_code", this.state.college_code);
                    // formData.append("college_year", this.state.college_year);
                    formData.append("password", this.state.password);
                    // formData.append("address1", this.state.address1);
                    // formData.append("address2", this.state.address2);
                    formData.append("isNominated", false);
                    formData.append("college_id", this.state.uploaded_college_id);
                    let statesSet = this;
         axios.post('https://api.yin.foxberry.link/v1/users/add-new', formData)
            .then(res => {
                console.log("register response", res);
                if (res.status === 200) {

                    if (res.data === "User Already Registered!") {
                        statesSet.setState({
                            registeredError: res.data,
                            loading: false,
                            // submitButtonDisable: true,
                        });
                    }
                }

                else {
                    statesSet.setState({
                        loading: false,
                        registeredError: "register failed"
                    });
                    // alert('register failed');
                    console.log("error in registration");
                }
            }).catch(error => {
                statesSet.setState({
                    loading: false,
                    registeredError: "register failed"
                });
                console.log("error in registration!!!!", error);
            });   
        }

    render = () => {

        return (
            <>
                <div className="row m-2">
                    <div className="col-md-12">
                        <div className="logo text-center mt-5 mb-5">
                            <img src={logo} alt="logo" className="img-fluid" />
                        </div>

                        <form id="loginForm" className="selectBox p-4" onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
                            <h2 className="page-title text-center mb-4">Signup</h2>
                            <div className="input-group common mb-4">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="las la-user"></i></span>
                                </div>
                                <input type="text" className="form-control" value={this.state.first_name} onChange={this.handleChange}
                                    name="first_name"
                                    placeholder="First Name"
                                    ref={this.textInputFirstName} />
                            </div>
                            <div className="errorMsg" style={{ color: "red" }}>{this.state.errors.first_name}</div>

                            <div className="input-group common mb-4 mt-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="las la-user"></i></span>
                                </div>
                                <input type="text" className="form-control" value={this.state.last_name} onChange={this.handleChange}
                                    name="last_name"
                                    placeholder="Last Name"
                                    ref={this.textInputFirstName} />
                            </div>
                            <div className="errorMsg" style={{ color: "red" }}>{this.state.errors.last_name}</div>

                            <div className="input-group common mb-4  mt-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="las la-calendar"></i></span>
                                </div>
                                <input type="date" className="form-control" placeholder="dob"
                                    value={this.state.dob} onChange={this.handleChange}
                                    name="dob"
                                    ref={this.textInputdob} />
                            </div>
                            <div className="errorMsg"style={{ color: "red" }}>{this.state.errors.dob}</div>

                            <div className="input-group common mb-4 mt-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="las la-mobile"></i></span>
                                    </div>
                                    <input className="form-control" placeholder="mobile"
                                        value={this.state.mobile} onChange={this.handleChange}
                                        type="text"
                                        name="mobile"
                                        maxLength="10"
                                        ref={this.textInputdob}/>
                            </div>
                            <div className="errorMsg"style={{ color: "red" }}>{this.state.errors.mobile}</div>

                            <div className="input-group common mb-4 mt-3">
                                <ul className='list-inline mb-0'>
                                    <li className='list-inline-item mr-3'>
                                        <label className='mb-0'>Gender :</label>
                                    </li>
                                    <li className='list-inline-item mr-3'>
                                        <div className="radio">
                                            <input type="radio" id="male" name="gender" onChange={this.handleChange} defaultChecked="true" />
                                            <label htmlFor="male" className='mb-0'>Male</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item mr-3'>
                                        <div className="radio">
                                            <input type="radio" id="female" name="gender" onChange={this.handleChange} />
                                            <label htmlFor="female" className='mb-0'>Female</label>
                                        </div>
                                    </li>
                                    <li className='list-inline-item mr-3'>
                                        <div className="radio">
                                            <input type="radio" id="other" name="gender" onChange={this.handleChange} />
                                            <label htmlFor="other" className='mb-0'>Other</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="errorMsg">{this.state.errors.gender}</div>

                            <div className="input-group common mb-4 mt-4 custom-select-dropdown">
                                {/* <select name='city'>
                                                    <option value="Pune">Pune</option>
                                                    <option value="Mumbai">Mumbai</option>
                                                    <option value="Kolhapur">Kolhapur</option>
                                                </select> */}

                                <select className="form-control" name="city" >
                                    <option selected>Select City</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Kolhapur">Kolhapur</option>
                                </select>
                            </div>
                            <div className="input-group common custom-file-style mb-4 mt-4">
                                <input type="file" className='upload-box' value={this.state.uploaded_college_id} onChange={this.handleChange}
                                    // type="date"
                                    name="uploaded_college_id"
                                    ref={this.textInputdob} placeholder='asd' />
                                {/* <label className="file ">
                                                    <input type="file" id="file" onChange={onFileSelected} aria-label="File browser example" />
                                                    <span className="file-custom" style={{ content: "change" }}></span>
                                                </label> */}
                            </div>
                            <div className="input-group common mb-4 mt-3">
                                <p className="d-block">
                                    Note<sup className='text-danger font-weight-bold'>*</sup> - Before uploading college id card, ensure that you have entered your mobile number and college name.
                                </p>
                            </div>
                            <div className="input-group common mb-4 mt-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="las la-key"></i></span>
                                </div>
                                <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange}
                                    name="password"
                                    placeholder="Create your password" />
                            </div>
                            <div className="errorMsg" style={{ color: "red" }}>{this.state.errors.password}</div>

                            <div className="text-center w-100 mb-2 mt-4">
                                <p className="font-weight-bold d-block">
                                    By continuing you accept our <Link to="#" className="text-blue"><u>Terms & Conditions</u></Link>.
                                </p>
                            </div>
                            <div className="input-group common">
                                <button type='submit' className="btn btn-secondary d-flex align-items-center w-100" >Submit
                                    <i className="fa fa-angle-right ml-auto" aria-hidden="true"></i>
                                </button>

                                <div className='or-block signup'><span className='text'>Already have an Account ?</span></div>

                                <Link to="/login" className="btn btn-secondary new-member d-flex align-items-center w-100 mb-5">
                                    Login <i className="fa fa-angle-right ml-auto" aria-hidden="true"></i>
                                </Link>
                            </div>

                        </form>
                    </div>
                </div>

            </>

        )
    }
}
