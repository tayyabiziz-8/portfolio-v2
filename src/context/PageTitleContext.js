// src/context/PageTitleContext.js
import { createContext, useState, useContext } from 'react';

// Create context
const PageTitleContext = createContext({
  pageTitle: 'Home',
  setPageTitle: () => {},
});

// Create provider component
export const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState('Home');

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};

// Custom hook for using the context
export const usePageTitle = () => useContext(PageTitleContext);

export default PageTitleContext;