import React from "react";
import * as S from "./SocialLoginButton.styled";

interface socialLoginButtonProps {
  provider: string;
  logo: string;
  color: string;
  textColor: string;
}

export const SocialLoginButton = (props: socialLoginButtonProps) => {
  return (
    <S.SocialLoginButtonWrapper>
      <S.SocialLoginButtonStyled as="button" color={props.color}>
        <S.SocialLoginButtonContentStyled color={props.textColor}>
          <img src={props.logo} alt={props.provider} />
          Log in with {props.provider}
        </S.SocialLoginButtonContentStyled>
      </S.SocialLoginButtonStyled>
    </S.SocialLoginButtonWrapper>
  );
};
