import React from "react";
import styled from "styled-components";
import { withRouter, WithRouterProps } from "next/router";

const HeaderContainer = styled.div`
  grid-area: header;
  padding-left: 2rem;
  align-self: flex-end;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
`;

const PAGES = ["projects", "sessions", "clients"];

const Header = ({ router }: { router?: WithRouterProps["router"] }) => {
  let pathName = router ? router.pathname.slice(1) || "projects" : "";

  return (
    <HeaderContainer>
      <Title>{PAGES.includes(pathName) ? pathName : ""}</Title>
    </HeaderContainer>
  );
};

export default withRouter(Header);
