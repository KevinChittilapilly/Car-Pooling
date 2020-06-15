import React, { Component } from 'react';
import Item1 from '../images/aulto.jpg'
import Item2 from '../images/esteem.jpg'
import Item3 from '../images/i20.jpg'
import Item4 from '../images/r15.jpg'
import Item5 from '../images/santro.png'
import Item6 from '../images/swift.png'
import axios from 'axios'

class UserHistory extends Component{
    
   handleCancel=()=>{
       this.props.location.state=null;
    this.props.history.push({
        pathname:"/home",
        state:{
            key:this.state.driver_id
         }
       });
   }
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
        if(this.props.location.state!==undefined){
            console.log("here")
        axios.get("/name/"+this.props.location.state.key.driver_id).then(response=>(response.data))
        .then((data)=>{
           
            this.setState({
                x:data,
                
                
                
            })
        })
        }
    }
    render(){
      
        
        if(this.props.location.state==undefined){
            
            return(
                <>
                <div className="center"><h1>You have not booked any rides</h1></div>
                </>
            )
        }
        else{
            let user=this.props.location.state.key;
            console.log(this.state.x)
        return(
            <>
            <h1 className="center">Your Ride</h1>
            <div className="center" >
                <div className="container"> 
                <img src={this.state.images[user.driver_id-1]} style={{height:'200px',width:'200px'}}  className=""/>
                    
                    </div>
                                
                                    <div className="item-desc">
                                        
                                        <p><b>Owner Name: </b>{user.name}</p>
                                        
                                        <p><b>PickUp Time: </b>{user.pickup_time}</p>
                                        <p><b>Owner Number: </b>{user.number}</p>
                                        <p><b>Licence Number: </b>{user.license}</p>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleCancel(user)}} style={{marginLeft:'20px'}}>Cancel Ride</button>
                                       
                                 
                                       
                                    </div>
                                    
                                </div>
     {this.state.x?                          
      <>   
      <h2 className="center">People who are sharing this ride: </h2>   
     <table className="center">
     
     <th>Name</th>
     <th>Contact Details</th>
     
     
  
   { this.state.x.map(person => 
     <tr>
       <td>{person.name}</td>
       <td>{person.number}</td>

     </tr>
                 )}
</table>
</>  
:
<div>No riders</div>             
        }
            </>
        )
        }
    }

}

export default UserHistory;