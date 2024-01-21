import React, { useState } from "react";
import logo from "src/assets/logo.svg";
import enter from "src/assets/enter.svg";
import { Background } from "src/components/common/Background/HeartBackground/HeartBackground";
import * as S from "./CreatePage.styled";
import { WhiteRectangle } from "src/components/common/Background/WhiteRectangle/WhiteRectangle";
import { BrownButton } from "src/components/common/Button/BrownButton/BrownButton";
import {useNavigate} from "react-router-dom";

export const CreatePage = () => {

    const navigator = useNavigate();
    const handlePreviousClick = () => {
        if (step ===2) 
            navigator("/mypage");
        setStep((prevStep)=> Math.max(prevStep-1,1));

    };
    
    const handleNextClick =()=> {
        if (step===4) {// usestate 비동기 문제로 출력 미반영시, useeffect 사용 권장 
            console.log('Input Name: ', inputName);
            console.log('Is Box public?',isBoxPulic);
            navigator("/mypage");
        }
        setStep((prevStep) => prevStep +1);

    };
    const [step, setStep] = useState(2);
    const [inputName, setInputName] = useState('');
    const [isBoxPulic,setIsBoxPublic] = useState(true);

    return (
        <Background>
            <S.LogoPos>
                <img src = {logo} alt = 'logo' />
            </S.LogoPos>

            {step === 2 ? (
            <>
                <S.TextSytled>
                    달콤함을 받아볼 <br /> 나만의 상자를 골라주세요 
                </S.TextSytled>
                <WhiteRectangle height = {377}/>
            </>) : (null)
            }

            {step === 3 ? (
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
            </> ) : (null)
            }

            {step === 4 ? (
            <>
                <S.TextSytled>
                    누구에게 편지를 <br /> 받고 싶으신가요? 
                </S.TextSytled>

                <BrownButton 
                title = {"로그인 없이 편지 작성을 허용합니다."}
                width ={316}
                onClick={()=>setIsBoxPublic(true)}
                />
                <S.LargeBrownButtonWrapper>
                    <BrownButton 
                    title = {"로그인 유저만 편지 작성을 허용합니다."}
                    width ={316}
                    onClick={()=>setIsBoxPublic(false)}
                    />
                </S.LargeBrownButtonWrapper>          
            </> ) : (null)
            }

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