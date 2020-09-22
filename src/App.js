import React from 'react';
import {ApiContextProvider} from "./ApiContext";
import News from './components/News';

function App() {
  return (
    <ApiContextProvider>
      <News />
    </ApiContextProvider>
      
    
  );
}

export default App;
