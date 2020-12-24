import React from "react";

function ProjectCreatorItem({ creator }) {
  return (
    <div>
      <span>Creator: {creator.email}</span>
    </div>
  );
}

export default ProjectCreatorItem;
