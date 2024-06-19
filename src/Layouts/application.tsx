import React from 'react';
import { Layout } from 'antd';
import { HomePage } from '@/pages';
import { CustomLayout } from './application.styles.ts';
const { Content } = Layout;

export const AppLayout: React.FC = () => {
  return (
    <CustomLayout>
      <Content style={{ padding: '0 48px' }}>
        <HomePage />
      </Content>
    </CustomLayout>
  );
};
