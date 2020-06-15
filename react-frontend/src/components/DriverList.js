import React, { Component } from 'react';
import axios from 'axios'

class DriverList extends Component{
    constructor(props){
        super(props);
        this.state={
            x:[],
        };
    }
    componentDidMount(){
        {
            console.log("here")
        axios.get("/name/"+this.props.location.state.key).then(response=>(response.data))
        .then((data)=>{
           
            this.setState({
                x:data,
                
                
                
            })
        })
        }
    }
    
    render(){
        console.log(this.props.location.state.key)
        return(
            <>
            {this.state.x?                          
      <>   
      <h2 className="center">People Who have booked your rides: </h2>   
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
export default DriverList;