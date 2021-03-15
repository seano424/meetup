import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import FavMeetups from "./pages/FavMeetups";
import NewMeetups from "./pages/NewMeetups";
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/all" exact>
          <AllMeetups />
        </Route>
        <Route path="/favs">
          <FavMeetups />
        </Route>
        <Route path="/new">
          <NewMeetups />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
