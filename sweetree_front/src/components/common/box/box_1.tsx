import React from 'react';
import Boxx_1 from "../../../assets/Box/Box_1.svg"
import './Box.css'
interface BoxSizeProps{
    width :string;
    heigth : string;
    func : ()=>{};
}

function Box_1(props : BoxSizeProps){
    return(
        <button className = "B_1" onClick = {props.func}>
            <img src = {Boxx_1} alt = '박스1' width = {props.width} height={props.heigth}/>
        </button>
    )
}
export default Box_1;