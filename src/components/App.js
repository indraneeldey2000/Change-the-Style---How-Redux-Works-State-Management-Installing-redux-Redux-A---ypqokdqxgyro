import React, { createContext } from 'react'
import '../styles/App.css';
import { UserProfile } from './UserProfile';

export const UserContext = createContext({});
const App = () => {

  return (
    <UserContext.Provider value={{ name: "Newton", age: 3 }}>
      <UserProfile />
    </UserContext.Provider>
  )
}


export default App;
