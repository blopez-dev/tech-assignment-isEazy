import { useDocL10n } from '@/i18n/useDocL10n.ts';
import GlobalStyle from './styles/globalStyles.ts';
import { AppLayout } from '@/Layouts';

function App(): JSX.Element {
  useDocL10n();
  return (
    <div>
      <GlobalStyle />
      <AppLayout />
    </div>
  );
}

export default App;
