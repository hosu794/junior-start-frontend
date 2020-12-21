import * as Yup from "yup";

export const passwordValidationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Podaj stare hasło"),
    newPassword: Yup.string()
        .min(8, "Hasło musi składać się z conajmniej 8 znaków")
        .required("Wymagane"),
    newPasswordConfirm: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Hasła muszą być identyczne")
        .required("Wymagane"),
});
