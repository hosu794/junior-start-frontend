import {useField} from "formik";
import TextField from "@material-ui/core/TextField";
import React from "react";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";

export const TextInput = ({...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <TextField {...field} {...props} />
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
