import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

import CustomLink from '../../Link';

const LIGHT = 'light';
const DARK = 'dark';

const NavList = styled.ul`
  display: flex;
`;

const NavListItem = styled.li`
  & + & {
    margin-left: 90px;
  }
`;

const NavLink = styled(CustomLink).attrs(props => ({
  as: Link,
  title: props.children,
  activeClassName: 'active',
}))`
  color: ${props => props.theme.colors.steal};

  /* prevent items shifting on hover/focus */
  &::after {
    content: attr(title);
    display: block;
    font-weight: 500;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  &:hover,
  &:focus,
  &.active {
    background-size: 100% 2px;
    color: ${props => props.text === LIGHT
      ? '#fff'
      : props.theme.colors.black
    };
  }
`;

NavLink.propTypes = {
  isSticky: PropTypes.bool
};

// Todo: duplicated at page.js
const transformLink = link => link && link.replace(process.env.GATSBY_WORDPRESS_URL, '');

const LargeNavList = props => {
  const data = useStaticQuery(graphql`
    query MainMenuItems {
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
            key={item.title}
            to={transformLink(item.url)}
            isSticky={props.isSticky}
            text={item.title}
          >{item.title}</NavLink>
        </NavListItem>
      ))}
    </NavList>
  );
};

LargeNavList.propTypes = {
  text: PropTypes.oneOf([
    LIGHT,
    DARK,
  ]),
};

LargeNavList.defaultProps = {
  text: LIGHT,
};

export default LargeNavList;