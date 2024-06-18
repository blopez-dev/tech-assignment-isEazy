import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Head } from '@/common/components';
const { Content } = Layout;
import { CustomLayout } from './application.styles.ts';

export const AppLayout: React.FC = () => {
    return (
        <CustomLayout>
            <Head />
            <Content style={{ padding: '0 48px' }}>
                <div>
                    <Outlet />
                </div>
            </Content>
        </CustomLayout>
    );
};
