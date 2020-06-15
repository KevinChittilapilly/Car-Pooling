import React, { Component } from 'react'
import ApiService from "./ApiService";

class AdminUpload extends Component{

    constructor(props){
        super(props);
        this.state ={
            driver_id: '',
            name: '',
            passengers: '',
            license: '',
            pickup_date: '',
            pickup_time: '',
            number: '',
            car_name: '',
            droptime:'',
            emailid:'',
            message:null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {driver_id: this.state.driver_id,emailid:this.state.emailid, name: this.state.name, passengers: this.state.passengers, license: this.state.license, pickup_date: this.state.pickup_date, pickup_time: this.state.pickup_time, number: this.state.number,car_name:this.state.car_name,droptime:this.state.droptime};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/home');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add User</h2>
                <form>
                <div className="form-group">
                    <label>Driver_ID</label>
                    <input type="text" placeholder="driver-id" name="driver_id" className="form-control" value={this.state.driver_id} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Number of Seats</label>
                    <input placeholder="Number of Seats" name="passengers" className="form-control" value={this.state.passengers} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>License</label>
                    <input placeholder="License Number" name="license" className="form-control" value={this.state.license} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Pickup_date</label>
                    <input type="text" placeholder="Pickup Date" name="pickup_date" className="form-control" value={this.state.pickup_date} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Pickup_time</label>
                    <input type="text" placeholder="PickUp Time" name="pickup_time" className="form-control" value={this.state.pickup_time} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" placeholder="Mobile Number" name="number" className="form-control" value={this.state.number} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Car Name</label>
                    <input type="text" placeholder="Name of the Vehicle" name="car_name" className="form-control" value={this.state.car_name} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>DropTime</label>
                    <input type="text" placeholder="DropTime" name="droptime" className="form-control" value={this.state.droptime} onChange={this.onChange}/>
                <div className="form-group">
                    <label>Emailid</label>
                    <input type="text" placeholder="Email-id" name="emailid" className="form-control" value={this.state.emailid} onChange={this.onChange}/>
                </div>
                </div>
                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
            </form>
    </div>
        );
    }
}

export default AdminUpload;