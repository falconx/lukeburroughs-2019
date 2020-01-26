import React from 'react';
import styled from 'styled-components';

import Constrain from './Constrain';

import { Media } from '../Media';
import TextSquare from '../TextSquare';
import VerticalSpacing from '../VerticalSpacing';

import dribbleIcon from '../../images/dribble.svg';

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
                  <img src={dribbleIcon} alt="" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <img src={dribbleIcon} alt="" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <img src={dribbleIcon} alt="" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <img src={dribbleIcon} alt="" />
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