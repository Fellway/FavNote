import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme, color }) => color || theme.colors.primary};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey100};
      width: 105px;
      height: 30px;
      font-size: ${({ theme }) => theme.fontSize.xs};
    `}
`;

export default Button;
