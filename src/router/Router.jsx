import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <switch>
      {/* exact（完全一致）がないと常にRoot（/）の情報が表示されてしまう */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.Children}
              </Route>
            ))}
          </switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <switch>
            {Page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.Children}
              </Route>
            ))}
          </switch>
        )}
      />
    </switch>
  );
};
