import { NativeBaseProvider } from 'native-base';

import { AppRouter } from './AppRouter';
import { nativeBaseTheme } from './theme';

export default function App() {
  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
        <AppRouter />
    </NativeBaseProvider>
  );
}
