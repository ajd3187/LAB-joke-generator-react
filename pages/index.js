import { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [joke, newJoke] = useState('');

  const handleClicked = () => {
    getJoke().then((newJokeValue) => {
      newJoke(newJokeValue);
    });
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Welcome Home!</h1>
      <h2>{joke}</h2>
      <button type="button" onClick={handleClicked}>Get a Joke!</button>
    </div>
  );
}

export default Home;
