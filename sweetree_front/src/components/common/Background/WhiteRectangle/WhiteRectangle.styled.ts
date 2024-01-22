import styled from "styled-components";

export const WhiteRecWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 5%;
    z-index: 10;
    margin-bottom: 5%
`;

interface WhiteRecprops {
    height: number
}

export const WhiteRecStyled = styled.div<WhiteRecprops>`

    width: 310px;
    height: ${(props) => props.height}px;

    border-radius: 33px;
    background: rgba(255, 255, 255, 0.74);
    box-shadow: 0px 4px 4px 0px rgba(83, 42, 19, 0.38);

`
;
