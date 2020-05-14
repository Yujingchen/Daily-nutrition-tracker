import React, { Component } from "react";
import MainLayout from "./components/layout/MainLayout/MainLayout"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/View/Home.js";
import store from "./store";
import { Provider } from "react-redux";
import "./styles/main.scss"
import './styles/share.scss';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </MainLayout>
        </Router>
      </Provider>
    );
  }
}

export default App;
