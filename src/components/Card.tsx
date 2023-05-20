import styles from './styles/Card.module.css'
import React, { FC, ReactNode } from 'react';

interface CardProps {
    children?: ReactNode;
    className?: string;
    title?: string;
}

const Card: FC<CardProps> = ({children, className, title}) => {
    return (
        <div className={`${styles.card} ${className}`}>
            {title && <h2 className={styles.cardTitle}>{title}</h2>}
            {children}
        </div>
    );
};
export default Card;