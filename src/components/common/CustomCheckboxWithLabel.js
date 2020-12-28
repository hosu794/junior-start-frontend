import {useField} from "formik";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";

export const CustomCheckboxWithLabel = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: "checkbox"});
    return (
        <>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            type="checkbox"
                            name={props.name}
                            color={props.color}
                            size={"small"}
                            {...field}
            />
          }
          label={props.label}
        />
      </FormGroup>
      {meta.touched && meta.error ? (
          <Box>
              <Typography color={"error"} variant={"caption"}>
                  {meta.error}
              </Typography>
          </Box>
      ) : null}
    </>
  );
};
