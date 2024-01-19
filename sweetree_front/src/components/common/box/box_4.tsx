import React from 'react';
import Boxx_4 from "../../../assets/Box/Box_4.svg"
import './Box.css'
interface BoxSizeProps{
    width :string;
    heigth : string;
    func : ()=>{};
}

function Box_4(props : BoxSizeProps){
    return(
        <button className = "B_4" onClick = {props.func}>
            <img src = {Boxx_4} alt = '박스4' width = {props.width} height={props.heigth}/>
        </button>
    )
}
export default Box_4;