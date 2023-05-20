import React from 'react';
import PageCard from '../components/PageCard';
import styles from './styles/About.module.css'
import DownloadIcon from '@mui/icons-material/Download';

const About: React.FC = () => {

    return (
        <div className={styles.content}>
            <PageCard
                // pageTitle="RESUME"
                cardTitle1="PROFESSIONAL DETAILS"
                cardTitle2="ABOUT"
                cardClassName1={styles.firstCard}
                cardClassName2={styles.secondCard}
                children1={
                    <div>

                        <div className={styles.imageDiv}>
                            <img alt="me" src='/images/me2.png'/>
                        </div>

                        <div className={styles.profileInfo}>
                            <div className={styles.profileInfoGrid}>
                                <div><span>NAME</span></div>
                                <div>Jonathan Bravo</div>
                                <div><span>AGE</span></div>
                                <div>33</div>
                                <div><span>LOCATION</span></div>
                                <div>Stockholm, Järfälla</div>
                                <div><span>EXPERIENCE</span></div>
                                <div>0 Years</div>
                                <div><span>DEGREEE</span></div>
                                <div>System Utvecklare</div>

                            </div>
                            {/*<table className={styles.myTable}>*/}
                            {/*    <tbody>*/}
                            {/*    <tr>*/}
                            {/*        <td><span>Name:</span></td>*/}
                            {/*        <td>Jonathan Bravo</td>*/}
                            {/*    </tr>*/}
                            {/*    <tr>*/}
                            {/*        <td><span>Age:</span></td>*/}
                            {/*        <td>33 Years</td>*/}
                            {/*    </tr>*/}
                            {/*    <tr>*/}
                            {/*        <td><span>Location:</span></td>*/}
                            {/*        <td>Stockholm, Järfälla</td>*/}
                            {/*    </tr>*/}
                            {/*    <tr>*/}
                            {/*        <td><span>Experience:</span></td>*/}
                            {/*        <td>0 Years</td>*/}
                            {/*    </tr>*/}
                            {/*    </tbody>*/}
                            {/*</table>*/}
                        </div>
                    </div>
                }
                children2={<div>
                    <hr/>
                    <div className={styles.aboutContainer}>
                        <div className={styles.presentation}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eveniet quaerat qui
                            reprehenderit velit. Amet, consequuntur cumque doloribus id illum nemo quisquam quod. Aspernatur
                            dicta quam quo repellat veritatis voluptatibus.
                        </div>
                        <div className={styles.presentation}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eveniet quaerat qui
                            reprehenderit velit. Amet, consequuntur cumque doloribus id illum nemo quisquam quod. Aspernatur
                            dicta quam quo repellat veritatis voluptatibus.
                        </div>
                        <div className={styles.presentation}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eveniet quaerat qui
                            reprehenderit velit. Amet, consequuntur cumque doloribus id illum nemo quisquam quod. Aspernatur
                            dicta quam quo repellat veritatis voluptatibus.
                        </div>
                    </div>
                    <div className={styles.buttonDiv}>
                        <button className={styles.downloadButtons}>Resume</button>
                        <button className={styles.downloadButtons}>Cover Letter</button>
                    </div>

                </div>}
            />
        </div>
    );
}
//
// <div className={styles.imageDiv}>
//     <img alt="me" src='/me2.png'/>
// </div>
export default About;

