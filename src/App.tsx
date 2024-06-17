import { RouterProvider } from 'react-router-dom';
import { useDocL10n } from '@/i18n/useDocL10n.ts';
import GlobalStyle from './styles/globalStyles.ts';
import routes from './router';

function App(): JSX.Element {
    useDocL10n();
    return (
        <div>
            <GlobalStyle />
            <RouterProvider router={routes} />
        </div>
    );
}

export default App;
