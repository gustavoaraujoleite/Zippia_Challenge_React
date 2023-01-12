/**
 * Component responsible for rendering the Route Navigation
 */

import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import NotFound from "./pages/NotFound";
import JobsPage from "./pages/JobsPage";
import { useTransition, animated } from "react-spring";

export default function Routes() {
  const location = useLocation();

  const transition = useTransition(location, {
    from: { opacity: 0, transform: "translateY(50px)", position: "absolute" },
    enter: { opacity: 1, transform: "translateY(0)", position: "absolute" },
    leave: { opacity: 0, transform: "translateY(50px)", position: "absolute" },
  });

  return transition((props, item) => (
    <animated.div style={props}>
      <BrowserRouter>
        <Switch location={item}>
          <Route path="/test/jobs">
            <JobsPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </animated.div>
  ));
}
