import React, { useState } from 'react';

const Dashboard = () => {
  const [tempGoal, setTempGoal] = useState('');
  const [goal, setGoal] = useState('');

  const addGoal = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:1337/api/dashboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: await JSON.stringify({
        tempGoal,
      }),
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{goal | 'No goal found'}</h2>
      <form onSubmit={addGoal}>
        <input
          placeholder="Add a Goal"
          value={tempGoal}
          onChange={(e) => setTempGoal(e.target.value)}
          type="text"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Dashboard;
