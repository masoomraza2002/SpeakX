import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DisplayPage from './components/DisplayPage';
import SearchPage from './components/SearchPage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SearchPage
              onSearchKeyword={setSearchQuery}
              onSearchType={setSearchType}
            />
          }
        />
        <Route
          path="/display"
          element={
            <DisplayPage searchQuery={searchQuery} searchType={searchType} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
