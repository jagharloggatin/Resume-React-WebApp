import React from 'react';
import styles from "./styles/Portfolio.module.css";
import PageCard from "../components/PageCard";

const Work: React.FC = () => {
    return (
        <div className={styles.content}>
            <PageCard
                cardTitle1="WORK"
                cardTitle2="INFO"
                cardClassName1={styles.firstCard}
                cardClassName2={styles.secondCard}
                children1={
                    <div>
                        Child1
                    </div>
                }

                children2={
                    <div>
                        Child2
                    </div>}
            />
        </div>

    );
}

export default Work;