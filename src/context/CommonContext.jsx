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
    const URL = "/db/db.json"
    fetch(URL).then(res => res.json())
    .then(data => setDataBase(data))
    .catch(error => console.log(error))
  }, [])

 

  const [section_inview, set_section_inview] = useState("HOME")


  return (
    <CommonContext.Provider value={{ 
      dataBase, section_inview, set_section_inview,
      }}>
      {children}
    </CommonContext.Provider>
  );
}

// Custom hook to access the Common context
function useCommon() {
  return useContext(CommonContext);
}

export { CommonProvider, useCommon };
