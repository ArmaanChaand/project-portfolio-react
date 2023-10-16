// CommonContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getDbUrl } from '../assets/utils';

// Create a new context
const CommonContext = createContext();

// Create a provider component that will wrap your app
function CommonProvider({ children }) {
  // Define the shared state and functions here
  const [dataBase, setDataBase] = useState({});
  useEffect(()=>{
    const URL = getDbUrl()
    fetch(URL).then(res => res.json())
    .then(data => setDataBase(data))
    .catch(error => console.log(error))
  }, [])

  // You can define functions to update the shared state here

  return (
    <CommonContext.Provider value={{ dataBase }}>
      {children}
    </CommonContext.Provider>
  );
}

// Custom hook to access the Common context
function useCommon() {
  return useContext(CommonContext);
}

export { CommonProvider, useCommon };
