import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import "./Login.css";




class AdminLogin extends Component{
  constructor(props){
    super(props);
    this.state={
      username:'',
      pwd:''
    }
  }
  handleClick(){
    if(this.state.username=="admin" && this.state.pwd=="admin"){
      this.props.history.push({
        pathname:"/adminPage",
        
       });
    }
    else{
      alert("Wrong Username or Password")
    }
  }
 
  render(){
    return(
      <div>
      <MuiThemeProvider>
        <div>
        <AppBar
           title="Login"
         />
         <TextField
           hintText="Enter your Username"
           floatingLabelText="Username"
           onChange = {(event,newValue) => this.setState({username:newValue})}
           />
         <br/>
           <TextField
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({pwd:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
       </div>
       </MuiThemeProvider>
    </div>
    )
  }
}
const style = {
  margin: 15,
 };
export default AdminLogin