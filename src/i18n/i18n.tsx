import { IntlProvider } from 'react-intl';

import { defaultLocale, locales } from '@/i18n/ i18n-config.ts';
import { ReactNode, useState } from 'react';
import { LocaleContext } from '@/context';

export const I18nProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState(defaultLocale);

    return (
        <LocaleContext.Provider value={{ locale, setLocale }}>
            <IntlProvider locale={locale} defaultLocale={defaultLocale} messages={locales[locale].messages}>
                {children}
            </IntlProvider>
        </LocaleContext.Provider>
    );
};
