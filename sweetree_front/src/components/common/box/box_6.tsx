import React from 'react';
import Boxx_6 from "../../../assets/Box/Box_6.svg"
import './Box.css'
interface BoxSizeProps{
    width :string;
    heigth : string;
    func : ()=>{};
}

function Box_6(props : BoxSizeProps){
    return(
        <button className = "B_6" onClick = {props.func}>
            <img src = {Boxx_6} alt = '박스6' width = {props.width} height={props.heigth}/>
        </button>
    )
}
export default Box_6;