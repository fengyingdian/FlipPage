import React from 'react';
import FlipPage from 'react-flip-page';
import styled from 'styled-components';

const Page = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  line-height: ${props => props.height}px;
  text-align: center;
  font-size: 100px;
  font-weight: 900;
  color: #fff;
  background: ${props => props.background};
`;

export const FlipSample = () => {
  const { innerWidth, innerHeight } = window;
  return (
    <FlipPage
      width={innerWidth}
      height={innerHeight}
      >
      <Page background={'#ff0000'} width={innerWidth} height={innerHeight}> 1 </Page>
      <Page background={'#00ff00'} width={innerWidth} height={innerHeight}> 2 </Page>
      <Page background={'#0000ff'} width={innerWidth} height={innerHeight}> 3 </Page>
    </FlipPage>
  );
};

export default {};