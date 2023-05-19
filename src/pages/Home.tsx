import React from 'react';
import './shared-styles/sharedStyles.css'
import styles from './styles/Home.module.css'

const Home = () =>  {
    return (
        <div className={styles.homeWrapper}>
            <header className={styles.headerDiv}>
                <div className={styles.homeHeadlinesDiv}>
                    <h1>Jonathan bravo</h1>
                    <h3>Software Developer</h3>
                    <img src='/me.png'/>
                </div>
                <div>
                    <button className={styles.downloadButtons}>Download my Resume</button>
                    <button className={styles.downloadButtons}>Download my Cover Letter</button>
                </div>
            </header>
            <footer className={styles.footerDiv}>

                <div>
                    Hi my name is Jonathan and i'm a software developer
                </div>
            </footer>
        </div>
    );
}
export default Home;