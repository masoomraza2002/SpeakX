import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DisplayPage({ searchQuery, searchType }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchQuery && !searchType) {
      setError('No search data available.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const params = new URLSearchParams();
    if (searchQuery) params.append('keyword', searchQuery);
    if (searchType) params.append('type', searchType);

    axios
      .get(`http://localhost:3002/api/search?${params.toString()}`)
      .then((response) => {
        setData(response.data.result);
        setLoading(false);
      })
      .catch(() => {
        setError('An error occurred while fetching data.');
        setLoading(false);
      });
  }, [searchQuery, searchType]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">{error}</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', margin: 'auto 0', justifyContent: 'center', alignItems: 'center' }}>
        <button className="btn btn-secondary mt-5" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
      <div className='p-5'>
        <h1 style={{ display: 'flex', margin: 'auto 0', justifyContent: 'center', alignItems: 'center' }} className='mb-5'>
          Search Results
        </h1>
        {data.length === 0 ? (
          <p>No results found.</p>
        ) : (
          data.map((item, index) => (
            <div key={item._id} className="card mb-3">
              <div className="card-body">
                <h5>{`Q${index + 1}: ${item.title}`}</h5>

                {item.type === 'ANAGRAM' && (
                  <div>
                    <div className=" mb-3">
                      {item.blocks.map((block, i) => (
                        <div>
                         <div key={i} style={{ display: 'flex', margin: 'auto 0', justifyContent: 'center', alignItems: 'center' }}>{block.text}</div>
                        </div>
                      ))}
                    </div>
                    <p>{item.type}</p>
                    <p className='text-muted'>
                      
                      {item.solution}
                    </p>
                  </div>
                )}

                {item.type === 'MCQ' && (
                  <div>
                    <div className=" mb-3">
                      {item.options.map((option, i) => (
                        <div >
                          <div key={i} style={{ display: 'flex', margin: 'auto 0', justifyContent: 'center', alignItems: 'center' }}>{option.text}</div>
                        </div>

                      ))}
                    </div>
<p>{item.type}</p>
                    <p className='text-muted'>
                      
                      <strong>Ans</strong>: {item.options.find(option => option.isCorrectAnswer).text}
                    </p>
                  </div>
                )}

                {item.type === 'READ_ALONG' && (<p>{item.type}</p>)}

                {item.type === 'CONVERSATION' && (<p>{item.type}</p>)}

                {item.type === 'CONTENT_ONLY' && (<p>{item.type}</p>)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );

}

export default DisplayPage;
