import styled from "styled-components";

export const BrownButtonWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-top: 2%; 
    position:relative;
    z-index:10;

`;

export const BrownButtonStyled = styled.div` /* 이전,다음 버튼 양식 - 완료 버튼은 색 변경 필요 */
    width:  ${(props) => props.width};
    height: 50px;
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 30px;
    border: 2px solid #FEF7E2;
    background: #532A13;
    
`;


export const BrownButtonContentStyled = styled.div`
    color: #FEF7E2;
    font-family: "Sandoll GothicNeo1";
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 20.4px */
`
;

