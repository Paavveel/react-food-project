import React, { useState } from 'react';

function Search({ cb }) {
  const [value, setValue] = useState('');

  const handleKey = (evt) => {
    if (evt.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className='row'>
      <div className='input-field col s12'>
        <input
          type='search'
          name=''
          id='search-field'
          placeholder='search'
          onKeyDown={handleKey}
          onChange={(evt) => setValue(evt.target.value)}
          value={value}
        />
        <button
          className='btn'
          style={{ position: 'absolute', top: 0, right: 0 }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
