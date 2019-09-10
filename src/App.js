import React from 'react';
import './App.css';
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'
import Comp3 from './Components/Comp3'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import { Provider } from 'react-redux'
import ConfigurStore from './store/configureStore'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';

const store = ConfigurStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />

            <PrivateRoute path='/comp1' exact component={Comp1} />
            <PrivateRoute path='/comp2' exact component={Comp2} />
            <PrivateRoute path='/' exact component={Comp3} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;