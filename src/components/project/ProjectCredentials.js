import React from "react";
import ProjectCreatorItem from "./ProjectCreatorItem";
import ProjectMentorItem from "./ProjectMentorItem";
import ProjectTeamMembersList from "./ProjectTeamMembersList";

const ProjectCredentials = ({
  title,
  id,
  description,
  body,
  numberOfSeats,
  teamMembers,
  mentor,
  creator,
  name,
  recruting,
}) => {
  return (
    <div>
      <h1 id="project-title">Title: {title}</h1>
      <hr />
      <span id="project-name">Name: {name}</span>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <hr />
      <p id="project-number-of-seats">Number of Seats: {numberOfSeats}</p>
      <p id="project-recruting">Recruting: {recruting ? "Yes" : "No"}</p>
      <div id="project-members">
        <span id="project-members-header">Team's members</span>
        <ProjectTeamMembersList teamMembers={teamMembers} />
      </div>
      <div>
        <span>Project's Mentors</span>
        <ProjectMentorItem mentor={mentor} />
      </div>
      <div>
        <ProjectCreatorItem creator={creator} />
      </div>
    </div>
  );
};

export default ProjectCredentials;
