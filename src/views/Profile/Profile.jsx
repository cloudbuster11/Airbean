import { useState } from 'react';

export default function Profile() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [displayCreateAccout, setDisplayCreateAccount] = useState(false);

  const signInElem = (
    <section>
      <p>Logga in nedan för att se din orderhistorik</p>
      <form>
        <label htmlFor='username'>Namn</label>
        <input name='username' id='username' type='text' placeholder='Användarnamn' />
        <label htmlFor='password'>Lösenord</label>
        <input name='password' id='password' type='password' placeholder='Lösenord' />
      </form>
      <p>
        Inget konto än? Skapa ett <span onClick={() => setDisplayCreateAccount(true)}>här</span>
      </p>
      <button>Logga in</button>
    </section>
  );

  const createAccountElem = (
    <section>
      <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
      <form>
        <label htmlFor='username'>Namn</label>
        <input name='username' id='username' type='text' placeholder='Användarnamn' />
        <label htmlFor='password'>Lösenord</label>
        <input name='password' id='password' type='password' placeholder='Lösenord' />
      </form>
      <p>
        Redan medlem? Logga in <span onClick={() => setDisplayCreateAccount(false)}>här</span>
      </p>
      <button>Skapa konto</button>
    </section>
  );

  // Om isSignedIn är true ska orderhistorik visas istället för null

  return (
    <article>
      <h1>Välkommen till AirBean-familjen!</h1>
      {displayCreateAccout && !isSignedIn ? createAccountElem : null}
      {!displayCreateAccout && !isSignedIn ? signInElem : null}
      {isSignedIn ? <p>Orderhistorik</p> : null}
    </article>
  );
}
