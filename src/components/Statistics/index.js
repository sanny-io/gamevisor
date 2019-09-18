import React from 'react';
import { Container, Statistic, Header, Divider } from 'semantic-ui-react';
import styles from './style.module.css';

export default function Statistics() {
  return (
    <section className={styles.Statistics}>
      <Container>
        <Divider />
        <div className={styles.HeaderContainer}>
          <Header>What do the stats say?</Header>
        </div>
        <Statistic.Group widths={3}>
          <Statistic>
            <Statistic.Value>50+</Statistic.Value>
            <Statistic.Label>Supported Servers</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>20,000+</Statistic.Value>
            <Statistic.Label>Downloads</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>13+</Statistic.Value>
            <Statistic.Label>Localizations</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Container>
    </section>
  );
};