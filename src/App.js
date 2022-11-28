import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Shell from './Shell.js';

import Login from './pages/Login';
import Register from './pages/Register';

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
                </Switch>
            </Shell>
        </BrowserRouter>
    );
};

export default App;