import React from "react";
import ProjectShowNobody from "./ProjectShowNobody";
import ProjectTeamMemberItem from "./ProjectTeamMemberItem";

function ProjectTeamMembersList({ teamMembers }) {
  return (
    <React.Fragment>
      {teamMembers ? (
        teamMembers.map((i) => <ProjectTeamMemberItem email={i.email} />)
      ) : (
        <ProjectShowNobody />
      )}
    </React.Fragment>
  );
}

export default ProjectTeamMembersList;
