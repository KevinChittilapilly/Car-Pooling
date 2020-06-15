import React, { Component } from 'react';
import axios from 'axios'
class DriverPage extends Component{
constructor(props){
    super(props);
    this.state={
        driver_id:'',
        x:[]
    }
}


handleChange=(event)=> {
    this.setState({driver_id: event.target.value});
  }
  handleSubmit=(event)=>{
    event.preventDefault();  
    console.log(this.state.driver_id)
    this.props.history.push({
        pathname:"/driverHistory",
        state:{
            key:this.state.driver_id
         }
       });
  }
    render(){
        
    return(
        <>
        <div className="center">
            <h3>Enter your Employee-id to see who has booked your ride</h3>
        </div>
        <form>
  <label>
    
    <input type="text" name="name" value={this.state.driver_id} onChange={this.handleChange} />
  </label>
  <input type="submit" value="Submit" onClick={this.handleSubmit} />
</form> 


        </>
    )
}
}
export default DriverPage;