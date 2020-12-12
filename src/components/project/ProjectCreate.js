import React from "react";
import "../editor/formik-demo.css";
import "../editor/rich-editor.css";
import { withFormik } from "formik";

import { RichEditorExample } from "../editor/";
import * as Yup from "yup";
import Draft from "draft-js";

var EditorState = Draft.EditorState;
var ContentState = Draft.ContentState;

const formikEnhancer = withFormik({
  mapPropsToValues: (props) => ({
    editorState: EditorState.createWithContent(ContentState.createFromText("")),
    email: "",
    name: "",
    title: "",
    description: "",
    numberOfSeats: null,
    repository: "",
    recruiting: "",
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Required!"),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "MyForm",
});

const MyForm = ({
  values,
  touched,
  dirty,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  setFieldValue,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="email" style={{ display: "block" }}>
      Name
    </label>
    <input
      id="name"
      placeholder="Enter your name"
      type="text"
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.name && touched.name && (
      <div style={{ color: "red", marginTop: ".5rem" }}>{errors.name}</div>
    )}
    <label htmlFor="name" style={{ display: "block", marginTop: ".5rem" }}>
      Name
    </label>
    <RichEditorExample
      editorState={values.editorState}
      onChange={setFieldValue}
      onBlur={handleBlur}
    />
    <button
      type="button"
      className="outline"
      onClick={handleReset}
      disabled={!dirty || isSubmitting}
    >
      Reset
    </button>
    <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </form>
);

const MyEnhancedForm = formikEnhancer(MyForm);

const ProjectCreate = () => (
  <div className="app">
    <h1>Create a new project</h1>
    <p>This is subsite for creating projects</p>
    <MyEnhancedForm user={{ email: "hello@reason.nyc" }} />
  </div>
);

export default ProjectCreate;
