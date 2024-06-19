import { FC } from 'react';
import { Row, Col } from 'antd';
import { LanguageSwitcher } from '../index.ts';
import { CountrySelector } from '../index.ts';
import { useIntl } from 'react-intl';
import { HeaderContainer } from '@/common/components/Header/header.styles.ts';
import BrandLogo from '../../../assets/brand-logo.png';

type Props = {
  onCitySelect: (value: string) => void;
};

export const Head: FC<Props> = ({ onCitySelect }) => {
  const { formatMessage } = useIntl();

  return (
    <HeaderContainer>
      <Row>
        <Col span={8}>
          <div className="demo-logo">
            <img src={BrandLogo} alt="Mantine logo" />
          </div>
        </Col>
        <Col span={8} className="city-select">
          <span>{formatMessage({ id: 'citySelector' })}</span>
          <CountrySelector onSelect={onCitySelect} data-testid="country-selector" />
        </Col>
        <Col span={8} className="language-select">
          <LanguageSwitcher />
        </Col>
      </Row>
    </HeaderContainer>
  );
};
