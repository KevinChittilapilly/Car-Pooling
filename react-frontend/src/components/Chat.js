import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';

class Chat extends Component{
    render(){
        return(
            <>
            <ChatBot
  steps={[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger:'4'
    },
    {
        id: '4',
        message: 'Welcome to our Website. Here are some of the features we offer.',
        trigger:'5'
      },
      {
          id:'5',
          
        options: [
          { value: 1, label: '1. Book Ride', trigger: '6' },
          { value: 2, label: '2. Check Your Bookings', trigger: '7' },
          { value: 3, label: '3. See who you are sharing the ride with', trigger: '8' },
          { value: 4, label: '4. Upload a Ride', trigger: '9' },
          {value:5, label:'Ran into some issues?', trigger: '10'},
          {value:6 ,label:'Exit',trigger:'11'}
        ],
      },
      {
          id:'6',
          message:'You can Book a ride by Clicking The green Button "Book Now" on available rides',
          trigger:'5'
      },
      {
        id:'7',
        message:'You can see your Booked rides by navigating to Your Rides on the Navbar and entering your registered id',
        trigger:'5'
    },
    {
        id:'8',
        message:'Once you see your bookings u will see a button "See who you are riding with" click that to see who you are riding with',
        trigger:'5'
    },
    {
        id:'9',
        message:'You can upload a new ride by clicking on Upload ride on nav bar and filling out the details',
        trigger:'5'
    },
    {
        id:'10',
        message:'Pls email us at ckevinvarghese1998@gmail.com with your issues and we will get back to you within 8 working hours.',
       
        trigger:'5'
    },
    {
        id:'11',
        message:'Please Visit Again',
        end:true,
        
    },
  ]}
/>
            </>
        )
    }
}
export default Chat;