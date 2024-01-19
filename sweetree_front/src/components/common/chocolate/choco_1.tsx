import React from 'react';
import Cho_1 from "../../../assets/Chocolate/Choco_1.svg"
import './Choco.css'
interface ChocoSizeProps{
    width :string;
    heigth : string;
    func? : ()=>{};
}

function Choco_1(props : ChocoSizeProps){
    return(
        <button className = "C_1" onClick = {props.func}>
            <img src = {Cho_1} alt = '초콜릿1' width = {props.width} height={props.heigth}/>
        </button>
    )
}
export default Choco_1;