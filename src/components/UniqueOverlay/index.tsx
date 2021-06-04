import React from 'react';

import { Container, Header, Logo, Burger, Footer } from './styles';
import useWrapperScroll from './../Model/useWrapperScroll';
import { useTransform } from 'framer-motion';

const UniqueOverlay: React.FC = () => {
  const { scrollProgress } = useWrapperScroll( )

  const opacity = useTransform(scrollProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />  
        <Burger />  
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with love</a>
          </li>
          <li>
            <a href="#">by: Felipe Pinto</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
