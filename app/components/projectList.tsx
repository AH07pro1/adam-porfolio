import React from "react";
import ProjectOverview from "./projectOverview";
import Project from "../interface/projectInterface";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">My Projects</h2>
      {/* Ensure that the grid's rows adjust to the content, and that they have equal height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 grid-rows-auto">
        {projects.map((project, index) => (
          <ProjectOverview
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            date={project.date}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
