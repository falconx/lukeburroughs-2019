import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

import CustomLink from '../../Link';

const NavList = styled.ul``;

const NavListItem = styled.li``;

const NavLink = styled(CustomLink).attrs(props => ({
  as: Link,
  title: props.children,
  activeClassName: 'active',
}))`
  font-size: 3.125rem;
  font-weight: 500;
  line-height: 1;

  &:hover,
  &:focus,
  &.active {
    color: rgba(255, 255, 255, 0.5) !important;
  }

  ${props => props.theme.query.md} {
    font-size: 8.125rem;
  }
`;

// Todo: duplicated at page.js
const transformLink = link => (link && link.replace(process.env.GATSBY_WORDPRESS_URL, '')) || '/';

const CompactNavList = () => {
  const data = useStaticQuery(graphql`
    query CompactMainMenuItems {
      wordpressWpApiMenusMenusItems(name: { eq: "Main" }) {
        items {
          url
          title
        }
      }
    }
  `);

  const mainMenuItems = data.wordpressWpApiMenusMenusItems.items;

  return (
    <NavList>
      {mainMenuItems.map(item => (
        <NavListItem>
          <NavLink
            to={transformLink(item.url)}
          >{item.title}</NavLink>
        </NavListItem>
      ))}
    </NavList>
  );
};

export default CompactNavList;