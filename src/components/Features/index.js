import React from 'react';
import { Grid } from 'semantic-ui-react';
import Feature from '../Feature';
import styles from './style.module.css';

export default function Features() {
  return (
    <section className={styles.Features}>
      <Grid stackable container columns={3}>
        <Grid.Row className={styles.Row}>
          <Grid.Column>
            <Feature icon="wheelchair" header="Easy Setup" description="Installation is quick and painless." />
          </Grid.Column>
          <Grid.Column>
            <Feature icon="bolt" header="Simple Usage" description="Deploy and manage servers at the speed of fast." />
          </Grid.Column>
          <Grid.Column>
            <Feature icon="globe" header="Runs Everywhere" description="Use it on your smarttoaster." />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Feature icon="server" header="Variety" description="Supports a wide range of game servers." />
          </Grid.Column>
          <Grid.Column>
            <Feature icon="book" header="Localized" description="Read everything in your native language." />
          </Grid.Column>
          <Grid.Column>
            <Feature icon="github" header="Open Source" description="Contribute your own improvements." />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  );
};