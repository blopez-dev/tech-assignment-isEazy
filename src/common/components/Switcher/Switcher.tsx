import React, { useContext } from 'react';
import { Select } from 'antd';

import { LocaleContext, LocaleContextType } from '@/context';
import { locales } from '@/i18n';

export const SwitcherLanguage: React.FC = () => {
    const { locale, setLocale } = useContext(LocaleContext) as LocaleContextType;

    const handleChange = (value: string) => {
        setLocale(value);
    };
    const languages = Object.keys(locales).map((item) => ({ value: item, label: locales[item].name }));

    return <Select defaultValue={locale} style={{ width: 120 }} onChange={handleChange} options={languages} />;
};
