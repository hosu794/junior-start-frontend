import React from "react";
import ProjectShowNobody from "./ProjectShowNobody";

function ProjectMentorItem({ mentor }) {
  return (
    <React.Fragment>
      {mentor ? mentor.username : <ProjectShowNobody />}
    </React.Fragment>
  );
}

export default ProjectMentorItem;
