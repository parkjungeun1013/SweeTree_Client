import React from 'react';
import Cho_4 from "../../../assets/Chocolate/Choco_4.svg"
import './Choco.css'
interface ChocoSizeProps{
    width :string;
    heigth : string;
    func : ()=>{};
}

function Choco_4(props : ChocoSizeProps){
    return(
        <button className = "C_4" onClick = {props.func}>
            <img src = {Cho_4} alt = '초콜릿4' width = {props.width} height={props.heigth}/>
        </button>
    )
}
export default Choco_4;