import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  grid-area: content;
  padding: 0 2rem;
`;

const Content = ({ children }: { children: React.ReactNode }) => (
  <ContentContainer>{children}</ContentContainer>
);

export default Content;
