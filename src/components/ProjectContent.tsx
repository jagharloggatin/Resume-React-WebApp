import React from 'react';
import { ProjectType } from '../types/ProjectTypes';
import MasterThesisProject from "./projects/MasterThesisProject";
import PartyTimeProject from "./projects/PartyTimeProject";
import BlazorTableProject from "./projects/BlazorTableProject";
import HomeAssistantProject from "./projects/HomeAssistantProject";
import PowerBiProject from "./projects/PowerBiProject";
import PhotoShopProjects from "./projects/PhotoShopProjects";

interface ProjectContentProps {
    selectedItem: ProjectType;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ selectedItem }) => {
    switch (selectedItem) {
        case 'Master Thesis':
            return <div><MasterThesisProject/></div>;
        case 'PartyTime!':
            return <div><PartyTimeProject/></div>;
        case 'Blazor Table':
            return <div><BlazorTableProject/></div>;
        case 'Home Assistant':
            return <div><HomeAssistantProject/></div>;
        case 'Power Bi':
            return <div><PowerBiProject/></div>;
        case 'Photoshop':
            return <div><PhotoShopProjects/></div>;
        default:
            return <div>Select a project from the list</div>;
    }
}

export default ProjectContent;