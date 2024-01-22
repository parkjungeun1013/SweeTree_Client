import React from "react";
import heart from "src/assets/heart.svg";
import * as S from "./WhiteRectangle.styled";

interface WhiteRectangleProps {
  height: number;
}

export const WhiteRectangle = (props: WhiteRectangleProps) => {
  return (
    <S.WhiteRecWrapper>
        <S.WhiteRecStyled height = {props.height}/>
    </S.WhiteRecWrapper>
  );
};
