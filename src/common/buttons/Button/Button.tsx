import React from 'react'

import styles from './Button.module.css'

type IButtonProps = React.HTMLProps<HTMLButtonElement>

export const Button: React.FC<IButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>
}
