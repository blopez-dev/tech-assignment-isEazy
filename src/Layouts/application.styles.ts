import styled from 'styled-components';
import { Layout } from 'antd';
import { LayoutProps } from 'antd/es/layout';

export const CustomLayout: typeof Layout = styled(Layout)<LayoutProps>`
    background-color: #dee2e6;
` as never;
