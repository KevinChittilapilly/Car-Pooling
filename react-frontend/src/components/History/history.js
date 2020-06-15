import React,{Component} from 'react'
import axios from 'axios'
import ApiService from '../../ApiService'
import Item1 from '../../images/aulto.jpg'
import Item2 from '../../images/esteem.jpg'
import Item3 from '../../images/i20.jpg'
import Item4 from '../../images/r15.jpg'
import Item5 from '../../images/santro.png'
import Item6 from '../../images/swift.png'
var i=0;
const styling={
    height: '50px',
    width: '300px',
    backgroundColor:'white',
    marginLeft:'600px',
    
     
    cursor:'text'

}
class History extends Component{
    constructor(props){
        super(props);
        this.state={
            
            x:'',
            y:'',
            x1:'',
            x2:'',
            user:[],
            user1:[],
            user2:[],
            images:[Item1,Item2,Item3,Item5,Item4,Item6]
        };
        
    }
    handleChange=(event)=> {
        this.setState({y: event.target.value});
      }
      handleSubmit=(event)=>{
        
        event.preventDefault();  
        {
            console.log("/getid/"+this.state.y)
        axios.get("/getid/"+this.state.y).then(response=>(response.data))
        .then((data)=>{
           
            this.setState({
                user:data,
                
            })
        })
        i=i+1
        if(i===2)
            console.log(this.state.user)
        
      }
    }
    
    handleCheckUser=(id)=>{
        this.props.history.push({
            pathname:"/shareduser",
            state:{
                key:id
             }
            
            
           });
    }

    handleOldUser=()=>{
            this.setState({
                x:true
            })
    }
    handleNewUser=()=>{
        this.props.history.push({
            pathname:"/reg",
            
           });
    }
    handleCancelUser = (key2) => {
        ApiService.fetchUserById(key2.driverid)
            .then(res => {
                console.log(res.data)
                this.setState({
                    user1:res.data

                });
                
            })
        //var key2=this.props.location.state.key2.key;
        //let user1 = {driver_id: this.props.location.state.key.driver_id,name: this.props.location.state.key.name, passengers: this.props.location.state.key.passengers-1, license: this.props.location.state.key.license, pickup_date: this.props.location.state.key.pickup_date, pickup_time: this.props.location.state.key.pickup_time,emailid:this.props.location.state.key.emailid, number: this.props.location.state.key.number,car_name:this.props.location.state.key.car_name,droptime:this.props.location.state.key.droptime};
        let user2={user_id:key2.user_id,name:key2.name,number:key2.number,address:key2.address,emailid:key2.emailid,driverid:key2.driverid,dname:key2.dname,demail:key2.demail,dnumber:key2.dnumber};
        
            
             
        axios.put("http://localhost:8090/put2",user2)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                //console.log("I have reached here");
            });
            this.props.history.push({
                pathname:"/cancel",
                state:{
                    key:key2.driverid
                 }
                
               });
            
    }

    render(){

        return(
        <>
        <h2 className="center">Are you a Registered User or New User</h2>
        <div className="center">
        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleNewUser()}} style={{marginLeft:'20px'}}>New User</button>
        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleOldUser()}} style={{marginLeft:'20px'}}>Registered User</button>
        </div>
        <br/>
        {this.state.x? <>
        <div className="center">Enter your Registered id</div>
        <form style={styling}>
        <label>
        <input type="text" name="name" value={this.state.y} onChange={this.handleChange} />
        </label>
        <div className="center">
        <input className="center" type="submit" value="Submit" onClick={this.handleSubmit} />
        </div>
        </form>
         
        </>:<></>
        
        }
        {
        i%2===0 && i>0 && this.state.user.dnumber!=null?
            <>
            <br  />
            <br  />
            <div className="center" >
                <h4>Your Bookings</h4>
                <div className="container"> 
                <img src={this.state.images[this.state.user.driverid-1]} style={{height:'200px',width:'200px'}}  className=""/>
                    
                    </div>
                                
                                    <div className="item-desc">
                                        
                                        <p><b>Owner Name: </b>{this.state.user.dname}</p>
                                        
                                        <p><b>Contact Details: </b>{this.state.user.dnumber}</p>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleCancelUser(this.state.user)}} style={{marginLeft:'20px'}}>Cancel Ride</button><br/>
                                        <br/>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleCheckUser(this.state.user.driverid)}} style={{marginLeft:'20px'}}>See who you are riding with</button>
                                           

                                       
                                    </div>
                                    
                                </div>
     
            </>
            :
                        <>
            {i%2===0 && i>0 && this.state.user.dnumber==null?
            <>
            <h2 className="center">You have booked no rides
            </h2>
                </>
            :
            <></>    
        }
            </>      
                      
    }                   
        </>
           
        )
    }
}
export default History;