import { FC } from 'react';
import { Select } from 'antd';

type Props = {
  onSelect: (value: string) => void;
};

export const CountrySelector: FC<Props> = ({ onSelect }) => {
  const Cities = [
    { value: 'london', label: 'London' },
    { value: 'toronto', label: 'Toronto' },
    { value: 'singapore', label: 'Singapore' },
  ];

  return <Select defaultValue={Cities[0].value} style={{ width: 120 }} onChange={onSelect} options={Cities} />;
};
