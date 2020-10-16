import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min.js';
import './App.css';
import Home from './components/Home/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import Order from './components/Dashboared/Order/Order';
import Servicelist from './components/Dashboared/Servicelist.js/Servicelist';
import Review from './components/Dashboared/Review/Review';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/servicelist">
              <Servicelist></Servicelist>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
