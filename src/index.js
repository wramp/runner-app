import React from "react";
import ReactDOM from "react-dom";
import LoginPage from "./pages/login";
import PostsPage from "./pages/posts";

import ProtectedRoute from "./protected-route";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.scss";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <ProtectedRoute exact path="/posts" component={PostsPage} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
