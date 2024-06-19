import { FC } from 'react';
import { Row, Col } from 'antd';
import { LanguageSwitcher } from '../index.ts';
import { CountrySelector } from '../index.ts';

import { HeaderContainer } from '@/common/components/Header/header.styles.ts';
import BrandLogo from '../../../assets/brand-logo.png';

type Props = {
  onCitySelect: (value: string) => void;
};

export const Head: FC<Props> = ({ onCitySelect }) => {
  return (
    <HeaderContainer>
      <Row>
        <Col span={8}>
          <div className="demo-logo">
            <img src={BrandLogo} alt="Mantine logo" />
          </div>
        </Col>
        <Col span={8} className="search-input">
          <CountrySelector onSelect={onCitySelect} />
        </Col>
        <Col span={8} className="language-select">
          <LanguageSwitcher />
        </Col>
      </Row>
    </HeaderContainer>
  );
};
