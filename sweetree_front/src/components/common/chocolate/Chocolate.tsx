import styled from 'styled-components';
import Cho_1 from "../../../assets/Chocolate/Choco_1.svg"
import Cho_2 from "../../../assets/Chocolate/Choco_2.svg"
import Cho_3 from "../../../assets/Chocolate/Choco_3.svg"
import Cho_4 from "../../../assets/Chocolate/Choco_4.svg"
import Cho_5 from "../../../assets/Chocolate/Choco_5.svg"
import Cho_6 from "../../../assets/Chocolate/Choco_6.svg"

interface ChocoProps{
    type : number;
    width :string;
    height : string;
    func? : () => void;
}

function Choco(props : ChocoProps){
    if(props.type == 1){
        return(
            <ChocoButton  onClick = {props.func}>
                <img src = {Cho_1} alt = '초코1' width = {props.width} height={props.height}/>
            </ChocoButton>
        )
    }
    if(props.type == 2){
        return(
            <ChocoButton  onClick = {props.func}>
                <img src = {Cho_2} alt = '초코2' width = {props.width} height={props.height}/>
            </ChocoButton>
        )
    }
    if(props.type == 3){
        return(
            <ChocoButton  onClick = {props.func}>
                <img src = {Cho_3} alt = '초코3' width = {props.width} height={props.height}/>
            </ChocoButton>
        )
    }
    if(props.type == 4){
        return(
            <ChocoButton  onClick = {props.func}>
                <img src = {Cho_4} alt = '초코4' width = {props.width} height={props.height}/>
            </ChocoButton>
        )
    }
    if(props.type == 5){
        return(
            <ChocoButton onClick = {props.func}>
                <img src = {Cho_5} alt = '초코5' width = {props.width} height={props.height}/>
            </ChocoButton>
        )
    }
    if(props.type == 6){
        return(
            <ChocoButton onClick = {props.func}>
                <img src = {Cho_6} alt = '초코6' width = {props.width} height={props.height}/>
            </ChocoButton>
        )
    }
}

const ChocoButton = styled.button` 
    border: none;
    background: none;
`;

export default Choco;
