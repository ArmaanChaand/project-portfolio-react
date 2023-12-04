// CommonContext.js
import React, { createContext, useContext, useState} from 'react';

const CommonContext = createContext();

function CommonProvider({ children }) {
 
 

  const [section_inview, set_section_inview] = useState("HOME")


  return (
    <CommonContext.Provider value={{ 
     section_inview, set_section_inview,
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
