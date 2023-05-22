import React, {FC, ReactNode} from 'react';
import Card from './Card';
import styles from './styles/PageCard.module.css'

interface PageProps {
    children1?: ReactNode;
    children2?: ReactNode;
    pageTitle?: string;
    cardTitle1?: string;
    cardTitle2?: string;
    cardClassName1?: string;
    cardClassName2?: string;
}

const PageCard: FC<PageProps> = ({
                                     children1,
                                     children2,
                                     pageTitle,
                                     cardTitle1,
                                     cardTitle2,
                                     cardClassName1,
                                     cardClassName2
                                 }) => {
    return (
        <div className={styles.page}>
            <div className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>{pageTitle}</h1>
            </div>
            <div className={styles.cardLayout}>
                <Card className={cardClassName1} title={cardTitle1}>
                    {children1}
                </Card>
                <Card className={cardClassName2} title={cardTitle2}>
                    {children2}
                </Card>

            </div>
        </div>
    );
};

export default PageCard;
