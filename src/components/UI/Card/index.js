/**
 * Component responsible for rendering the Card Structure
 */

import React from "react";
import classes from "./style.module.css";

export default function Card(props) {
  return (
    <div className={classes.container}>
      <h1 className={classes.title_text}>{props.title}</h1>
      <h3 className={classes.company_text}>{props.company}</h3>

      <p className={classes.description_text}>{props.description}</p>
    </div>
  );
}
