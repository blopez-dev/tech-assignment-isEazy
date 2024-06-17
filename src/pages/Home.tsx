import { useIntl } from 'react-intl';
export const HomePage = () => {
    const intl = useIntl();
    return <div>{intl.formatMessage({ id: 'home' })}</div>;
};
