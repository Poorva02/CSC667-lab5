import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


const App = () => {
  return (
    <div className="App">
      <div className="nav-bar">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/Dashboard">Dashboard</Link>
        </div>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
})

export default connect() (App);
