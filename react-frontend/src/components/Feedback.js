import React,{Component} from 'react'

import ApiService from '../ApiService'
import Popup from "reactjs-popup";
class Feedback extends Component{
    constructor(props){
        super(props);
        this.state={
                feedback:'',
                rating:'',
                message:null
            }
           // this.saveUser = this.saveUser.bind(this);
        
    }
    saveUser = (e) => {
        e.preventDefault();
       var key2=this.props.location.state.key;
        let user1={user_id:key2.user_id,name:key2.name,number:key2.number,address:key2.address,daddress:key2.daddress,emailid:key2.emailid,driverid:key2.driverid,dname:key2.dname,demail:key2.demail,dnumber:key2.dnumber,rating:this.state.rating,feedback:this.state.feedback};
        ApiService.addUser1(user1)
            .then(res => {
               
                this.setState({message : 'User added successfully.'});
                this.props.history.push({
                    pathname:"/home",
                    state:{
                        key:'',
                        
                     }
                   });
            });
        }


    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

    render(){
        console.log(this.props)
        return(
            <>
            <h1 className="center">Thanks for Using Our Services. Please fill this Feedback form to help us serve you better</h1>
            <form>
                <div className="form-group">
                    <label>Rating</label>
                    <input type="text" placeholder="Rating(1-5)" name="rating" className="form-control" value={this.state.user_id} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Review</label>
                    <input type="text" placeholder="Feedback" name="feedback" className="form-control" value={this.state.name} onChange={this.onChange}/>
                </div>
                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
            </form>
            
            </>
            
         
        )
    }
}
export default Feedback;