/**
 * Component responsible for rendering the Header content for the entire app
 */

import React from "react";
import classes from "./style.module.css";

export function Header(props) {
  return (
    <>
      <nav className={classes.container}>
        <h1>Zippia Challenge</h1>
      </nav>
    </>
  );
}
