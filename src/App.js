import React, { useState, useEffect } from 'react';

function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://q0297t4wx3.execute-api.eu-west-2.amazonaws.com/dev/media'); //  URL with your backend endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsersData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Users Data</h1>
      <ul>
        {usersData.map(user => (
          <li key={user.user_id}>
            <p>Username: {user.username}</p>
            <p>Full Name: {user.full_name}</p>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Location: {user.location.city}, {user.location.country}</p>
            <p>Interests: {user.interests.join(', ')}</p>
            <p>Membership Level: {user.membership_level}</p>
            <p>Last Login: {user.last_login}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;