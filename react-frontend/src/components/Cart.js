import React,{Component} from 'react'
import Purchase from '../purchase'
import { Link, useHistory } from 'react-router-dom';
import Item1 from '../images/aulto.jpg'
import Item2 from '../images/esteem.jpg'
import Item3 from '../images/i20.jpg'
import Item5 from '../images/r15.jpg'
import Item4 from '../images/santro.png'
import Item6 from '../images/swift.png'
import UserHistory from './UserHistory'
import PurchaseButton from '../purchase'
import ApiService from '../ApiService'
import Popup from "reactjs-popup";

var data={};
var x=false;
var y=false;
var payment_done=false;
class Cart extends Component{
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
            images:[Item1,Item2,Item3,Item4,Item5,Item6],
            userq:'',
            message:null,
            
        }
        this.saveUser = this.saveUser.bind(this);
    }
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
        e.preventDefault();
       var key2=this.props.location.state.key2.key;
        let user = {driver_id: this.props.location.state.key.driver_id,name: this.props.location.state.key.name, passengers: this.props.location.state.key.passengers-1, license: this.props.location.state.key.license, pickup_date: this.props.location.state.key.pickup_date, pickup_time: this.props.location.state.key.pickup_time,emailid:this.props.location.state.key.emailid, number: this.props.location.state.key.number,car_name:this.props.location.state.key.car_name,droptime:this.props.location.state.key.droptime};
        let user1={user_id:key2.user_id,name:key2.name,number:key2.number,address:key2.address,daddress:key2.daddress,emailid:key2.emailid,driverid:this.props.location.state.key.driver_id,dname:this.props.location.state.key.name,demail:this.props.location.state.key.emailid,dnumber:this.props.location.state.key.number};
        this.setState({
            userq:user1
        })
        ApiService.editUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                //console.log("done")
               
            });
        ApiService.editUser1(user1)
            .then(res => {
                this.setState({userq:user1,message : 'User added successfully.'});
                
            });
           console.log(this.state.userq)
           console.log(this.state.message)
            this.payment_done=true;
    }
    feedback=()=>{
        this.props.history.push({
            pathname:"/feedback",
            state:{
               key:this.state.userq
             }
           });
    }
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
    onToken = (token) => {
        console.log(token);
      };
    handlePayment=()=>{
        this.props.history.push('/checkout')
    }
    handleGoBack=(user)=>{
       x=false;

        if(!y){
        this.props.history.push({
            pathname:"/home",
            state:{
               
             }
           });
    }
    else{
        this.props.history.push({
            pathname:"/home",
            state:{
                keey:user
             }
           });
    }
}
    isUserVerified=(y)=>{
        return y;
    }
    render(){
       
        let user=(this.props.location.state.key)
        
        let item=this.props.location.state.pic
        var data = {
            name: this.props.location.state.key.name,
            driver_id: this.props.location.state.key.driver_id,
            car_name: this.props.location.state.key.car_name,
            droptime:this.props.location.state.key.droptime,
            pickup_time:this.props.location.state.key.pickup_time,
            pickup_date:this.props.location.state.key.pickup_date,
            license:this.props.location.state.key.license,
            number:this.props.location.state.key.number,
            passengers:this.props.location.state.key.passengers-1
        }
        
        
        return(
           <>
             
        
         <div>

            <h1 className="center">Book This Ride</h1>
            <div className="center" key={user.driver_id}>
                <div className="container"> 
                    <img src={this.state.images[user.driver_id-1]} style={{height:'200px',width:'200px'}}  className=""/>
                    </div>
                                
                                    <div className="item-desc">
                                        
                                        <p><b>Owner Name: </b>{user.name}</p>
                                        <p><b>PickUp Time: </b> {user.pickup_time}</p> 
                                        <p><b>Seats Available: </b>{user.passengers}</p>
                                        <p><b>Owner Number: </b>{user.number}</p>
                                        <p><b>License Number: </b>{user.license}</p>
                                        <p><b>DropTime: </b>{user.droptime}</p>
                                   
                                 {   (this.isUserVerified(x)) ? (this.payment_done==true)?  (
                <button onClick={this.feedback} className="waves-effect waves-light btn pink remove" style={{ width: '10%' } }>FeedBack</button>
         ) : ( <PurchaseButton price="100">
            <button onClick={this.saveUser}  className="waves-effect waves-light btn pink remove" style={{ width: '10%' } }>Checkout</button>
          </PurchaseButton> ):  <Link to="/reg" onClick={()=>{x=true}}> Please Register First </Link>}
         
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleGoBack(user)}} style={{marginLeft:'20px'}}>Go Back</button>
                                       
                                    </div>
                                   
                                </div>
                                  
                               
        </div>
    </>
        )
    }

}
export default Cart