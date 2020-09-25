import React,{Component} from 'react';
import {ApiContextProvider} from "./ApiContext";
import News from './components/News';
import Search from './components/Search';

// import SearchArticle from './components/SearchArticle';
import Nav from './components/layout/Nav';

class App extends Component {
  render(){
  return (
    <ApiContextProvider>
      <Nav />
      <Search />


        <News />
    </ApiContextProvider>
      
    
  );
}
}

export default App;
