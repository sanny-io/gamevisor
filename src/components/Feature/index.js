import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

export default function Feature({ icon, header, description }) {
  return (
    <Header icon as="h2">
      <Icon name={icon} />
      {header}
      <Header.Subheader>
        {description}
      </Header.Subheader>
    </Header>
  );
};