import React from 'react';
import HeaderBackground from "../components/HeaderBackground/HeaderBackground";
import HeaderNavigation from "../components/HeaderNavigation/HeaderNavigation"
// import { Canvas } from 'react-three-fiber';

export default function Headers() {
    return (
        <React.Fragment>
            <HeaderNavigation />
            <HeaderBackground />
        </React.Fragment>

    );
}