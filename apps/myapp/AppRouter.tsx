import { Route, Routes } from 'react-router';

import { Destination, Router } from '@myapp/components';
import Home from '@myapp/screens/Home';
import About from '@myapp/screens/About';

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={Destination.About} element={<About />} />
        </Routes>
      </Router>
    </>
  );
};
