import { FC } from 'react';
import classes from './Button.module.scss'

interface buttonProps {
    onClick: () => void;
    children: string;
}

const Button: FC<buttonProps> = ({onClick, children}) => {
    return (
        <button className={classes.btn} onClick={onClick}>{children}</button>
    );
};

export default Button;