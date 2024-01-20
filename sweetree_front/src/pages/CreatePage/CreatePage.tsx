import logo from "src/assets/logo.svg";
import { Background } from "src/components/common/Background/Background";
import * as S from "./CreatePage.styled";
import { BrownButton } from "src/components/common/Button/BrownButton/BrownButton";

export const Main1_2 = () => {
    return (
        <Background>
            <S.LogoPos>
                <img src = {logo} alt = 'logo' />
            </S.LogoPos>

            <S.TextSytle>
                달콤함을 받아볼 <br /> 나만의 상자를 골라주세요 
            </S.TextSytle>
        
            <BrownButton 
            title = {"내 초콜릿 상자 만들기"}
            width ={235.266}
            />
        </Background>
    )
}


