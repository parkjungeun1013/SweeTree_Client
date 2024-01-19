import React from 'react';
import Cho_3 from "../../../assets/Chocolate/Choco_3.svg"
import './Choco.css'
interface ChocoSizeProps{
    width :string;
    heigth : string;
    func : ()=>{};
}

function Choco_3(props : ChocoSizeProps){
    return(
        <button className = "C_3" onClick = {props.func}>
            <img src = {Cho_3} alt = '초콜릿3' width = {props.width} height={props.heigth}/>
        </button>
    )
}
export default Choco_3;