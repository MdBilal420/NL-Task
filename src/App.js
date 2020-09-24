import React,{Component} from 'react';
import {ApiContextProvider} from "./ApiContext";
import News from './components/News';
// import SearchArticle from './components/SearchArticle';
import Nav from './components/layout/Nav';

class App extends Component {
  render(){
  return (
    <ApiContextProvider>
      <Nav />



        <News />
    </ApiContextProvider>
      
    
  );
}
}

export default App;
