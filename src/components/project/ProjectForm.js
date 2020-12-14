import React, { useEffect } from "react";
import "../editor/formik-demo.css";
import "../editor/rich-editor.css";
import { useFormik } from "formik";
import { createProjectValidationSchema } from "../../utils/validation";
import { useHistory } from "react-router-dom";
import { RichEditorExample } from "../editor/";
import { ContentState, EditorState } from "draft-js";
import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../../actions/project.actions";
import { projectCreatedSelector } from "../../selectors/project.selectors";

const MyForm = () => {
  const loading = useSelector(projectCreatedSelector);
  let history = useHistory();
  useEffect(() => {}, [loading]);

  const dispatch = useDispatch();

  const saveProject = async (
    name,
    title,
    description,
    numberOfSeats,
    repository,
    recruiting,
    body
  ) => {
    const request = {
      name,
      title,
      description,
      numberOfSeats,
      repository,
      recruiting,
      body,
    };

    await dispatch(projectActions.saveProject(request));
    await history.push("/");
  };

  const formik = useFormik({
    initialValues: {
      editorState: EditorState.createWithContent(
        ContentState.createFromText("")
      ),
      name: "",
      title: "",
      description: "",
      numberOfSeats: 1,
      repository: "",
      recruiting: false,
    },
    validationSchema: createProjectValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      saveProject(
        values.name,
        values.title,
        values.description,
        values.numberOfSeats,
        values.repository,
        values.recruiting,
        values.editorState.getCurrentContent().getPlainText("\u0001")
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name" style={{ display: "block" }}>
        Name
      </label>
      <input
        id="name"
        placeholder="Enter your name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.name && formik.touched.name && (
        <div style={{ color: "red", marginTop: ".5rem" }}>
          {formik.errors.name}
        </div>
      )}
      <label htmlFor="title" style={{ display: "block" }}>
        Title
      </label>
      <input
        id="title"
        placeholder="Enter your title"
        type="text"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.title && formik.touched.title && (
        <div style={{ color: "red", marginTop: ".5rem" }}>
          {formik.errors.title}
        </div>
      )}

      <label htmlFor="description" style={{ display: "block" }}>
        Description
      </label>
      <input
        id="description"
        placeholder="Enter your description"
        type="text"
        value={formik.values.description}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.description && formik.touched.description && (
        <div style={{ color: "red", marginTop: ".5rem" }}>
          {formik.errors.description}
        </div>
      )}

      <label htmlFor="" style={{ display: "block" }}>
        Number of seats
      </label>
      <input
        id="numberOfSeats"
        placeholder="Enter your number"
        type="text"
        value={formik.values.numberOfSeats}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.numberOfSeats && formik.touched.numberOfSeats && (
        <div style={{ color: "red", marginTop: ".5rem" }}>
          {formik.errors.numberOfSeats}
        </div>
      )}

      <label htmlFor="" style={{ display: "block" }}>
        Repository
      </label>
      <input
        id="repository"
        placeholder="Enter your repository"
        type="text"
        value={formik.values.repository}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.repository && formik.touched.repository && (
        <div style={{ color: "red", marginTop: ".5rem" }}>
          {formik.errors.repository}
        </div>
      )}

      <label htmlFor="" style={{ display: "block" }}>
        Are you recruting to project?
      </label>
      <input
        id="recruiting"
        placeholder="Enter your recruiting"
        type="checkbox"
        value={formik.values.recruiting}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.errors.recruiting && formik.touched.recruiting && (
        <div style={{ color: "red", marginTop: ".5rem" }}>
          {formik.errors.recruiting}
        </div>
      )}

      <label
        htmlFor="editorState"
        style={{ display: "block", marginTop: ".5rem" }}
      >
        Body
      </label>
      <RichEditorExample
        editorState={formik.values.editorState}
        onChange={formik.setFieldValue}
        onBlur={formik.handleBlur}
      />
      <button
        type="button"
        className="outline"
        onClick={formik.handleReset}
        disabled={!formik.dirty || formik.isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={formik.isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;
