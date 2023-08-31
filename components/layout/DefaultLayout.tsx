import React, { ReactNode } from 'react';
import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import PagesMetaHead from '../PagesMetaHead';

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <>
            <PagesMetaHead />
            <AppHeader />
            <div>{children}</div>
            <AppFooter />
        </>
    )
}

export default DefaultLayout;
