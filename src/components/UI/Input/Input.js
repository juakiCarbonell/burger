import React from "react";

import classes from "./Input.module.css";

export default function Input(props) {
  let inputElement;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid)
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(' ')}
          onChange={props.changed}
          value={props.value}
        >
          {props.elementConfig.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          onChange={props.changed}
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
}
