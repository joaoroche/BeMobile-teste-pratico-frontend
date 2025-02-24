import React, { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/employees')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      {data.length ? (
        data.map(item => <div key={item.id}>{item.name}</div>)
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Home;
