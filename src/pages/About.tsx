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
                            My name is Jonathan Bravo and I am currently studying to be a softwaredeveloper at a
                            vocational college. With my graduation day of June 2nd insight, I am now in search of an
                            exciting job within the IT industry where Ican apply my knowledge and skills.
                        </div>
                        <div className={styles.presentation}>
                            My passion for programming began a few years ago when I was working for a company performing
                            hardware repairs for Lenovo, Dell, and HP.There I met like-minded tech enthusiasts who
                            introduced me to programming. After exploring this interest for a while, I decided to deepen
                            my
                            understanding of the subject by studying software development.
                        </div>
                        <div className={styles.presentation}>
                            During my studies, I have strengthened my technical skills and gained a broad understanding
                            of programming and IT systems. I am a social,responsible, and diligent individual who always
                            strives to achieve the best possible results. I am punctual, rarely sick, and maintain a
                            healthy lifestyle, which includes regular exercise and good sleep habits
                        </div>

                        <div className={styles.presentation}>
                            I am currently undertaking an internship where I am gaining further practical experience in
                            my field. I have good references from previous employers and my current internship which I
                            am
                            more than happy to share in an interview.
                        </div>

                        <div className={styles.presentation}>
                            I am confident that I would be an asset to your company and look forwardto the opportunity
                            to discuss how my skills and experiences cancontribute to your business. Thank you for
                            taking the time to read mypersonal letter and I look forward to hearing from you.
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

