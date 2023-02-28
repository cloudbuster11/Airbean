import { useState } from 'react';

export default function ProfileForm({ title, button, handler, children }) {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const submit = (event) => {
    event.preventDefault();
    handler(data);
  }

  return (
    <article>
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
};
