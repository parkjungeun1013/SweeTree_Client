import React from 'react';
import Cho_6 from "../../../assets/Chocolate/Choco_6.svg"
import './Choco.css'
interface ChocoSizeProps{
    width :string;
    heigth : string;
    func : ()=>{};
}

function Choco_6(props : ChocoSizeProps){
    return(
        <button className = "C_6" onClick = {props.func}>
            <img src = {Cho_6} alt = '초콜릿6' width = {props.width} height={props.heigth}/>
        </button>
    )
}
export default Choco_6;