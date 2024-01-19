import React from 'react';
import './Button.css';

interface LargeButtonProps {
  title : string;
}
function LargeButton(props: LargeButtonProps) {
  return (
    <button className="LargeButton">{props.title}</button>
  )
}
export default LargeButton;