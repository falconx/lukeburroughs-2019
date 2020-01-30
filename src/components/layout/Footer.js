import React from 'react';
import styled from 'styled-components';

import Constrain from './Constrain';

import { Media } from '../Media';
import TextSquare from '../TextSquare';
import VerticalSpacing from '../VerticalSpacing';

const DribbleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path fill="currentColor" fillRule="evenodd" d="M9.8 0c.663 0 1.328.067 1.974.2a9.729 9.729 0 0 1 3.505 1.475c.519.351 1.007.752 1.45 1.195a9.882 9.882 0 0 1 2.1 3.115 9.82 9.82 0 0 1 0 7.629 9.878 9.878 0 0 1-3.55 4.311 9.896 9.896 0 0 1-1.665.904 9.832 9.832 0 0 1-7.63 0 9.902 9.902 0 0 1-1.665-.904A9.887 9.887 0 0 1 .77 13.614 9.776 9.776 0 0 1 0 9.8a9.754 9.754 0 0 1 1.674-5.48 9.891 9.891 0 0 1 2.645-2.645A9.694 9.694 0 0 1 7.826.199C8.471.067 9.136 0 9.8 0zm1.48 11.15l-.056.019c-4.938 1.72-6.55 5.19-6.568 5.228A8.352 8.352 0 0 0 9.8 18.168a8.327 8.327 0 0 0 3.267-.663c-.124-.731-.61-3.294-1.788-6.355zm1.567-.387c1.098 3.016 1.544 5.473 1.63 5.977a8.372 8.372 0 0 0 3.585-5.614c-.172-.055-2.513-.796-5.215-.363zM10.03 8.342c-4.31 1.29-8.445 1.197-8.593 1.191-.002.09-.007.177-.007.267 0 2.15.811 4.11 2.145 5.592-.003-.004 2.287-4.067 6.804-5.528.109-.036.22-.069.33-.1-.21-.476-.44-.953-.68-1.422zm6.233-3.858c-.016.022-1.358 1.962-4.663 3.311a26.408 26.408 0 0 1 .737 1.647c2.875-.362 5.708.247 5.829.272a8.326 8.326 0 0 0-1.903-5.23zM6.229 2.23a8.38 8.38 0 0 0-4.62 5.844l.058.001c.514.003 3.852-.008 7.67-1.022A50.397 50.397 0 0 0 6.228 2.23zm3.57-.798c-.68 0-1.34.082-1.972.234.126.169 1.698 2.254 3.13 4.882 3.157-1.184 4.35-2.998 4.37-3.029A8.329 8.329 0 0 0 9.8 1.432z" />
  </svg>
);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 60px;
  padding: 10px 0;

  ${props => props.theme.query.md} {
    flex-direction: row;
    align-items: center;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${props => props.theme.query.md} {
    width: auto;
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: flex-end;
  text-align: right;

  ${props => props.theme.query.md} {
    min-width: 100px;
  }
`;

const Footer = styled(props => (
  <Media>
    {mq => (
      <footer className={props.className}>
        <Constrain>
          <Content>
            <TextSquare>
              &copy; Unheard 2019 &mdash; Norwich &amp; London
            </TextSquare>

            {mq.lte('sm') && (
              <VerticalSpacing size={2} />
            )}

            <SocialLinks>
              <li>
                <Link href="/">
                  <DribbleIcon />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <DribbleIcon />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <DribbleIcon />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <DribbleIcon />
                </Link>
              </li>
            </SocialLinks>
          </Content>
        </Constrain>
      </footer>
    )}
  </Media>
))`
  margin-top: auto;
`;

export default Footer;