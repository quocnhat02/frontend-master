import React, { useState } from 'react';

const Dashboard = () => {
  const [tempGoal, setTempGoal] = useState('');
  const [goal, setGoal] = useState('');

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>{goal | 'No goal found'}</h2>
      <form>
        <input placeholder="Add a Goal" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Dashboard;
