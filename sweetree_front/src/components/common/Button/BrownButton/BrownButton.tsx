import React from 'react';
import * as S from "./BrownButton.styled";


interface BrownButtonProps {
  title : string;
  width : number;
  onClick?: () => void;
}

export const BrownButton = (props: BrownButtonProps) => {
  return (
    <S.BrownButtonWrapper onClick= {props.onClick}>
      <S.BrownButtonStyled width = {props.width}>
        <S.BrownButtonContentStyled>
          {props.title}
        </S.BrownButtonContentStyled>
      </S.BrownButtonStyled>
    </S.BrownButtonWrapper>
  );
};
