/**
 * Component responsible for rendering the Error Page if Route does not match
 */

import classes from "./style.module.css";

export default function NotFound() {
  return (
    <div className={classes.container}>
      <h1>PAGE NOT FOUND</h1>
      <h3>
        Please, try adding <span className={classes.span_text}>/test/jobs</span>{" "}
        as an end point to the link
      </h3>
    </div>
  );
}
