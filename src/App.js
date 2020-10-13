import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import UsersComponent from './Components/UsersComponent/UsersComponent';
import AdminsComponents from './Components/AdminsComponent/AdminsComponents';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/usersComponent">
            <UsersComponent />
          </Route>
          <Route path="/adminsComponent">
            <AdminsComponents />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
