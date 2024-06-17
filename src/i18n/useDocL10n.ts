import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { locales } from './ i18n-config.ts';

export const useDocL10n = () => {
    const { locale, formatMessage } = useIntl();
    useEffect(() => {
        document.dir = locales[locale].dir;

        document.title = formatMessage({ id: 'title' });
    }, [formatMessage, locale]);
};
