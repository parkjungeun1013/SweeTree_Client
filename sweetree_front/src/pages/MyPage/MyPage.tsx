import logo from "src/assets/logo.svg";
import { Background } from "src/components/common/Background/HeartBackground/HeartBackground";
import * as S from "./MyPage.styled";
import { BrownButton } from "src/components/common/Button/BrownButton/BrownButton";
import {useNavigate} from "react-router-dom";

export const Main1 = () => {
    const navigate = useNavigate();

    const handleClick= () =>{
        navigate('/create_box');
    };

    return (
        <Background>
            <S.LogoPos>
                <img src = {logo} alt = 'logo' />
            </S.LogoPos>

            <S.TextSytle>
                고마워 <br /> 미안해 <br /> 좋아해 <br /> ... <br/>
                미처 전하지 못한 마음이 있나요? <br />
                잊혀진 달콤함을 배달합니다 <br /> <br />
                2월 14일 <br /> 세상에서 가장 달콤한 편지를 받아보시려면 
            </S.TextSytle>
        
            <BrownButton 
            title = {"내 초콜릿 상자 만들기"}
            width ={235.266}
            onClick= {handleClick}
            />
        </Background>
    )
}


