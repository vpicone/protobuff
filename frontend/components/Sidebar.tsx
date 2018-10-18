import React from "react";
import styled from "styled-components";
import SidebarItem from "./styles/SidebarItem";

const SidebarContainer = styled.nav`
  grid-area: sidebar;
  background: ${props =>
    `linear-gradient(${props.theme.lightblue}, ${props.theme.darkblue})`};
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const SidebarItems = styled.ul`
  list-style: none;
  display: grid;
  justify-items: end;
  letter-spacing: 0.1ch;
  padding: 0;
  font-size: 2.5rem;
  cursor: pointer;
  margin: 0;
  margin-top: 20vh;
`;

export default () => (
  <SidebarContainer>
    <SidebarItems>
      <SidebarItem href="projects" />
      <SidebarItem href="clients" />
      <SidebarItem href="sessions" />
    </SidebarItems>
  </SidebarContainer>
);
