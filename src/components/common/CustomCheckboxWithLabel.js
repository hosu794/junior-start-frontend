import { useField } from "formik";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import { ErrorMsg } from "../../styles/formStyles";



export const CustomCheckboxWithLabel = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            type="checkbox"
                            name={props.name}
                            color={props.color}
                            {...field}
                        />
                    }
                    label={props.label}
                />
            </FormGroup>
            {meta.touched && meta.error ? (
                <ErrorMsg className="error">{meta.error}</ErrorMsg>
            ) : null}
        </>
    );
};

