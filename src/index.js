import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import {Context} from './context/context'

function Main () {
  const [items, setItems] = useState([])
  const [itemEdit, setItemEdit] = useState('')
  return (
    <React.StrictMode>
      <Context.Provider value={{items, setItems, itemEdit, setItemEdit}}>
        <App />
      </Context.Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Main />,document.getElementById('root'));
