import * as Yup from 'yup'

export const loginValidationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
    username: Yup.string().required("Username is required")
})
