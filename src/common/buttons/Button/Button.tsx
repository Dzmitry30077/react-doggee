import React from 'react'

import './Button.css'

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export const Button: React.FC<IButtonProps> = ({children}) => {
  return <button>{children}</button>
}
