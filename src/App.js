import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Shell from './Shell.js';

import Login from './pages/Login';
import Register from './pages/Register';
import AdminHome from './pages/Admin/HomePage';
import HrHome from './pages/HR/HomePage';
import StudentHome from './pages/Student/HomePage';




const App = () => {
  return (
    <BrowserRouter>
      <Shell>
        <Switch>
          <Route
            exact
            path="/"
            component={Login}
          />
          <Route
            exact
            path="/login"
            component={Login}
          />
          <Route
            exact
            path="/register"
            component={Register}
          />
          <Route
            exact
            path="/adminhomepage"
            component={AdminHome}
          />
          <Route
            exact
            path="/stuhomepage"
            component={StudentHome}
          />
          <Route
            exact
            path="/hrhomepage"
            component={HrHome}
          />
        </Switch>
      </Shell>
    </BrowserRouter>
  );
};

export default App;