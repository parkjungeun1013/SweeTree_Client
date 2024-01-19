import React from 'react';
import Cho_5 from "../../../assets/Chocolate/Choco_5.svg"
import './Choco.css'
interface ChocoSizeProps{
    width :string;
    heigth : string;
    func : ()=>{};
}

function Choco_5(props : ChocoSizeProps){
    return(
        <button className = "C_5" onClick = {props.func}>
            <img src = {Cho_5} alt = '초콜릿5' width = {props.width} height={props.heigth}/>
        </button>
    )
}
export default Choco_5;