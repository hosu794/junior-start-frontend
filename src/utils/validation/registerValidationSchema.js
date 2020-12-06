import * as Yup from 'yup'


export const registerValidationSchema = Yup.object({
    username: Yup.string()
        .min(3, "Wpisz co najmniej 3 znaki")
        .required('Wymagane'),
    password: Yup.string()
        .min(8, "Hasło musi składać się z conajmniej 8 znaków")
        .required('Wymagane'),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], "Hasła muszą być identyczne")
        .required('Wymagane'),
    email: Yup.string()
        .email('Niepoprawny adres e-mail')
        .required('Wymagane'),
    acceptedTerms: Yup.boolean()
        .required('Wymagane')
        .oneOf([true], 'Musisz zaakceptować regulamin'),
})