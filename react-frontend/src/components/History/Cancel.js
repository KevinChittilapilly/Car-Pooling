import React,{Component} from 'react'
import ApiService from '../../ApiService'
import axios from 'axios'

class Cancel extends Component{
    constructor(props){
        super(props);
        this.state={
            user:[]
        }
    }
    handleCancelUser=()=>{
        if(this.state.user.driver_id!=null){
        let u = {driver_id: this.state.user.driver_id,name: this.state.user.name, passengers: this.state.user.passengers+1, license: this.state.user.license, pickup_date: this.state.userpickup_date, pickup_time: this.state.user.pickup_time,emailid:this.state.user.emailid, number: this.state.user.number,car_name:this.state.user.car_name,droptime:this.state.user.droptime};
        
        ApiService.editUser(u)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                //console.log("done")
            });
            this.props.history.push({
                pathname:"/home",
                
               });
            }
    }
    componentDidMount(){
        axios.get("/oneid/"+this.props.location.state.key).then(response=>(response.data))
        .then((data)=>{
           
            this.setState({
                user:data,
                
                
                
            })
        })
        

        }
    
    render(){
        console.log(this.state.users)
        return(
            <>
            <div className="center">
                <div>Your Ride is Cancelled</div>
             <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleCancelUser(this.state.user)}} style={{marginLeft:'20px'}}>Go Back</button>
             </div>                      
            </>
        )
    }

}
export default Cancel;