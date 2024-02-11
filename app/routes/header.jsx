import React from 'react';
import HeaderBackground from "../components/HeaderBackground/HeaderBackground";
import HeaderNavigation from "../components/HeaderNavigation/HeaderNavigation";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import MilestoneContainer from "../components/MilestoneContainer/MilestoneContainer"
// import { Canvas } from 'react-three-fiber';

export default function Headers() {
    return (
        <React.Fragment>
            <HeaderNavigation />
            <HeaderBackground />
            <ContentContainer/>
            <MilestoneContainer/>
        </React.Fragment>

    );
}