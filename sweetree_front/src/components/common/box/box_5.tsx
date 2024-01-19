import React from 'react';
import Boxx_5 from "../../../assets/Box/Box_5.svg"
import './Box.css'
interface BoxSizeProps{
    width :string;
    heigth : string;
    func : ()=>{};
}

function Box_5(props : BoxSizeProps){
    return(
        <button className = "B_5" onClick = {props.func}>
            <img src = {Boxx_5} alt = '박스5' width = {props.width} height={props.heigth}/>
        </button>
    )
}
export default Box_5;