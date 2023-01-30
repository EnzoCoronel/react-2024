import React, { useContext } from 'react'
import { ButtonProps } from './types'
import { ThemeContext } from '../../theme/ThemeContext'
import './styles.css'

const Button: React.FC<ButtonProps> = ({ handleClick, children }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <button className={`button ${theme}-theme`} onClick={handleClick}>
            {children}
        </button>
    )
}
export default Button