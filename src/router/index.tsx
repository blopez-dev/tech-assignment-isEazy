import { createBrowserRouter, useLocation } from 'react-router-dom';
import React, { ReactNode, useEffect } from 'react';
import { AppLayout } from '@/Layouts';
import { HomePage } from '@/pages';

export const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [pathname]);

    return null;
};

type PageProps = {
    children: ReactNode;
};
const PageWrapper = ({ children }: PageProps) => {
    return (
        <>
            <ScrollToTop />
            {children}
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageWrapper children={<AppLayout />} />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
        ],
    },
]);

export default router;
