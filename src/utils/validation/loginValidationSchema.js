import * as Yup from 'yup'

export const loginValidationSchema = Yup.object().shape({
    password: Yup.string().required("Hasło wymagane"),
    email: Yup.string().email().required("Adres email wymagany")
})
