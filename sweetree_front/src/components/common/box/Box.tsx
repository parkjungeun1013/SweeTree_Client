import styled from 'styled-components';

import Boxes_1 from "../../../assets/Box/Box_1.svg"
import Boxes_2 from "../../../assets/Box/Box_2.svg"
import Boxes_3 from "../../../assets/Box/Box_3.svg"
import Boxes_4 from "../../../assets/Box/Box_4.svg"
import Boxes_5 from "../../../assets/Box/Box_5.svg"
import Boxes_6 from "../../../assets/Box/Box_6.svg"


interface BoxProps{
    type : number;
    width :string;
    height : string;
    func? : () => void;
}

function Box(props : BoxProps){
    if(props.type == 1){
        return(
            <BoxButton  onClick = {props.func}>
                <img src = {Boxes_1} alt = '박스1' width = {props.width} height={props.height}/>
            </BoxButton>
        )
    }
    if(props.type == 2){
        return(
            <BoxButton  onClick = {props.func}>
                <img src = {Boxes_2} alt = '박스2' width = {props.width} height={props.height}/>
            </BoxButton>
        )
    }
    if(props.type == 3){
        return(
            <BoxButton  onClick = {props.func}>
                <img src = {Boxes_3} alt = '박스3' width = {props.width} height={props.height}/>
            </BoxButton>
        )
    }
    if(props.type == 4){
        return(
            <BoxButton  onClick = {props.func}>
                <img src = {Boxes_4} alt = '박스4' width = {props.width} height={props.height}/>
            </BoxButton>
        )
    }
    if(props.type == 5){
        return(
            <BoxButton onClick = {props.func}>
                <img src = {Boxes_5} alt = '박스5' width = {props.width} height={props.height}/>
            </BoxButton>
        )
    }
    if(props.type == 6){
        return(
            <BoxButton onClick = {props.func}>
                <img src = {Boxes_6} alt = '박스6' width = {props.width} height={props.height}/>
            </BoxButton>
        )
    }
}

const BoxButton = styled.button` 
    border: none;
    background: none;
`;

export default Box;