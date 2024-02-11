import React from 'react';
import { lazy } from 'react';
const HeaderBackground = lazy(() => import("../components/HeaderBackground/HeaderBackground"));
const HeaderNavigation = lazy(() => import("../components/HeaderNavigation/HeaderNavigation"));
const ContentContainer = lazy(() => import("../components/ContentContainer/ContentContainer"));
const MilestoneContainer = lazy(() => import("../components/MilestoneContainer/MilestoneContainer"));
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