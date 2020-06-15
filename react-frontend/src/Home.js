import React, { Component } from 'react';
import img1 from '../src/images/img2.jpg';
import Data from '../src/components/Data'


import Catalog from './Catalog';


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


class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  AboutUsPage=()=>{
    this.props.history.push('/AboutUs');
  }

    
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    //console.log(this.props)
    return (

<div>
  
        {
          (isAuthenticated()) && <Data d={this.logout} p={this.props}/>
     
        }
        
        
        {
          !isAuthenticated() && <Catalog c={this.login} d={this.AboutUsPage}/>

        }
      </div>
      
      );
     
   
   
    
    
    
    }//render method closing tag

  }

  export default Home;