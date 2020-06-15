import React,{Component} from 'react';
const stylingfooter={
    color:'white',
     bottom: '0',
     width: '100%',
     height: '40px',
     backgroundColor: '#222222'
   }
class Footers extends Component{
    render(){
      return(
        <footer className="footer" style={stylingfooter}>
                    <span className="text-muted">All Rights Reserved 2020 @Virtusa-CarPooling</span>
        </footer>
      )
    }
    }
    export default Footers;