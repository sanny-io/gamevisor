import React from 'react';
import { Menu, Segment, Container } from 'semantic-ui-react';
import styles from './style.module.css';

export default function NavBar() {
  return (
    <Segment inverted as="nav" className={styles.NavBar}>
      <Container>
        <Menu inverted secondary>
          <Menu.Menu position="right" as="ol">
            <Menu.Item
              name="home"
              as="li"
            />
            <Menu.Item
              name="servers"
              as="li"
            />
            <Menu.Item
              name="documentation"
              as="li"
            />
          </Menu.Menu>
        </Menu>
      </Container>
    </Segment>
  );
};
