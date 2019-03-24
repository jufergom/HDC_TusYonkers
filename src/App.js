import React, { Component } from "react";
import "./App.css";
import SampleComponent from "./components/SampleComponent";
import { Provider as ReduxProvider } from "react-redux";
import  {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import configureStore from "./modules/store";
import LoginAdminJonkers from "./components/Login";
import Principal from "./components/Principal";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Principal}></Route>
      <Route path ="/Login" component={LoginAdminJonkers}></Route>
    </Switch>
  </Router>
);

class App extends Component {
  
  render() {
    return (
      <div className="BackgroundDiv">
          <header></header>




          {/* Redux */}
          <div>
          <ReduxProvider store={reduxStore}>
            <div className="App">
              {routing}
            </div>
          </ReduxProvider>
          </div>
      </div>

    );
  }
}

export default App;