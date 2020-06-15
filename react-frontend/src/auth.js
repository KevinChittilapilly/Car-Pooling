import auth0 from 'auth0-js';
import axios from 'axios'
import history from './history';

export default class Auth {
  // Please use your own credentials here
  auth0 = new auth0.WebAuth({
    domain: 'car-pooling.auth0.com',  //dev-4fxfpbxj.auth0.com
    clientID: 'AhkY02QEZNrlhTYJpoC8Nw8XTFN5lARx',  //reZSOIDP6MZ3h7nluPKrvRj5RztXN8F5
    redirectUri: 'http://localhost:3000/callback' , 
    
    responseType: 'token id_token',
    scope: 'openid'
  });
  

  login = () => {
    this.auth0.authorize();
  }
  


  // parses the result after authentication from URL hash
  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        //console.log(authResult)
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
      
     
    });
    
     
    
  }

  // Sets user details in localStorage
  setSession = (authResult) => {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/home');
  }

  // removes user details from localStorage
  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/home');
  }

  // checks if the user is authenticated
  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}