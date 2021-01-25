import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeComponent from "./pages/home";
import UpcomingComponent from "./pages/up_coming";
import SearchComponent from "./pages/search";
import DetailComponent from "./pages/detail_movies";

const Movies = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomeComponent />
        </Route>
        <Route path="/up-coming">
          <UpcomingComponent />
        </Route>
        <Route path="/search">
          <SearchComponent />
        </Route>
        <Route path="/movie/:slug~:id">
          <DetailComponent />
        </Route>
        <Route exact path="/">
          <HomeComponent />
        </Route>
      </Switch>
    </Router>
  );
};
export default Movies;
