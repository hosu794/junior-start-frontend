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
      <h1 data-testid="project-title">Title: {title}</h1>

      <p data-testid="project-name">Name: {name}</p>

      <div
        data-testid="project-body"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <hr />
      <p data-testid="project-number-of-seats">
        Number of Seats: {numberOfSeats}
      </p>
      <p data-testid="project-recruting">
        Recruting: {recruting ? "Yes" : "No"}
      </p>
      <div data-testid="project-members">
        <span data-testid="project-members-header">Team's members</span>
        <ProjectTeamMembersList teamMembers={teamMembers} />
      </div>
      <div>
        <span data-testid="project-mentor">Project's Mentors</span>
        <ProjectMentorItem mentor={mentor} />
      </div>
      <div>
        <ProjectCreatorItem creator={creator} />
      </div>
    </div>
  );
};

export default ProjectCredentials;
