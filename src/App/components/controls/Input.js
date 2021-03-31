import { TextField } from "@material-ui/core";
import React from "react";

export default function Input(props) {
  const { name, label, error = null, value, onChange, ...other } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}
