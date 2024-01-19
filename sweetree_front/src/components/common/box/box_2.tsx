import React from 'react';
import Boxx_2 from "../../../assets/Box/Box_2.svg"
import './Box.css'
interface BoxSizeProps{
    width :string;
    heigth : string;
    func : ()=>{};
}

function Box_2(props : BoxSizeProps){
    return(
        <button className = "B_2" onClick = {props.func}>
            <img src = {Boxx_2} alt = '박스2' width = {props.width} height={props.heigth}/>
        </button>
    )
}
export default Box_2;