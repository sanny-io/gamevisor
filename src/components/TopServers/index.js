import React from 'react';
import { Container, Card, Header, Divider } from 'semantic-ui-react';
import styles from './style.module.css';

export default function TopServers() {
  return (
    <section className={styles.TopServers}>
      <Divider />
      <div class={styles.HeaderContainer}>
        <Header>Our Top Servers</Header>
      </div>
      <Container>
        <Card.Group centered stackable itemsPerRow={3}>
          <Card
            image="https://i.imgur.com/jXbP0iM.png"
            header="Counter Strike: Global Offensive"
            description="A multiplayer first-person shooter video game developed by Hidden Path Entertainment and Valve Corporation."
          />
          <Card
            image="https://i.imgur.com/rpA2eei.png"
            header="Garry's Mod"
            description="A sandbox physics game developed by British Facepunch Studios and published by Valve Corporation."
          />
          <Card
            image="https://i.imgur.com/yedYdvx.png"
            header="ARMA 3"
            description="An open-world, realism-based, military tactical shooter video game developed and published by Bohemia Interactive."
          />
        </Card.Group>
      </Container>
    </section>
  );
};
