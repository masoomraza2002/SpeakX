import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchPage({ onSearchKeyword, onSearchType }) {
  const [keyword, setKeyword] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!keyword && !type) {
      alert('Please enter a keyword or select a type.');
      return;
    }

    onSearchKeyword(keyword);
    onSearchType(type);
    navigate('/display');
  };

  return (
    <>
      <nav style={{ display: 'flex', margin: 'auto 0', justifyContent: 'center', alignItems: 'center' }} class="navbar navbar-expand-lg navbar-light bg-light">
        <h1>Quest Search</h1>
      </nav>

      <div className="d-flex flex-column align-items-center justify-content-center vh-100 p-5">
        <h1 className='mb-5'>Welcome to the World of Quest Search</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <select
              className="form-select mb-4"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="ANAGRAM">ANAGRAM</option>
              <option value="MCQ">MCQ</option>
              <option value="READ_ALONG">READ_ALONG</option>
              <option value="CONTENT_ONLY">CONTENT_ONLY</option>
              <option value="CONVERSATION">CONVERSATION</option>
            </select>
          </div>
          <div className="mb-5">
            <input
              type="text"
              className="form-control"
              placeholder="Search by keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', margin: 'auto 0', justifyContent: 'center', alignItems: 'center' }}>
            <button type="submit" className="btn btn-primary" >Search</button>
          </div>


        </form>
      </div>
    </>
  );
}

export default SearchPage;
