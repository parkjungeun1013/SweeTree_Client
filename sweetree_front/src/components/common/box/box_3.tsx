import React from 'react';
import Boxx_3 from "../../../assets/Box/Box_3.svg"
import './Box.css'
interface BoxSizeProps{
    width :string;
    heigth : string;
    func : ()=>{};
}

function Box_3(props : BoxSizeProps){
    return(
        <button className = "B_3" onClick = {props.func}>
            <img src = {Boxx_3} alt = '박스3' width = {props.width} height={props.heigth}/>
        </button>
    )
}
export default Box_3;