import { useEffect, useState } from 'react';

import ProfileForm from '../../components/ProfileForm/ProfileForm';
import OrderHistory from '../../components/OrderHistory/OrderHistory';

import { postLogin, postSignUp } from '../../helpers/api';

import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import './Profile.scss';

export default function Profile() {
  const [token, setToken] = useState(sessionStorage.token);
  const [error, setError] = useState('');
  const [displaySignUp, setDisplaySignUp] = useState(false);

  const login = async (userData) => {
    const data = await postLogin(userData);

    if (data.success) {
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('username', userData.username);
      setToken(data.token);
    } else {
      setError('Fel användarnamn eller lösenord.');
    }
  };

  const signUp = async (userData) => {
    const data = await postSignUp(userData)

    if (data.success) {
      setDisplaySignUp(false);
    } else {
      setError('Användarnamn existerar redan.');
    }
  };

  useEffect(() => {
    setError('');
  }, [token, displaySignUp]);

  const loginForm = (
    <ProfileForm
      title='Logga in nedan för att se din orderhistorik.'
      button='Logga in'
      handler={login}
      error={error}
      key='login'
    >
      <p className='form__changeview'>
        Inget konto än? Skapa ett{' '}
        <span className='form__link' onClick={() => setDisplaySignUp(true)}>
          här
        </span>
      </p>
    </ProfileForm>
  );

  const signUpForm = (
    <ProfileForm
      title='Genom att skapa ett konto nedan kan du spara och se din orderhistorik.'
      button='Skapa konto'
      handler={signUp}
      error={error}
      key='signUp'
    >
      <p className='form__changeview'>
        Redan medlem? Logga in{' '}
        <span className='form__link' onClick={() => setDisplaySignUp(false)}>
          här
        </span>
      </p>
    </ProfileForm>
  );

  return (
    <main className='container profile'>
      <Header>
        <Nav />
      </Header>

      {token ? <OrderHistory /> : !displaySignUp ? loginForm : signUpForm}
    </main>
  );
}
