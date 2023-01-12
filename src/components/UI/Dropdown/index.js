/**
 * Component responsible for rendering a Dynamic Dropdown
 */

import classes from "./style.module.css";

export default function Drop(props) {
  return (
    <select
      defaultValue={props.defaultValue}
      onChange={props.onSelect}
      className={classes.container}
    >
      <option value={props.defaultValue} disabled hidden>
        -- Select Company --
      </option>
      <option value="all">-- All Companies --</option>
      {props.data.map((element) => (
        <option key={element.id} value={element.value}>
          {element.company}
        </option>
      ))}
    </select>
  );
}
