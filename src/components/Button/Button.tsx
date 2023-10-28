import './Button.scss'
import React from 'react'

interface Props {
    text: string,
    //button_version: 'primary' || 'secondary'
    button_version?: string
}

const Button: React.FC<Props> = ({text, button_version = 'secondary'}) => {
  
    
  return (
    <button className={`btn ${button_version}`} >{text}</button>
  )
 

 }

export default Button