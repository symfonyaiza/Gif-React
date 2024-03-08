import React, { useState} from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';
import Buscador from './components/Search';

// const GIFS = ['https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3FmaGUyaTAwamE4cnd5eDl2MnlxdXkwdHRreXFrYzQ1eXY0aDU5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RaTAFdOkxs0X6/giphy.gif','https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3FmaGUyaTAwamE4cnd5eDl2MnlxdXkwdHRreXFrYzQ1eXY0aDU5eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RaTAFdOkxs0X6/giphy.gif']
// const DIFFERENT_GIFS = ['https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTc3bGFkbnhudGc4aGc5MGE0dW80ODN2NzFtdTlodmNqMXJrbGNwbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Gbv8EwCxilBeM/giphy.gif','https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTc3bGFkbnhudGc4aGc5MGE0dW80ODN2NzFtdTlodmNqMXJrbGNwbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Gbv8EwCxilBeM/giphy.gif']

function App() {
  // [Valor, actualizar estado de este valor] = useState('valor inicial')
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  return (
    <div className="App">
      <section className="App-content">
        <Buscador onSearch={handleSearch} />
        <Link to='/gif/php'>Gifs de php</Link>
        <Link to='/gif/javascript'>Gifs de js</Link>
        <Link to='/gif/coding'>Gifs de code</Link>
        <Route path='/gif/:keyword' component={ListOfGifs} />
        <ListOfGifs keyword={searchKeyword}/>
      </section>
    </div>
  )
}

export default App;