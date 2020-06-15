import React,{Component} from 'react'
import axios from 'axios'

class SharedUser extends Component{
    constructor(props){
        super(props);
        this.state={
            x:[]
        }
    }
    handleGoBack=()=>{
        
        this.props.history.push({
            pathname:"home",
            
            
           });
    }
    componentDidMount(){
        if(this.props.location.state!==undefined){
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
        return(
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
<div className="center">
<button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleGoBack()}} style={{marginLeft:'20px'}}>Go Back</button>
                                        
</div>
            </>
        )
    }
}
export default SharedUser;