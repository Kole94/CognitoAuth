import React from 'react';
import './App.css';
import Login from './Components/Login'
import Start from './Components/Start'
import Registration from './Components/Registration'
import { Provider } from 'react-redux'
import ConfigurStore from './store/configureStore'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import St from './Components/St'
import Header from './Components/Header'

const store = ConfigurStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
          <Route path='/' exact component={Start} />

            <Route path='/login' exact component={Login} />
            <Route path='/registration' exact component={Registration} />
            <Route path='/st' exact component={St} />

          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;