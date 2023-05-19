import styles from './styles/Card.module.css'
import React, { FC, ReactNode } from 'react';

interface CardProps {
    children?: ReactNode;
}

const Card: FC<CardProps> = ({children}) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
};

export default Card;