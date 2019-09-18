import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';
import styles from './style.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.Footer} flourish`}>
      <Container>
        <Header inverted size="huge">Ready to rock?</Header>
        <p>Let's get this show on the road.</p>
        <Button secondary size="massive">Suit Up</Button>
      </Container>
    </footer>
  );
};