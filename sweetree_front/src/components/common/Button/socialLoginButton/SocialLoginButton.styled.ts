import styled from "styled-components";

export const SocialLoginButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2%;

  position: relative;
  z-index: 1;
`;

export const SocialLoginButtonStyled = styled.div`
  background: ${(props) => props.color};
  width: 219px;
  height: 48px;
  margin-top: 1%;

  display: inline-block;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 6px;
`;

export const SocialLoginButtonContentStyled = styled.div`
  color: ${(props) => props.color};
  font-size: 18px;

  padding-left: 7%;
  display: flex;
  width: 187px;
  gap: 10px;
`;
