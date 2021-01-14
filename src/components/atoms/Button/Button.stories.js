import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { theme } from 'theme/MainTheme';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withKnobs],
};

export const Primary = () => {
  const label = 'Colors';
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, theme.colors, defaultValue, groupId);
  return <Button color={value}>Close / Save</Button>;
};
export const Secondary = () => <Button secondary>remove</Button>;
