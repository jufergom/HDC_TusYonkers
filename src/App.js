import React, { Component } from "react";
import "./App.css";
import SampleComponent from "./components/SampleComponent";
import { Provider as ReduxProvider } from "react-redux";
import  {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import configureStore from "./modules/store";
import LoginAdminJonkers from "./components/Login";
import Principal from "./components/Principal";
import ChatClientService from "./components/Chat";
import AdminFrom from "./components/Admin";
import ListCars from "./components/ListCars";
import ListBici from "./components/ListBici";
import ListMoto from "./components/ListMoto";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Principal}></Route>
      <Route path ="/Login" component={LoginAdminJonkers}></Route>
      <Route path ="/Contact" component={ChatClientService}></Route>
      <Route path ="/Admin" component={AdminFrom}></Route>
      <Route path="/ListCars" component={ListCars}></Route>
      <Route path="/ListBike" component={ListBici}></Route>
      <Route path="/ListMoto" component={ListMoto}></Route>
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