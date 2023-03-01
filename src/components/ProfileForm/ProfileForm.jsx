import { useState } from 'react';

import './ProfileForm.scss';

export default function ProfileForm({ title, button, handler, children }) {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    handler(data);
  };

  return (
    <article className='form'>
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>{title}</p>

      <form onSubmit={submit}>
        <label>Namn</label>
        <input
          name='username'
          type='text'
          placeholder='Användarnamn'
          value={data.username}
          onChange={handleChange}
        />

        <label>Lösenord</label>
        <input
          name='password'
          type='password'
          placeholder='Lösenord'
          value={data.password}
          onChange={handleChange}
        />
        <button type='submit'>{button}</button>
      </form>

      {children}
    </article>
  );
}
