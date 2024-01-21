import styled from 'styled-components';

import Boxes_1 from "../../../assets/Box/Box_1.svg"
import Boxes_2 from "../../../assets/Box/Box_2.svg"
import Boxes_3 from "../../../assets/Box/Box_3.svg"
import Boxes_4 from "../../../assets/Box/Box_4.svg"
import Boxes_5 from "../../../assets/Box/Box_5.svg"
import Boxes_6 from "../../../assets/Box/Box_6.svg"


interface BoxProps{
    type: number;
    width: string;
    height: string;
    func?: () => void;
}

function Box(props : BoxProps){
    let box_src;
    let box_alt: string ="";
    if(props.type==1){
        box_src=Boxes_1;
        box_alt="BOX1";
    }else if(props.type==2){
        box_src=Boxes_2;
        box_alt="BOX2";
    }else if(props.type==3){
        box_src=Boxes_3;
        box_alt="BOX3";
    }else if(props.type==4){
        box_src=Boxes_4;
        box_alt="BOX4";
    }else if(props.type==5){
        box_src=Boxes_5;
        box_alt="BOX5";
    }else if(props.type==6){
        box_src=Boxes_6;
        box_alt="BOX6";
    }else
    { alert("Box Type Error"); }
    
    return(
        <BoxButton  onClick = {props.func}>
            <img src={box_src} alt={box_alt} width={props.width} height={props.height}/>
        </BoxButton>
    )
}

const BoxButton = styled.button` 
    border: none;
    background: none;
`;

export default Box;