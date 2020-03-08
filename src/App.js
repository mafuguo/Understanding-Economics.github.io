import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar'
import DataPage from './components/DataPage'
import HomePage from './components/HomePage'
import BackgroundPage from './components/BackgroundPage'
import { Route, Switch, HashRouter as Router } from 'react-router-dom'
import NotFound from './components/NotFound'
import { surveys } from './config/fields.json'


class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      surveyData : null,
      selectedGroup : null,
      selectedQuestion : null
    }
  }
  
  render() {
    // This is a suboptimal way to do this, but I want to treat each DataPage as a separate component
    // This way the component mounts and unmounts each time
    let surveyRoutes = Object.keys(surveys).map(surveyId => {
        return (
            <Route exact path ={`/survey/${surveyId}`} component = {() => <DataPage surveyId = {`${surveyId}`}/> } />
        )
    })

    
    return (
      <Router basename = "/">
        <div className="App container">
          <h2>Understanding Economics</h2>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/background" component={BackgroundPage}/>
            {surveyRoutes}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
