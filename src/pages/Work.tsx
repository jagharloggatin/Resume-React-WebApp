import React, { useState } from 'react';
import styles from "./styles/Work.module.css";
import PageCard from "../components/PageCard";
import ProjectContent from '../components/ProjectContent';
import { ProjectType } from '../types/ProjectTypes';

const Work: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<ProjectType>('None');
    return (
        <div className={styles.content}>
            <PageCard
                cardTitle2="INFO"
                cardClassName1={styles.firstCard}
                cardClassName2={styles.secondCard}
                children1={
                    <div>
                        <nav className={styles.workNavBar}>
                            <ul className={styles.workList}>
                                <li className={styles.workItem}><a onClick={() => setSelectedItem('Master Thesis')}>Master Thesis</a></li>
                                <li className={styles.workItem}><a onClick={() => setSelectedItem('PartyTime!')}>PartyTime!</a></li>
                                <li className={styles.workItem}><a onClick={() => setSelectedItem('Blazor Table')}>Blazor Table</a></li>
                                <li className={styles.workItem}><a onClick={() => setSelectedItem('Home Assistant')}>Home Assistant</a></li>
                                <li className={styles.workItem}><a onClick={() => setSelectedItem('Power Bi')}>Power Bi</a></li>
                                <li className={styles.workItem}><a onClick={() => setSelectedItem('Photoshop')}>Photoshop</a></li>
                            </ul>
                        </nav>
                    </div>
                }
                children2={
                    <ProjectContent selectedItem={selectedItem} />
                }
            />
        </div>
    );
}

export default Work;