import { Layout } from 'antd';
const { Header } = Layout;
import { SwitcherLanguage } from '../index.ts';

export const Head = () => {
    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <SwitcherLanguage />
        </Header>
    );
};
