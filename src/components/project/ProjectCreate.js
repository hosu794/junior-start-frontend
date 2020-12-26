import { Box, Typography } from "@material-ui/core";
import React from "react";
import { ProjectPaper } from "../../styles/postStyles";
import ProjectBackButton from "./ProjectBackButton";

import ProjectForm from "./ProjectForm";

const ProjectCreate = () => (
  <ProjectPaper className="app">
    <Typography variant="h2">Create a new project</Typography>
    <Typography variant="h4">This is subsite for creating projects</Typography>
    <ProjectForm />
    <Box mt={1}>
      <ProjectBackButton title="Go back" />
    </Box>
  </ProjectPaper>
);

export default ProjectCreate;
