import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import logo from '../assets/images/logo.png';

export default class Login extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            mobile: "",
            password: "",
            errors: [],
            isPasswordShown: false,
            redirect: false,
            noUser: '',
            loading: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormValidation = this.handleFormValidation.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleFormValidation = () => {
        const { mobile, password } = this.state;
        let errors = {};
        let formIsValid = true;

        if (!mobile) {
            formIsValid = false;
            errors["mobile"] = "*Please enter mobile.";
        }
        else if (!mobile.match(/^[a-zA-Z0-9@. ]*$/)) {
            formIsValid = false;
            errors["mobile"] = "*Please enter alphabet characters only.";
        }
        if (!password) {
            formIsValid = false;
            errors["password"] = "*Please enter Password.";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }
   
    //code to submit data
    handleSubmit = async event => {
        event.preventDefault()

    
        if (this.handleFormValidation()) {
            this.setState({
                loading: true
            })
            const user = { mobile: this.state.mobile, password: this.state.password };
            console.log("login data", user);
            let currentComponent = this;
            await axios.post(process.env.REACT_APP_ALL_API + '/v1/users/login', user)
                .then(response => {
                    console.log("Response form api:", response);
                    console.log("mobile", this.state.mobile);
                    console.log("password", this.state.password);
                    //alert("Logged in Successfully...!!");
                    localStorage.setItem("mobile", this.state.mobile);
                    localStorage.setItem("first_name", response.data.user.first_name);
                    localStorage.setItem("last_name", response.data.user.last_name);
                    localStorage.setItem("email", response.data.user.email);
                    localStorage.setItem("profile_image", response.data.user.profile_image);
                    localStorage.setItem("city_name", response.data.user.city);
                    if(response.data.user.sub_city){
                    localStorage.setItem("sub_city_name", response.data.user.sub_city);
                    }
                    localStorage.setItem("college_name", response.data.user.college_name);
                    localStorage.setItem("college_code", response.data.user.college_code);
                    localStorage.setItem("role", response.data.user.role);
                    // console.log(res.data.user.districts);
                    localStorage.setItem("districts", JSON.stringify(response.data.user.districts));
                    localStorage.setItem("isLoggedIn", true);
                    currentComponent.setState({ redirect: true,loading: false });
                }).catch(error => {
                    // alert(error);
                    currentComponent.setState({ noUser: "Enter correct credentials!",loading: false });
                    console.log("url response in error-----", error);


                });

        
    }
    }
        render = () => {
            const { isPasswordShown } = this.state;
            if (this.state.redirect) {
                return <Link to='/home' />;
              }
             return (
        <>
            <div className="full-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="login-container">
                                <div className="logo text-center mt-5 mb-5">
                                    <img src={logo} alt="logo" className="img-fluid" />
                                </div>

                                <h2 className="page-title text-center mb-4">Login </h2>

                                <div className="row">
                                    <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2">
                                        <form className='form' onSubmit={this.handleSubmit}>
                                            <div className="input-group common mb-4">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="las la-mobile"></i></span>
                                                </div>
                                                <input type="text" className="form-control"   maxLength="10" name="mobile" value={this.state.mobile} onChange={this.handleChange}
                                                onKeyPress={this.checkMobileNumber}placeholder="Mobile Number" />
                                                 
                                            </div>
                                            <div className="errorMsg mb-2" style={{ color: "red" }}>{this.state.errors.mobile}</div>
                                            <div className="input-group common mb-4">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="las la-comment-dots"></i></span>
                                                </div>
                                                <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter your password"
                                                name="password"
                                                value={this.state.password} onChange={this.handleChange}
                                                // type={(isPasswordShown) ? "text" : "password"}
                                               
                                            />
                                              
                                            </div>
                                            <div className="errorMsg mb-2" style={{ color: "red" }}>{this.state.errors.password}</div>
                                            {/* <div className="input-group common resend-otp">
                                                <Link to="#" className="btn btn-link ml-auto">Resend OTP</Link>
                                            </div> */}
                                            <div className="input-group common">
                                                <button className="btn btn-secondary d-flex align-items-center w-100" to="/type">Lets Go
                                                    <i className="fa fa-angle-right ml-auto" aria-hidden="true"></i>
                                                </button>

                                                <div className='or-block'><span className='text'>Or</span></div>

                                                <Link to="/signup" className="btn btn-secondary new-member d-flex align-items-center w-100 mb-5">
                                                    New Member ? <i className="fa fa-angle-right ml-auto" aria-hidden="true"></i>
                                                </Link>
                                                <div className="text-center w-100 mb-4">
                                                    <p className="text-muted font-weight-bold d-block">
                                                        By continuing you accept our <Link to="#" className="text-blue"><u>Terms & Conditions</u></Link>.
                                                    </p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
}



