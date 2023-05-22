import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import styles from './styles/DownloadButton.module.css'; // Update this import as needed

interface DownloadButtonProps {
    file: string;
    title: string;
    buttonText: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ file, title, buttonText }) => {
    const handleClick = () => {
        let win = window.open(file);
        if (win) {
            win.document.title = title;
        }
    };
    return (
            <button onClick={handleClick} className={styles.downloadButtons}>
                <DownloadIcon />
                {buttonText}
            </button>

    );
};

export default DownloadButton;