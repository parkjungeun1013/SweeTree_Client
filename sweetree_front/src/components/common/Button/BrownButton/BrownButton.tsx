import React from 'react';
import * as S from "./BrownButton.styled";


interface BrownButtonProps {
  title : string;
  width : number;
}

export const BrownButton = (props: BrownButtonProps) => {
  return (
    <S.BrownButtonWrapper>
      <S.BrownButtonStyled width = {props.width}>
        <S.BrownButtonContentStyled>
          {props.title}
        </S.BrownButtonContentStyled>
      </S.BrownButtonStyled>
    </S.BrownButtonWrapper>
  );
};
