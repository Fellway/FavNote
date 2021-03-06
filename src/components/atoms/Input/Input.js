import styled, { css } from 'styled-components';
import loupeIcon from 'assets/loupe.svg';

const Input = styled.input`
  padding: 15px 30px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 50px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.xs};
      background-image: url(${loupeIcon});
      background-size: 18px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `}
`;

export default Input;
