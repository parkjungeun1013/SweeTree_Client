import React from 'react';
import Cho_2 from "../../../assets/Chocolate/Choco_2.svg"
import './Choco.css'
interface ChocoSizeProps{
    width :string;
    heigth : string;
    func? : ()=>{};
}

function Choco_2(props : ChocoSizeProps){
    return(
        <button className = "C_2" onClick = {props.func}>
            <img src = {Cho_2} alt = '초콜릿2' width = {props.width} height={props.heigth}/>
        </button>
    )
}
export default Choco_2;