import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';

const Wrapper = styled.div`
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ yellow, theme }) => (yellow ? theme.colors.primary : 'white')};
`;

const StyledHeading = styled(Heading)`
  margin: 10px 0;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Card = () => (
  <Wrapper>
    <InnerWrapper yellow>
      <StyledHeading>Hello World</StyledHeading>
      <StyledParagraph>3 days</StyledParagraph>
    </InnerWrapper>
    <InnerWrapper>
      <Paragraph>
        Lorem duis culpa laborum sint reprehenderit. Fugiat do in culpa amet qui minim incididunt
        Lorem. Non adipisicing aute aliqua aliqua sint ex ad laboris magna cillum ut veniam
        reprehenderit. Culpa duis nostrud pariatur laboris duis duis. Elit ipsum nostrud labore
        veniam sint enim non et anim eiusmod cillum commodo consequat dolore.
      </Paragraph>
      <Button secondary> button</Button>
    </InnerWrapper>
  </Wrapper>
);

export default Card;
