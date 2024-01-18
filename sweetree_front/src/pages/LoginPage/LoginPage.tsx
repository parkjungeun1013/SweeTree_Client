import logo from "src/assets/logo.svg";
import { Background } from "src/components/common/Background/Background";
import * as S from "./LoginPage.styled";
import { SocialLoginButton } from "src/components/common/Button/socialLoginButton/SocialLoginButton";

import kakaoLogo from "src/assets/Button/Kakao.svg";
import googleLogo from "src/assets/Button/Google.svg";
import naverLogo from "src/assets/Button/Naver.svg";

import { SOCIAL_PROVIDER } from "src/constants/SocialProviders";

export const LoginPage = () => {
  return (
    <Background>
      <S.LogoPos>
        <img src={logo} alt="logo" />
      </S.LogoPos>
      <SocialLoginButton
        provider={SOCIAL_PROVIDER.KAKAO}
        logo={kakaoLogo}
        color={"#FEE500"}
        textColor={"#000"}
      />
      <SocialLoginButton
        provider={SOCIAL_PROVIDER.GOOGLE}
        logo={googleLogo}
        color={"#FFF"}
        textColor={"#0000008A"}
      />
      <SocialLoginButton
        provider={SOCIAL_PROVIDER.NAVER}
        logo={naverLogo}
        color={"#03C75A"}
        textColor={"#FFF"}
      />
    </Background>
  );
};
