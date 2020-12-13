import React from "react";
import ProjectBackButton from "./ProjectBackButton";

import ProjectForm from "./ProjectForm";

const ProjectCreate = () => (
  <div className="app">
    <h1>Create a new project</h1>
    <p>This is subsite for creating projects</p>
    <ProjectForm />
    <div
      style={{
        marginTop: "5px",
      }}
    >
      <ProjectBackButton title="Go back" />
    </div>
  </div>
);

export default ProjectCreate;
