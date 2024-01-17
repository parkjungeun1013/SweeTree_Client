import React from 'react';
import './Button.css';

interface SmallButtonProps {
  title : string;
}

function SmallButton(props: SmallButtonProps) {
  return (
  <button>{props.title}</button>
  )
}

export default SmallButton;