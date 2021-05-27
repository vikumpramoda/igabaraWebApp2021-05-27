import React from 'react';
//import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import ReservationDateApp from './components/ResrvationDate/ReservationDateApp';
import AppointmentForm from './components/ResrvationDate/AppointmentForm';
import GuestDetails from './components/GuestDetails/guestForm'
import 'antd/dist/antd.css';
import './index.scss';
//import App from './components/ResrvationDate/ReservationDateApp';
//import loginApp from './components/login/loginApp';




import { BrowserRouter as Router, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

//import Navbar from "./components/login/layout/Navbar";
import Landing from "./components/login/layout/Landing";
import Register from "./components/login/auth/Register";
import Login from "./components/login/auth/Login";
import PrivateRoute from "./components/login/private-route/PrivateRoute";
import Dashboard from "./components/login/dashboard/Dashboard";



import "./App.css";
import HomePage from './components/Homepage/HomeP';



// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    
    <div className="App">

      <BrowserRouter>
      
      <Route path="/calendar" render={ReservationDateApp}/>
      <Route exact path='/create-appt' component={AppointmentForm} />
      
      <Route  path='/homepage' component={HomePage} />
     
      
     
     
      
      </BrowserRouter>
     
      <Provider store={store}>
        <Router>
          <div className="App">
            
            <Route exact path="/signup" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path='/guest' component={GuestDetails} />
            </Switch>
          </div>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
