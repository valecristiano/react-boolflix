import { createContext, useContext, useState } from "react";

const FilmSearchContext = createContext();

function SearchProvider({ children }) {
  const [resultsList, setResultsList] = useState([]);
  const [resultsListTv, setResultsListTv] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const contextValue = {
    resultsList,
    setResultsList,
    resultsListTv,
    setResultsListTv,
    isLoading,
    setIsLoading,
  };

  return <FilmSearchContext.Provider value={contextValue}> {children} </FilmSearchContext.Provider>;
}

function useSearch() {
  return useContext(FilmSearchContext);
}

export { SearchProvider, useSearch };
