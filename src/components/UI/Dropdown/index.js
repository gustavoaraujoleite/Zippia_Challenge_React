import classes from './style.module.css'

export default function Drop(props) {
  return (
    <select defaultValue={"DEFAULT"} onChange={props.onSelect} className={classes.container}>
      <option value="DEFAULT" disabled hidden>
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
