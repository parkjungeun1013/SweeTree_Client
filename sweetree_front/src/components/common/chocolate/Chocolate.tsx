import styled from 'styled-components';
import Cho_1 from "../../../assets/Chocolate/Choco_1.svg"
import Cho_2 from "../../../assets/Chocolate/Choco_2.svg"
import Cho_3 from "../../../assets/Chocolate/Choco_3.svg"
import Cho_4 from "../../../assets/Chocolate/Choco_4.svg"
import Cho_5 from "../../../assets/Chocolate/Choco_5.svg"
import Cho_6 from "../../../assets/Chocolate/Choco_6.svg"

interface ChocoProps{
    type: number;
    width: string;
    height: string;
    func?: () => void;
}

function Choco(props : ChocoProps){
    let choco_src;
    let choco_alt: string ="";
    if(props.type==1){
        choco_src=Cho_1;
        choco_alt="CHOCO1";
    }
    if(props.type==2){
        choco_src=Cho_2;
        choco_alt="CHOCO2";
    }
    if(props.type==3){
        choco_src=Cho_3;
        choco_alt="CHOCO3";
    }
    if(props.type==4){
        choco_src=Cho_4;
        choco_alt="CHOCO4";
    }
    if(props.type==5){
        choco_src=Cho_5;
        choco_alt="CHOCO5";
    }
    if(props.type==6){
        choco_src=Cho_6;
        choco_alt="CHOCO6";
    }
    return(
        <ChocoButton  onClick = {props.func}>
            <img src={choco_src} alt={choco_alt} width={props.width} height={props.height}/>
        </ChocoButton>
    )
}

const ChocoButton = styled.button` 
    border: none;
    background: none;
`;

export default Choco;
