import React, { Component } from "react";
import axios from 'axios'
import Item1 from './images/aulto.jpg'
import Item2 from './images/i20.jpg'
import Item3 from './images/esteem.jpg'
import Item4 from './images/r15.jpg'
import Item5 from './images/santro.png'
import Item6 from './images/swift.png'
import { Link } from 'react-router-dom';
const searchStyle={
    height: '50px',
    width: '1000px',
    backgroundColor:'white',
    marginLeft:'180px',
    
    border:'1px solid #c5c5c5', 
    cursor:'text'

}
var i=0;
class AdminPage extends Component{
    constructor(props){
        super(props);
        this.state={
            search:[],
            users: [],
            x:[],
            images:[Item1,Item2,Item3,Item5,Item4,Item6]
        };
    }
    componentDidMount(){
        axios.get("/all").then(response=>(response.data))
        .then((data)=>{
           
            this.setState({
                users:data,
                
                
                
            })
        })
        }
        updateSearch(event){

            this.setState({search: event.target.value})
    
        }
        deleteitem=(id)=>{
            axios.delete("/delete/"+id).then(response=>(response.data))
            .then((data)=>{
               
                this.setState({
                    users:data,
                    
                    
                    
                })
            })     
        }
        edititem=(id)=>{
            this.props.history.push({
                pathname:"/editPage",
                state:{
                    key:id,
                    
                 }
               });
        }
    render(){
        let filtereditems=this.state.users.filter(
            (item)=>{
                return item.pickup_time.indexOf(this.state.search)!==-1;
            }
        );
        return(
            <>
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/adminPage" className="brand-logo">Admin Page</Link>
                    <ul className="right">
                    <Link to="/home" >Log Out</Link>
                     
                    </ul>
                    <ul className="right">
                    <Link to="/adminRide" >Create Ride</Link>
                     
                    </ul>
                                            
                  

                   
                    
                </div>
            </nav>
            <div className="center">
                <input type="text" value={this.state.search} placeHolder="Search by Timings" defaultValue="Search Bar" style={searchStyle} placeholderTextColor={'red'}  onChange={this.updateSearch.bind(this)}></input>
                </div>
            <div className="container" >
                <div className="box" >
            {this.state && this.state.users && filtereditems.map(item =>
            
            <div className="card" key={item.driver_id} style={{paddingLeft:'50px'}}  >
            <div className="card-image">
                <img src={this.state.images[(i++)%6]} key={new Date()} alt={"Image not Available"} style={{height:'200px'}}/>
                <span className="card-title">{item.title}</span>
               
            </div>
            
            <div className="card-content">
                <p><b>Employee Name: </b>{item.name}</p>
                <p><b>Car: </b>{item.car_name}</p>
                <p><b>Pickup Timing: </b>{item.pickup_time}</p>
                <p><b>Available Seats </b>{item.passengers}</p>
               
                
            </div>
           

            <button className="card-title" onClick={() =>this.deleteitem(item.driver_id)}  style={{ backgroundColor:'green', disabled:'red', cursor:'pointer'}}>Delete</button>
            <button className="card-title" onClick={() =>this.edititem(item.driver_id)}  style={{ backgroundColor:'green', disabled:'red', cursor:'pointer'}}>Edit Item</button>
                                            
    
     
            </div> 
          
     
            )}
            </div>
            </div>
            </>
        )
    }
}
export default AdminPage