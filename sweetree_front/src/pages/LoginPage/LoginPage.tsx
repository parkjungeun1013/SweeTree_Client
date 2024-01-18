import react from 'react';
import styled from 'styled-components';
import Background from 'src/components/common/Background/Background';
import logo from 'src/assets/logo.svg';

const LogoPos = styled.div`
  max-width: 390px;
  display:  flex;
  align-items: center; /* 중앙 정렬로 변경 */
  justify-content: center;
  
`;

const LoginPage = () => {
    return (
        <>
        <Background >
            <LogoPos>
                <img src={logo}/>
            </LogoPos>
        </Background>
   
        </>
    );
}

export default LoginPage;