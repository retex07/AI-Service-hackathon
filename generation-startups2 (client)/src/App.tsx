import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLoader from './components/PageLoader';
import GenerationPage from './pages/generation';
import IndexPage from './pages/index/component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/generation" element={<GenerationPage />} />
      <Route path="/loader" element={<PageLoader />} />
    </Routes>
  );
}

export default App;
