import logo from "src/assets/logo.svg";
import { Background } from "src/components/common/Background/HeartBackground/HeartBackground";
import * as S from "./CreatePage.styled";
import { WhiteRectangle } from "src/components/common/Background/WhiteRectangle/WhiteRectangle";


export const Main1_2 = () => {
    return (
        <Background>
            <S.LogoPos>
                <img src = {logo} alt = 'logo' />
            </S.LogoPos>

            <S.TextSytle>
                달콤함을 받아볼 <br /> 나만의 상자를 골라주세요 
            </S.TextSytle>
            <WhiteRectangle height = {310}/>
        
        </Background>
    )
}


