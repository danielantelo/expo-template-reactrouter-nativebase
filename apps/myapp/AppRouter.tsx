import { Route, Routes, Router  } from 'expo-react-router-wrapper';

import Home from '@myapp/screens/Home';
import About from '@myapp/screens/About';

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/About'} element={<About />} />
        </Routes>
      </Router>
    </>
  );
};
