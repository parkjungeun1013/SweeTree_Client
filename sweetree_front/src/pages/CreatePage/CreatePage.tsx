import React, { useState } from "react";
import logo from "src/assets/logo.svg";
import enter from "src/assets/enter.svg";
import { Background } from "src/components/common/Background/HeartBackground/HeartBackground";
import * as S from "./CreatePage.styled";
import { WhiteRectangle } from "src/components/common/Background/WhiteRectangle/WhiteRectangle";
import { BrownButton } from "src/components/common/Button/BrownButton/BrownButton";
import {useNavigate} from "react-router-dom";

export const CreatePage = () => {
    const [inputName, setInputName] = useState('');

    const navigate = useNavigate();

    const handlePreviousClick = () => {
        setStep((prevStep)=> Math.max(prevStep-1,1));
    };
    const handleNextClick =()=> {
        setStep((prevStep) => prevStep +1);
        if (step===4 || step ===3 || step ===5 ) // usestate 비동기 문제로 출력 미반영시, useeffect 사용 권장 
            console.log('Input Name: ', inputName);
    };

    const SelectBox = () => {

        return (
        <>
            <S.TextSytled>
                달콤함을 받아볼 <br /> 나만의 상자를 골라주세요 
            </S.TextSytled>
    
            <WhiteRectangle height = {377}/>
        </>
        );
    };

    const InputName = () => {
        return (
        <>
            <S.TextSytled>
                내 초콜릿 상자의 <br /> 이름을 정해주세요 
            </S.TextSytled>
            <S.InputSytledWrapper>
                <S.InputSytled>
                    <S.InputContentStyled 
                    type = "text" 
                    value = {inputName}
                    onChange = {e =>setInputName(e.target.value)}/>
                </S.InputSytled>            
            </S.InputSytledWrapper>
        </>
        );
    };

    const SelectAcess = () => {

        return (
            <>
                <S.TextSytled>
                    누구에게 편지를 <br /> 받고 싶으신가요? 
                </S.TextSytled>
            </>
            );    
    };
    
    const [step, setStep] = useState(2);
    let contentComponent;
    if(step ===2)
        contentComponent = <SelectBox />;
    else if(step ===3)
        contentComponent = <InputName />;
    else if(step ==4)
        contentComponent = <SelectAcess />;
    else
        navigate('/mypage');

    return (
        <Background>
            <S.LogoPos>
                <img src = {logo} alt = 'logo' />
            </S.LogoPos>

            {contentComponent}

            <S.SmallBrownButtonWrapper>
                <BrownButton
                title = {"<이전"}
                width = {131}
                onClick= {handlePreviousClick}
                />
                <BrownButton
                title = {step === 4 ? "완료>" : "다음>"}
                width = {131}
                onClick={handleNextClick}
                />                
            </S.SmallBrownButtonWrapper>           
        </Background>

    );
};





