import { Route, Routes } from 'react-router';
import { NativeBaseProvider } from 'native-base';

import { nativeBaseTheme } from './theme';
import { Destination, Router } from './utils/routing';
import About from './screens/About';
import Home from './screens/Home';
import Form from './screens/Form';

export default function App() {
  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={Destination.About} element={<About />} />
          <Route path={Destination.Form} element={<Form />} />
        </Routes>
      </Router>
    </NativeBaseProvider>
  );
}
