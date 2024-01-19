import logo from "src/assets/logo.svg";
import { Background } from "src/components/common/Background/Background";
import * as S from "src/pages/LoginPage/LoginPage.styled";

export const Main1Page = () => {
    return (
        <Background>
            <S.LogoPos>
                <img src = {logo} alt = 'logo' />
            </S.LogoPos>
            <p>안녕</p>
        </Background>
    )
}