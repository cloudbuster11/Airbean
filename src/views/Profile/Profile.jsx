import { useState } from 'react';

import OrderHistory from '../../components/OrderHistory/OrderHistory';

export default function Profile() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [displayCreateAccout, setDisplayCreateAccount] = useState(false);

  const [userName, setUsername] = useState('');
  const [passWord, setPassWord] = useState('');

  const createAccount = async () => {
    const url = 'https://airbean.awesomo.dev/api/user/signup';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userName, password: passWord }),
    };

    try {
      const resp = await fetch(url, requestOptions);
      const data = await resp.json();
      alert('Användare skapad.');
    } catch (err) {
      console.error(err);
    }
  };

  const signIn = async () => {
    const url = 'https://airbean.awesomo.dev/api/user/login';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userName, password: passWord }),
    };

    try {
      const resp = await fetch(url, requestOptions);
      const data = await resp.json();
      sessionStorage.setItem('token', data.token);
      setIsSignedIn(true);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  function handleClickCreateAccount(e) {
    e.preventDefault();
    createAccount();
  }

  function handleClickSignIn(e) {
    e.preventDefault();
    signIn();
  }

  const signInElem = (
    <section>
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>Logga in nedan för att se din orderhistorik</p>
      <form>
        <label htmlFor='username'>Namn</label>
        <input
          name='username'
          id='username'
          type='text'
          placeholder='Användarnamn'
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Lösenord</label>
        <input
          name='password'
          id='password'
          type='password'
          placeholder='Lösenord'
          onChange={(e) => setPassWord(e.target.value)}
        />
      </form>
      <p>
        Inget konto än? Skapa ett <span onClick={() => setDisplayCreateAccount(true)}>här</span>
      </p>
      <button onClick={(e) => handleClickSignIn(e)}>Logga in</button>
    </section>
  );

  const createAccountElem = (
    <section>
      <h1>Välkommen till AirBean-familjen!</h1>
      <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
      <form>
        <label htmlFor='username'>Namn</label>
        <input
          name='username'
          id='username'
          type='text'
          placeholder='Användarnamn'
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Lösenord</label>
        <input
          name='password'
          id='password'
          type='password'
          placeholder='Lösenord'
          onChange={(e) => setPassWord(e.target.value)}
        />
      </form>
      <p>
        Redan medlem? Logga in <span onClick={() => setDisplayCreateAccount(false)}>här</span>
      </p>
      <button onClick={(e) => handleClickCreateAccount(e)}>Skapa konto</button>
    </section>
  );

  return (
    <article>
      {!displayCreateAccout && !isSignedIn ? signInElem : null}
      {displayCreateAccout && !isSignedIn ? createAccountElem : null}
      {isSignedIn ? <OrderHistory /> : null}
    </article>
  );
}
