import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Mylist from './Pages/my-list/mylist';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import icon from './icon.png';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home.js';
import SimpleBottomNavigation from "./components/Nav";
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './Utils/Common';


function App() {
  
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <div className="lo">
            <img  src={icon} alt="logo" />
</div>
            <h1>Amazeflix</h1>
            <div className="ut">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
            </div>
          </div>
          <br/>
          
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}  />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/trend" component={Trending}  />
              <PrivateRoute path="/movies" component={Movies} />
              <PrivateRoute path="/series" component={Series} />
              <PrivateRoute path="/search" component={Search} />
              <PrivateRoute path="/mylist" component={Mylist} />
         
            </Switch>
           
          </div> <SimpleBottomNavigation />
        </div>
        
      </BrowserRouter>
     
    </div>
    
  );
}

export default App;