import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      {/* exact（完全一致）がないと常にRoot（/）の情報が表示されてしまう */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.Children}
              </Route>
            ))}
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.Children}
              </Route>
            ))}
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        )}
      />
      {/* 存在しないルートを404へ */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
