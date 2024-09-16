import React from 'react';
import { lazy } from 'react';

const HeaderBackground = lazy(() => import("../components/HeaderBackground/HeaderBackground"));
const HeaderNavigation = lazy(() => import("../components/HeaderNavigation/HeaderNavigation"));
const ContentContainer = lazy(() => import("../components/ContentContainer/ContentContainer"));
const MilestoneContainer = lazy(() => import("../components/MilestoneContainer/MilestoneContainer"));
const FooterContainer = lazy(() => import("../components/FooterContainer/FooterContainer"));
// import { Canvas } from 'react-three-fiber';

export default function Headers() {
    return (
        <React.Fragment>
            <HeaderNavigation />
            <HeaderBackground />
            <ContentContainer/>
            <MilestoneContainer/>
            <FooterContainer/>
        </React.Fragment>

    );
}