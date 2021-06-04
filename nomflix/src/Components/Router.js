import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from "react-router-dom";
import Home from "Routes/Home/HomePresenter";
import TV from "Routes/TV/TVPresenter";
import Search from "Routes/Search/SearchPresenter";
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);