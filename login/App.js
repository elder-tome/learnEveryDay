import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#595757' />
      <Routes />
    </>
  );
}

export default App;