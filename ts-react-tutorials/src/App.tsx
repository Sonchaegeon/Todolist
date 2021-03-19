import React from 'react';
import Greetings from './components/Greetings';

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return <Greetings name="Junjoy" onClick={onClick} />;
};

export default App;
