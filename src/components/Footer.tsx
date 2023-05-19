import React from 'react';
import styles from './styles/Footer.module.css'
import {Link} from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <p>&copy; 2023 MyWebsite</p>
        </footer>
    );
};

export default Footer;