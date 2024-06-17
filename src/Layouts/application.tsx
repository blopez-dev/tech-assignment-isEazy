import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, theme } from 'antd';
import { Head } from '@/common/components';
const { Content } = Layout;

export const AppLayout: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Head />
            <Content style={{ padding: '0 48px' }}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </div>
            </Content>
        </Layout>
    );
};
