import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import DataPage from './components/DataPage'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import { NavLink, Route, Switch, HashRouter as Router } from 'react-router-dom'
import NotFound from './components/NotFound'
import { surveys } from './config/fields.json'
import Footer from './components/Footer';
import ReactGA from 'react-ga'
import Utils from './Utils'
import ContactPage from './components/ContactPage';

const trackingId = "UA-164717476-1";
// Only enable if not in a European timezone
if(Utils.analyticsActive) {
  ReactGA.initialize(trackingId);
}

class App extends React.Component {
  
  render() {
    // This is a suboptimal way to do this, but I want to treat each DataPage as a separate component
    // This way the component mounts and unmounts each time
    let surveyRoutes = Object.keys(surveys).map(surveyId => {
        return (
            <Route exact path ={`/survey/${surveyId}`} 
              component = {(props) => <DataPage surveyId = {`${surveyId}`} history = {props.history}/> } />
        )
    })
    return (
      <Router basename = "/">
          <div className="App container">
          <NavLink exact to="/">
              <h2><strong>Understanding Economics</strong></h2>
          </NavLink> 
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={AboutPage}/>
            {surveyRoutes}
            <Route exact path = "/contact" component={ContactPage} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
