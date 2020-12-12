import * as Yup from "yup";

export const createProjectValidationSchema = Yup.object().shape({
  name: Yup.string().min(3).max(128).required("Required!"),
  title: Yup.string().min(3).max(128).required("Required!"),
  description: Yup.string().min(6).required("Required!"),
  numberOfSeats: Yup.number().min(1).max(8).required("Required!"),
  repository: Yup.string().min(12).max(256).required("Required!"),
});
