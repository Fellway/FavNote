import React from 'react';
import BulbIcon from 'assets/bulb.svg';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  decorators: [
    (Story) => (
      <YellowBackground>
        <Story />
      </YellowBackground>
    ),
  ],
};

export const Bulb = () => <ButtonIcon icon={BulbIcon} />;
export const BulbActive = () => <ButtonIcon active icon={BulbIcon} />;
