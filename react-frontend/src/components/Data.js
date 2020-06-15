import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Item1 from '../images/aulto.jpg'
import Item2 from '../images/esteem.jpg'
import Item3 from '../images/i20.jpg'
import Item4 from '../images/r15.jpg'
import Item5 from '../images/santro.png'
import Item6 from '../images/swift.png'
import altimg from '../images/altimg.jpg'
import { addToCart } from './actions/cartActions';
import Footer from '../Footer'
import axios from 'axios'
import Chat from './Chat';
import ChatBot from 'react-simple-chatbot';
import Cart from './Cart'
import { Dropdown } from 'antd';
import DropdownMenu from 'react-bootstrap/lib/DropdownMenu';
import { DropdownButton, NavItem } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/lib/DropdownToggle';

//import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../components/actions/action-types/cart-actions'
const searchStyle={
    height: '50px',
    width: '1000px',
    backgroundColor:'white',
    marginLeft:'180px',
    
    border:'1px solid #c5c5c5', 
    cursor:'text'

}
const chatStyle={
    
        bottom: 0,
        right : 0,
        position: 'fixed',
        width: '350px'
    
}
var i=0;
const images=[Item1,Item2,Item3,Item5,Item4,Item6];
var flag=false
 class Data extends Component{
    static defaultProps = {
        users: [],
        
      }
    
    addToCart = (item) => {
        this.setState({
            x:item,
            
            
            
        })
        
        this.props.p.history.push({
            pathname:"/cart",
            state:{
                key:item,
                key2: this.props.p.location.state,
                pic:i
             }
           });

      }
      
    constructor(props){
        super(props);
        this.state={
            search:[],
            users: [],
            x:[],
            showChat:false,
            setShowChat:false
            
        };
    }
    updateSearch(event){

        this.setState({search: event.target.value})

    }
    
    componentDidMount(){
        axios.get("/all").then(response=>(response.data))
        .then((data)=>{
           
            this.setState({
                users:data,
                
                
                
            })
        })
        

        }
        handleBookings=()=>{
            this.props.p.history.push({
                pathname:"/hist",
                
               });

        }
        /*handleBookings=()=>{
            if(flag){
            this.props.p.history.push({
                pathname:"/userHistory",
                state:{
                    key:this.props.p.location.state.keey
                 }
               });

        }
        else{
            this.props.p.history.push({
                pathname:"/userHistory",
                
               });
        }
    }

    */
        isPassengers(passengers){
            if(passengers>0){
                return false;
            }
            else{
                return true;
            }
           
        }
        startChat = () => { 
            this.setState({
                showChat:true,
                            })

         }
        hideChat = () => {
            
            this.setState({
                showChat:false,
                            })
          }
 
    render(){
        if(this.props.p.location.state!==undefined){
            flag=true;
           
        }
        else{
            console.log("u lose")
        }
            let filtereditems=this.state.users.filter(
            (item)=>{
                return item.pickup_time.indexOf(this.state.search)!==-1;
            }
        );
        
       
        return (
            <>
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/data" className="brand-logo">Car Pooling</Link>
                    <ul className="right">
                    <a style={{ cursor: 'pointer' }} onClick={this.props.d}>Log Out</a>.     
                    </ul>
                    <ul className="right">
                        <li><Link to="/UploadRide">Upload A Ride</Link></li>
                    </ul>
                    <ul className="right">
                    <a style={{ cursor: 'pointer' }} onClick={this.handleBookings}>Your Rides</a>
                    </ul>
                  

                   
                    
                </div>
            </nav>
            <br></br>
            <div className="center">
                <input type="text" value={this.state.search} placeHolder="Search by Timings" defaultValue="Search Bar" style={searchStyle} placeholderTextColor={'red'}  onChange={this.updateSearch.bind(this)}></input>
                </div>
            <div className="container" >
                <div className="box" >
            {this.state && this.state.users && filtereditems.map(item =>
            
            <div className="card" key={item.driver_id} style={{paddingLeft:'50px'}}  >
            <div className="card-image">
                <img src={images[(i++)%6]} key={Date.now()} alt={"Image not Available"} style={{height:'200px',width:'100%'}}/>
                <span className="card-title">{item.title}</span>
               
            </div>
            
            <div className="card-content">
                <p><b>Employee Name: </b>{item.name}</p>
                <p><b>Car: </b>{item.car_name}</p>
                <p><b>Pickup Timing: </b>{item.pickup_time}</p>
                <p><b>Available Seats </b>{item.passengers}</p>
               
                
            </div>
           

            {(item.passengers ) ? <button className="card-title" onClick={() =>this.addToCart(item)}  style={{ backgroundColor:'green', disabled:'red', cursor:'pointer'}}>Book Now</button>
                                   : <span>Not Available</span>           
    }
     
            </div> 
          
     
            )}

            </div>
            </div>
            {console.log("Value of showChat: "+this.state.showChat)}
            <div className = "bot" style={chatStyle}>
        <div style ={{display: this.state.showChat ? "" : "none"}} >
          <Chat></Chat>
        </div>      
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!this.state.showChat 
            ? <button className="btn" onClick={() => this.startChat()}>click to chat... </button> 
            : <button className="btn" onClick={() => this.hideChat()}>click to hide... </button>}
        </div>
            </div>

            <Footer/>
            </>
          )
          
        
       
    }
}


export default Data;