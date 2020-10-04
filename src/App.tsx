import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
