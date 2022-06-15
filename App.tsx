import { Route, Routes } from 'react-router';
import { NativeBaseProvider } from 'native-base';

import { nativeBaseTheme } from './theme';

import { Destination, Router } from './utils/routing';
import { Loader } from './components/Loader';

import About from './screens/About';
import Home from './screens/Home';

export default function App() {
  const activeProgramLoaded = true;

  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      {!activeProgramLoaded ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={Destination.About} element={<About />} />
          </Routes>
        </Router>
      )}
    </NativeBaseProvider>
  );
}
