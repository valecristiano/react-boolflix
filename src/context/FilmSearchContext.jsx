import { createContext, useContext, useState } from "react";

const FilmSearchContext = createContext();

function SearchProvider({ children }) {
  const [userSearch, setUserSearch] = useState("");
  const [resultsList, setResultsList] = useState([]);

  const contextValue = { userSearch, setUserSearch, resultsList, setResultsList };

  return <FilmSearchContext.Provider value={contextValue}> {children} </FilmSearchContext.Provider>;
}

function useSearch() {
  return useContext(FilmSearchContext);
}

export { SearchProvider, useSearch };
