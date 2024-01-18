import React from 'react';
import styled,{createGlobalStyle} from 'styled-components';
import heart from 'src/assets/heart.svg';


const BackgroundColor = styled.div`
background: #fef7e2;
width: 390px; 
height: 844px; 
align-items:center;
justify-content: center;
`;

const HeartPos = styled.div`
background: #fef7e2;
width: 390px; 
height: 844px; 
align-items:center;
justify-content: center;
`;

interface BackgroundProps {
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({children})=> {
    return (
      <>
      
      <BackgroundColor>
        {children}
        <HeartPos>
          <img src= {heart}/>
        </HeartPos>
      
      </BackgroundColor>
      
        
      </>
    );
}

export default Background;