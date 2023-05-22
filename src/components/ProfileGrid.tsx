import React from 'react';
import styles from './styles/ProfileGrid.module.css'

const ProfileGrid: React.FC = () => {
    return (
        <div className={styles.profileInfoGrid}>
            <div><span>NAME</span></div>
            <div>Jonathan Bravo</div>
            <div><span>AGE</span></div>
            <div>33</div>
            <div><span>LOCATION</span></div>
            <div>Stockholm, Järfälla</div>
            <div><span>EXPERIENCE</span></div>
            <div>1 Years</div>
            <div><span>DEGREEE</span></div>
            <div>Systemutvecklare</div>
        </div>
    );
};

export default ProfileGrid;