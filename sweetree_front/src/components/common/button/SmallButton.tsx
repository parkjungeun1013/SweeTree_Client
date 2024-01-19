import React from 'react';
import './Button.css';

interface SmallButtonProps {
  title : string;
}
function SmallButton(props: SmallButtonProps) {
  return (
    <button className="SmallButton">{props.title}</button>
  )
}
export default SmallButton;