import React from 'react';
import PageCard from '../components/PageCard';
import styles from './styles/About.module.css'
import DownloadIcon from '@mui/icons-material/Download';
import DownloadButton from "../components/DownloadButton";
import ProfileGrid from "../components/ProfileGrid";

const About: React.FC = () => {

    return (
        <div className={styles.content}>
            <PageCard
                // pageTitle="RESUME"
                cardTitle1="PROFESSIONAL DETAILS"
                cardTitle2="RESUME"
                cardClassName1={styles.firstCard}
                cardClassName2={styles.secondCard}
                children1={
                    <div>

                        <div className={styles.imageDiv}>
                            <img alt="me" src='/images/me2.png'/>
                        </div>

                        <div className={styles.profileInfo}>
                            <ProfileGrid/>
                            <div className={styles.buttonDiv}>
                                <DownloadButton
                                    file="/pdf/JBCV.pdf"
                                    title="CV"
                                    buttonText="Resume"
                                />
                                <DownloadButton
                                    file="/pdf/JBPB.pdf"
                                    title="Cover Letter"
                                    buttonText="Cover Letter"
                                />
                            </div>
                        </div>
                    </div>
                }
                children2={<div className={styles.secondCardContent}>
                    <div className={styles.aboutContainer}>
                        <div className={styles.presentation}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eveniet quaerat qui
                            reprehenderit velit. Amet, consequuntur cumque doloribus id illum nemo quisquam quod.
                            Aspernatur
                            dicta quam quo repellat veritatis voluptatibus.
                        </div>
                        <div className={styles.presentation}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eveniet quaerat qui
                            reprehenderit velit. Amet, consequuntur cumque doloribus id illum nemo quisquam quod.
                            Aspernatur
                            dicta quam quo repellat veritatis voluptatibus.
                        </div>
                        <div className={styles.presentation}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eveniet quaerat qui
                            reprehenderit velit. Amet, consequuntur cumque doloribus id illum nemo quisquam quod.
                            Aspernatur
                            dicta quam quo repellat veritatis voluptatibus.
                        </div>

                        <div className={styles.presentation}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eveniet quaerat qui
                            reprehenderit velit. Amet, consequuntur cumque doloribus id illum nemo quisquam quod.
                            Aspernatur
                            dicta quam quo repellat veritatis voluptatibus.
                        </div>

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

