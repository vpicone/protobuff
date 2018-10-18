import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { withRouter, WithRouterProps } from "next/router";

const Item = styled<{ active: boolean }, "li">("li")`
  width: 100%;
  padding: 0 4rem;
  transition: all 0.4s ease;
  color: ${props => (props.active ? props.theme.light : props.theme.black)};
  background-color: ${props =>
    props.active ? props.theme.darkblue : "transparent"};
  &:hover {
    background-color: ${props => props.theme.darkblue};
    color: ${props => props.theme.light};
  }
  &:active {
    background-color: ${props => props.theme.orange};
  }
`;

class SidebarItem extends React.Component<{
  href: string;
  router?: WithRouterProps["router"];
}> {
  render() {
    const { router } = this.props;
    const pathname = router ? router.pathname.slice(1) : "";
    return (
      <Link href={this.props.href}>
        <Item active={this.props.href === pathname}>
          {this.props.href.toUpperCase()}
        </Item>
      </Link>
    );
  }
}

export default withRouter<any>(SidebarItem);
