import styled from 'styled-components';
import { Link } from 'gatsby';

const CustomLink = styled.a.attrs(props => ({
  title: props.children,
}))`
  position: relative;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .5s;

  &:hover,
  &:focus {
    font-weight: 500;
    background-size: 100% 2px;
    font-weight: 500;
  }
`;

export default CustomLink;