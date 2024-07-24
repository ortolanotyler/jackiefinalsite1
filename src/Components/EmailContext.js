import React, { createContext, useState } from 'react';

export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [emailsList, setEmailsList] = useState([]);

  const addEmail = (email) => {
    setEmailsList((prevEmails) => [...prevEmails, email]);
  };

  return (
    <EmailContext.Provider value={{ emailsList, addEmail }}>
      {children}
    </EmailContext.Provider>
  );
};
