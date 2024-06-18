import { Input, Row, Col } from 'antd';
import { SwitcherLanguage } from '../index.ts';
import type { SearchProps } from 'antd/es/input/Search';
import { HeaderContainer } from '@/common/components/Header/header.styles.ts';
const { Search } = Input;
import BrandLogo from '../../../assets/brand-logo.png';
export const Head = () => {
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    return (
        <HeaderContainer>
            <Row>
                <Col span={8}>
                    <div className="demo-logo">
                        <img src={BrandLogo} alt="Mantine logo" />
                    </div>
                </Col>
                <Col span={8} className="search-input">
                    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                </Col>
                <Col span={8} className="language-select">
                    <SwitcherLanguage />
                </Col>
            </Row>
        </HeaderContainer>
    );
};
