import { Box, Typography } from "@material-ui/core";
import React from "react";
import { ProjectPaper } from "../../styles/postStyles";
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
    <ProjectPaper>
      <Typography variant="h3" data-testid="project-title">
        Title: {title}
      </Typography>

      <Typography variant="h4" data-testid="project-name">
        Name: {name}
      </Typography>
      <div
        mt={2}
        data-testid="project-body"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <Typography variant="body1" data-testid="project-number-of-seats">
        Number of Seats: {numberOfSeats}
      </Typography>
      <Typography variant="body2" data-testid="project-recruting">
        Recruting: {recruting ? "Yes" : "No"}
      </Typography>
      <Typography variant="body1" data-testid="project-members">
        <span data-testid="project-members-header">Team's members</span>
        <ProjectTeamMembersList teamMembers={teamMembers} />
      </Typography>
      <Box mt={2}>
        <Typography variant="body1" data-testid="project-mentor">
          Project's Mentors
        </Typography>
        <ProjectMentorItem mentor={mentor} />
      </Box>
      <Box mt={2}>
        <ProjectCreatorItem creator={creator} />
      </Box>
    </ProjectPaper>
  );
};

export default ProjectCredentials;
