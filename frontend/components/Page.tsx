import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import GlobalStyle from "./styles/GlobalStyle";

const theme = {
  light: "#f7f8f2",
  black: "#393939",
  grey: "#495854",
  lightblue: "#9fd0c4",
  orange: "#e48848",
  darkblue: "#578c89",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: ${props => props.theme.light};
  color: ${props => props.theme.black};
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 20vh 1fr auto;
  height: 100vh;
  grid-template-areas:
    "sidebar header header"
    "sidebar content content"
    "sidebar footer footer";
`;

const Footer = styled.footer`
  grid-area: footer;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle />
          <Header />
          <Sidebar />
          <Content>{this.props.children}</Content>
          <Footer>Footer</Footer>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
