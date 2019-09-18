import React from 'react';
import { Header, Container, Button, List, Dropdown } from 'semantic-ui-react';
import styles from './style.module.css';

export default function Hero() {
  return (
    <section className={`${styles.Hero} flourish`}>
      <Container>
        <div className={styles.HeaderContainer}>
          <Header inverted size="huge">GameVisor</Header>
        </div>
        <p>A free, open source, cross platform CLI tool for managing game servers.</p>
        <List horizontal>
          <List.Item>
            <Button primary size="big" content="Get Started" />
          </List.Item>
          <List.Item>
          <Button secondary size="big" icon="server" content="Download" />
          </List.Item>
        </List>
      </Container>
    </section>
  );
};