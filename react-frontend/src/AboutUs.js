import React, { Component } from 'react';
import Virtusa from '../src/images/virtusa.jpg'
const styling = {
  
    height: '600px',
    width: '100%',
    backgroundPosition: 'center',
    backgroundImage: `url(${Virtusa})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'black',
    position: 'relative',
    display: 'flex'
  };
  

class AboutUs extends Component {
  render() {
    return (
     <div>
     <div style={styling}>
     </div>
Virtusa Corporation is a global provider of Digital Business Transformation, Digital Engineering, and
Information Technology (IT) outsourcing services that accelerate our clients’ journey to their Digital
Future. Using a combination of digital strategy, digital engineering, business implementation, and IT
platform modernization services, Virtusa helps clients execute successful end-to-end digital business
transformation initiatives.
Virtusa engages its clients to re-imagine their business models and develop strategies to defend and
grow their business by introducing innovative products and services, developing distinctive digital
consumer experiences, creating operational efficiency using digital labor, developing operational and IT
platforms for the future, and rationalizing and modernizing their existing IT applications infrastructure.


      </div>
    );
  }
}

export default AboutUs;