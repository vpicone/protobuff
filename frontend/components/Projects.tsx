import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_PROJECTS_QUERY = gql`
  query ALL_PROJECTS_QUERY {
    projects {
      name
      description
      id
    }
  }
`;

interface Data {
  projects: Array<{ name: string; description?: string; id: string }>;
}

export class AllProjectsQuery extends Query<Data, {}> {}

const Projects = () => (
  <ProjectsContainer>
    <AllProjectsQuery query={ALL_PROJECTS_QUERY}>
      {({ data, error, loading }) => {
        if (error) return <h1>Something went wrong.</h1>;
        if (loading) return <h1>Loading...</h1>;
        if (data && data.projects) {
          return data.projects.map(project => (
            <ProjectItem key={project.id}>
              <h1>{project.name}</h1>
              <p>{project.description}</p>
            </ProjectItem>
          ));
        }
      }}
    </AllProjectsQuery>
  </ProjectsContainer>
);

const ProjectsContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const ProjectItem = styled.div`
  background-color: red;
  align-content: center;
  align-items: center;
  height: 200px;
`;

export default Projects;
