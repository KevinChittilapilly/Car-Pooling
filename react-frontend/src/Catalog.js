import React, { Component } from 'react';
import Footer from './Footer';
import Item1 from '../src/images/aulto.jpg'
import Item2 from '../src/images/esteem.jpg'
import Item3 from '../src/images/i20.jpg'
import Item4 from '../src/images/r15.jpg'
import Item5 from '../src/images/santro.png'
import Item6 from '../src/images/swift.png'
import img1 from '../src/images/img2.jpg'
import axios from 'axios'
import AdminLogin from './AdminLogin'

const searchStyle={
    height: '50px',
    width: '1000px',
    backgroundColor:'white',
    marginLeft:'180px',
    
    border:'1px solid #c5c5c5', 
    cursor:'text'

}
var i=0;
const styling = {
  
    height: '600px',
    width: '100%',
    backgroundPosition: 'center',
    backgroundImage: `url(${img1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex'
  };

class Catalog extends Component{
    constructor(props){
        super(props);
        this.state={
            search:[],
            users: [],
            x:[],
            images:[Item1,Item2,Item3,Item5,Item4,Item6]
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
        isPassengers(passengers){
            if(passengers>0){
                return false;
            }
            else{
                return true;
            }
           
        }
    render(){
        let filtereditems=this.state.users.filter(
            (item)=>{
                return item.pickup_time.indexOf(this.state.search)!==-1;
            }
        );
        console.log(this.props)
        
        return(
            <>
            <nav style={{width:'1500px',backgroundColor:'black'}}>
              <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="newPage.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" onClick={this.props.d}>About Us</a></li>
                    
                    <li class="nav-item"><a class="nav-link" href="/admin">Admin Login</a></li>
                    <li class="nav-item"><a class="nav-link" href="/driver">Driver Login</a></li>
                    <li class="ml-md-auto"><a class="nav-link" onClick={this.props.c} style={{backgroundColor:'green',marginLeft:'1000px'}} >Get Started</a></li>
                </ul>
              </nav>
              <body style={styling}>
              
     
            <h1>Welcome to the Carpooling System in Virtusa</h1>
           
           
            </body>
            <h3 className="center">Browse Our Catalog</h3>
            <br/>
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
           

            {(item.passengers ) ? <button className="card-title" onClick={() =>this.addToCart(item)}  style={{ backgroundColor:'green', disabled:'red', cursor:'pointer'}}>Book Now</button>
                                   : <span>Not Available</span>           
    }
     
            </div> 
          
     
            )}
            </div>
            </div>
            <Footer />

            </>
        )
       
    }
}

export default Catalog;