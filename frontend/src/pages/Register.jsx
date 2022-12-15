import React from 'react';
import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input placeholder="Name" type="text" />
      </form>
    </div>
  );
};

export default Register;
