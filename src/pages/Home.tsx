import React from 'react';
import './shared-styles/sharedStyles.css'
import styles from './styles/Home.module.css'
import Card from '../components/Card';
const Home = () =>  {
    return (
        <div className={styles.homeWrapper}>
            <div className={styles.pageHeader}>
                <h2>RESUME</h2>

            </div>
            <div className={styles.homeContent}>
                <Card className={styles.details}>
                    <header className={styles.detailsInfo}>
                        <div>
                            <div className={styles.cardHeadlineDiv}>
                                <h3>PROFESSIONAL DETAILS</h3>
                                {/*<h3>Software Developer</h3>*/}
                            </div>
                            <div className={styles.imageDiv}>
                                <img src='/me2.png'/>
                            </div>
                        </div>

                    </header>
                </Card>
                <Card className={styles.about}>
                    <footer className={styles.aboutInfo}>
                        <div className={styles.cardHeadlineDiv}>
                            <h3>ABOUT</h3>
                            {/*<h3>Software Developer</h3>*/}
                        </div>
                        <div className={styles.buttonDiv}>
                            <button className={styles.downloadButtons}>Resume</button>
                            <button className={styles.downloadButtons}>Cover Letter</button>
                        </div>
                        <div>
                            Hi my name is Jonathan and i'm a software developer
                        </div>
                    </footer>
                </Card>
            </div>
        </div>

    );
}
export default Home;