import React from "react";
import "../editor/formik-demo.css";
import "../editor/rich-editor.css";
import { withFormik } from "formik";
import { createProjectValidationSchema } from "../../utils/validation";

import { RichEditorExample } from "../editor/";
import Draft from "draft-js";

var EditorState = Draft.EditorState;
var ContentState = Draft.ContentState;

const formikEnhancer = withFormik({
  mapPropsToValues: (props) => ({
    editorState: EditorState.createWithContent(ContentState.createFromText("")),
    name: "",
    title: "",
    description: "",
    numberOfSeats: 1,
    repository: "",
    recruiting: false,
  }),
  validationSchema: createProjectValidationSchema,
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
    <label htmlFor="name" style={{ display: "block" }}>
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
    <label htmlFor="title" style={{ display: "block" }}>
      Title
    </label>
    <input
      id="title"
      placeholder="Enter your title"
      type="text"
      value={values.title}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.title && touched.title && (
      <div style={{ color: "red", marginTop: ".5rem" }}>{errors.title}</div>
    )}

    <label htmlFor="description" style={{ display: "block" }}>
      Description
    </label>
    <input
      id="description"
      placeholder="Enter your description"
      type="text"
      value={values.description}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.description && touched.description && (
      <div style={{ color: "red", marginTop: ".5rem" }}>
        {errors.description}
      </div>
    )}

    <label htmlFor="" style={{ display: "block" }}>
      Number of seats
    </label>
    <input
      id="numberOfSeats"
      placeholder="Enter your number"
      type="text"
      value={values.numberOfSeats}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.numberOfSeats && touched.numberOfSeats && (
      <div style={{ color: "red", marginTop: ".5rem" }}>
        {errors.numberOfSeats}
      </div>
    )}

    <label htmlFor="" style={{ display: "block" }}>
      Repository
    </label>
    <input
      id="repository"
      placeholder="Enter your repository"
      type="text"
      value={values.repository}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.repository && touched.repository && (
      <div style={{ color: "red", marginTop: ".5rem" }}>
        {errors.repository}
      </div>
    )}

    <label htmlFor="" style={{ display: "block" }}>
      Are you recruting to project?
    </label>
    <input
      id="recruiting"
      placeholder="Enter your recruiting"
      type="checkbox"
      value={values.recruiting}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.recruiting && touched.recruiting && (
      <div style={{ color: "red", marginTop: ".5rem" }}>
        {errors.recruiting}
      </div>
    )}

    <label
      htmlFor="editorState"
      style={{ display: "block", marginTop: ".5rem" }}
    >
      Body
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
    <MyEnhancedForm />
  </div>
);

export default ProjectCreate;
