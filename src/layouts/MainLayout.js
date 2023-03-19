
import React from 'react';
import PageStructureXs from './PageStructureSm';
import PageStructureMd from './PageStructureLg';
import PageMenu from './Menu';

export default function MainLayout() {
    const menu = <PageMenu />
    return (
        <>
            <PageStructureXs drawerContent={menu}/>
            <PageStructureMd drawerContent={menu}/>
        </>
    )
}

