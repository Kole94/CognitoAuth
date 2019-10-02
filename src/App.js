import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import ConfigurStore from './store/configureStore'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Header from './Components/navbar/Header'

import Drugs from './Components/Drugs'
import Hormones from './Components/Hormones'
import Location from './Components/Location'
import Pregnancies from './Components/Pregnancies'
import About from './Components/About'
import NecessaryAnalysis from './Components/NecessaryAnalysis'
import Report from './Components/Report'
import Questionnaires from './Components/Questionnaires'
import ExoticMixes from './Components/ExoticMixes'
import VitaminBoosters from './Components/VitaminBoosters'
import WildPick from './Components/WildPick'
import Messages from './Components/Messages'
import Calls from './Components/Calls'
import Consultations from './Components/Consultations'
import MyProfile from './Components/MyProfile'
import Invoices from './Components/Invoices'
import Settings from './Components/Settings'


const store = ConfigurStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/about' exact component={About} />
            <Route path='/necessaryAnalysis' exact component={NecessaryAnalysis} />
            <Route path='/location' exact component={Location} />
            <Route path='/report' exact component={Report} />
            <Route path='/questioneer' exact component={Questionnaires} />
            <Route path='/hormones' exact component={Hormones} />
            <Route path='/drugs' exact component={Drugs} />
            <Route path='/Pregnancies' exact component={Pregnancies} />
            <Route path='/exoticMixes' exact component={ExoticMixes} />
            <Route path='/wildPick' exact component={WildPick} />
            <Route path='/vitaminBoosters' exact component={VitaminBoosters} />



          </Switch>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;