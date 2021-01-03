import React, { useState } from 'react';
import './App.css';
import LoginPage from './app/pages/LoginPage.js'
import ToDoPage from './app/pages/TodoPage.js'
import AuthContext from './app/contexts/AuthContext'


function App() {
  const [ user, setUser] = useState(false)
  return (
    <AuthContext.Provider value={{user,setUser}}>
      <div className="app">        
        {user ? <ToDoPage/> : <LoginPage/>  }
      </div>
    </AuthContext.Provider>
  );
}

export default App;
