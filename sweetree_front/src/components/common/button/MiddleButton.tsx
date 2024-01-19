import React from 'react';
import './Button.css';

interface MiddleButtonProps {
  title : string;
}
function MiddleButton(props: MiddleButtonProps) {
  return (
    <button className="MiddleButton">{props.title}</button>
  )
}
export default MiddleButton;