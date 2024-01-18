import React from "react";
import heart from "src/assets/heart.svg";
import * as S from "./Background.styled";

interface BackgroundProps {
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <S.BackgroundColor>
      <S.HeartPos>
        <img src={heart} alt="heart" />
      </S.HeartPos>
      {children}
    </S.BackgroundColor>
  );
};

export default Background;
