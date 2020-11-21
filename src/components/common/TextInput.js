import { useField } from "formik";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import { ErrorMsg } from "../../styles/formStyles";

export const TextInput = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <TextField {...field} {...props} />
            {meta.touched && meta.error ? (
                <ErrorMsg className="error">{meta.error}</ErrorMsg>
            ) : null}
        </>
    );
};