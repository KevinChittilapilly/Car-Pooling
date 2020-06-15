import React from 'react';
import { Route, Router ,Switch} from 'react-router-dom';
import Home from '../Home';
import Callback from '../callback';
import Auth from '../auth';
import AuthenicatedRoute from '../AuthenticatedRoute'
import history from '../history';
import Data from '../components/Data'
import Cart from './Cart'
import AboutUs from '../AboutUs';
import Catalog from '../Catalog';
import UploadRide from '../UploadRide';
import Footers from '../Footer'
import Purchase from '../purchase'
import AdminLogin from '../AdminLogin'
import DriverPage from '../DriverPage'
import DriverList from './DriverList'
import History from './History/history'
import CheckoutForm from '../CheckoutForm'
import RegistrationPage from './RegistrationPage'
import UserHistory from './UserHistory'
import AdminPage from '../AdminPage';
import EditPage from '../EditPage';
import AdminUpload from '../AdminUpload';
import Cancel from './History/Cancel'
import SharedUser from './History/SharedUser'
import Feedback from './Feedback'
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    
    auth.handleAuthentication();
  }
}

const Routes = () => (
  <Router history={history} component={Home}>
    <div>
      <Switch>
    <Route path="/" exact render={(props) => <Home auth={auth} {...props} />} />
    <AuthenicatedRoute path="/data" component={ Data } />
    <Route path="/AboutUs" component={ AboutUs } />
      <Route path="/Catalog" component={ Catalog } />
      <Route path="/UploadRide" component={ UploadRide } />
      <Route path="/footer" component={ Footers } />
      <Route path="/cart" component={ Cart } />
      <Route path="/reg" component={ RegistrationPage } />
      <Route path="/purchase" component={ Purchase } />
      <Route path="/adminPage" component={ AdminPage } />
      <Route path="/editPage" component={ EditPage } />
      <Route path="/userHistory" component={ UserHistory } />
      <Route path="/admin" component={ AdminLogin } />
      <Route path="/driver" component={ DriverPage } />
      <Route path="/driverHistory" component={ DriverList } />
      <Route path="/hist" component={ History } />
      <Route path="/adminRide" component={ AdminUpload } />
      <Route path="/cancel" component={ Cancel } /> 
      <Route path="/shareduser" component={ SharedUser } />
      <Route path="/Feedback" component={ Feedback } />  
      <Route path="/checkout" component={ CheckoutForm } />
      <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
      
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }}/>
      <Route component={ErrorComponent} />
      </Switch>
     
    </div>
    
  </Router>
  
);




function ErrorComponent(){
  return <div>Error! Page not found</div>
}
export default Routes;