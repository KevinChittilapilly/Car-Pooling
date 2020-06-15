import React, { Component } from 'react'
import ApiService from "../ApiService";
import userHistory from './UserHistory';

class RegistrationPage extends Component{

    constructor(props){
        super(props);
        this.state ={
            user_id:'',
            name:'',
            number:'',
            address:'',
            daddress:'',
            emailid:'',
            message:null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {user_id: this.state.user_id,name: this.state.name, number: this.state.number, address: this.state.address, daddress:this.state.daddress, emailid: this.state.emailid};
        ApiService.addUser1(user)
            .then(res => {
               
                this.setState({message : 'User added successfully.'});
                this.props.history.push({
                    pathname:"/home",
                    state:{
                        key:user,
                        
                     }
                   });
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">RegistrationPage</h2>
                <form>
                <div className="form-group">
                    <label>UserId</label>
                    <input type="text" placeholder="user-id" name="user_id" className="form-control" value={this.state.user_id} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Number</label>
                    <input placeholder="Mobile Number" name="number" className="form-control" value={this.state.number} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input placeholder="Address" name="address" className="form-control" value={this.state.address} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Drop Address</label>
                    <input placeholder="Drop Address" name="daddress" className="form-control" value={this.state.daddress} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Email -ID</label>
                    <input type="text" placeholder="Email-Id" name="emailid" className="form-control" value={this.state.emailid} onChange={this.onChange}/>
                </div>

                
                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
            </form>
            
    </div>
        );
    }
}

export default RegistrationPage;