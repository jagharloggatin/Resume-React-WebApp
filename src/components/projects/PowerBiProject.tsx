import React from 'react';
import DownloadButton from "../DownloadButton";

const PowerBiProject: React.FC = () => {
    return (
        <div>
            Download the project
            <DownloadButton
                file="/files/presentation3.5.pbix"
                title="CV"
                buttonText="Download"
            />
        </div>
    );
};

export default PowerBiProject;