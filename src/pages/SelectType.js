import React from "react";
import { Link} from "react-router-dom";
import axios from 'axios';
import logo from '../assets/images/logo.png';
import MixedGenderImage from '../assets/images/mixed-gender-forum-image.png';
import FemaleForumImage from '../assets/images/female-forum-image.png';
import MaleForumImage from '../assets/images/male-forum-image.png';

export default class selectType extends React.Component {    
    constructor(props) {
      super(props);
      this.state = {
        forumList:[],
        loader:true,
        error:"",
        redirect:true,
        forumID:'',
        forumName:'',
        yinID:localStorage.getItem("yin_id"),
  
      };
      this.getForumList = this.getForumList.bind(this);
      this.CheckForumSelected = this.CheckForumSelected.bind(this);
      this.setForum = this.setForum.bind(this);
      

    }

  
    UNSAFE_componentWillMount(){
        let collegeCode = localStorage.getItem("college_code");
        this.getForumList(collegeCode);
      }

    async getForumList(collegeCode){
        let currentComponent=this;
      await axios.get(process.env.REACT_APP_TALK_API+'/forum/college/forum/'+collegeCode)
      .then(response => {
          console.log("Response form api get candidatelist from user login id---- : ", response);
          currentComponent.setState({
              forumList:response.data,
              loader:false,
          });
    
      }).catch(error => {
          console.log("url response in error-----", error);
      });
    }

    setForum(forumIDs,forumNames){
        this.setState({
            forumID:forumIDs,
            forumName:forumNames
        });
        console.log("-----forum has been set---------",forumIDs);
        console.log("-----forum has been set---------",forumNames);

    }

    async CheckForumSelected(){
        console.log("------------forum selected--------------");
        let links = document.getElementById("nextScreen");
        let currentComponent = this;
        if(this.state.forumID === ""){
            this.setState({
                error:"Please select forum first"
            })
        }else{
            let addMember={
                forum_id:this.state.forumID,
                yin_id:this.state.yinID,
                designation: "member"
            }
            localStorage.setItem("forum_id",this.state.forumID);
            await axios.post(process.env.REACT_APP_TALK_API+'/forum/add/forum/member',addMember)
            .then(response => {
                console.log("Response form api add member in forum---- : ", response);
                currentComponent.setState({
                    loader:false,
                });
                links.click();
            
            }).catch(error => {
                console.log("url response in error-----", error);
                currentComponent.setState({
                    error:"Please click on another forum this forum has been full"
                })
            });

            
        }
        
    }
  
    render() {
            
        const forumDetails = this.state.forumList.map((forumData,index)=>(
                            <div className="radio-block" key={index}>
                                <input type="radio" value={forumData.forum_id} onClick={()=>this.setForum(forumData.forum_id,forumData.name)} name="forum_type" id={forumData.name === "MIXED GENDER FORUM"?"MixedGenderForum":forumData.name === "BOYS FORUM"?"MaleForum":"FemaleGenderForum"} />
                                <label htmlFor={forumData.name === "MIXED GENDER FORUM"?"MixedGenderForum":forumData.name === "BOYS FORUM"?"MaleForum":"FemaleGenderForum"}></label>
                                <div className="content d-flex align-items-center ">
                                    <img src={forumData.name === "MIXED GENDER FORUM"?MixedGenderImage : forumData.name === "BOYS FORUM"?MaleForumImage:FemaleForumImage} alt="MixedGenderImage" />
                                    <h5>{forumData.name}</h5>
                                </div>
                            </div>
        ));

    return (
        <>
        
            <div className="full-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="select-type">
                                <div className="logo text-center mt-5 mb-5">
                                    <img src={logo} alt="logo" className="img-fluid" />
                                </div>

                                <h2 className="page-title text-center mb-5">Forum Type </h2>

                                {forumDetails}
                                <div className="text-center select-type-btn">
                                    <div className="errorDiv">{this.state.error}</div>
                                    <button onClick={()=>this.CheckForumSelected()} className="btn btn-secondary text-left w-100">
                                        Get Started
                                        <i className="fa fa-angle-right float-right" aria-hidden="true"></i>
                                    </button>
                                    <Link to="/forum" id="nextScreen"></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

}