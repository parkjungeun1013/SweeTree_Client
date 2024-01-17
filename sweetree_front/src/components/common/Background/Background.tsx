import React from 'react';
import styled from 'styled-components';
import heart from 'src/assets/heart.svg';


const BackgroundColor = styled.div`
  background: #fef7e2;
  width: 390px;
  height: 844px;
  flex-shrink: 0;
`;

const HeartPos = styled.div`
  position: relative;
  transform: translate(0%, 12.5%);

`
interface BackgroundProps {
  children : React.ReactNode;
}

function Background({ children }: BackgroundProps) {
    return (
      <>
        <BackgroundColor>
          <HeartPos>
            <img src= {heart}/>
          </HeartPos>
        </BackgroundColor>
          {children}
        
      </>
    );
}

export default Background;