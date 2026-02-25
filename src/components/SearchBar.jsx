import { useState } from "react";
import { useSearch } from "../context/FilmSearchContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=0884b4dae30455ae610cbf84ab65d490&query=";
const apiUrlTv = "https://api.themoviedb.org/3/search/tv?api_key=0884b4dae30455ae610cbf84ab65d490&query=";

export default function SearchBar({}) {
  //Consumo dati da context
  const { setResultsList, setResultsListTv, setIsLoading } = useSearch();

  //stato input
  const [userSearch, setUserSearch] = useState("");

  // stato Navigate
  const navigate = useNavigate();

  //funzione gestione dati di axios
  const axiosDataManagement = (element) => {
    const title = element.title || element.name;
    const originalTitleChoice = element.original_title || element.original_name;
    const original_title = originalTitleChoice === title ? "" : originalTitleChoice;
    const language = element.original_language || element.origin_country;
    const stars = Math.round(element.vote_average / 2);
    return {
      id: element.id,
      title,
      original_title,
      language,
      flag: language ? `https://flagcdn.com/16x12/${language.toLowerCase()}.png` : null,
      stars,
      img: element.poster_path || element.backdrop_path,
      overview: element.overview,
    };
  };

  //Funzione submit della search - Axios
  const formSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const promises = [axios.get(`${apiUrl}${userSearch}`), axios.get(`${apiUrlTv}${userSearch}`)];

    Promise.all(promises)
      .then((responses) => {
        const filmResponse = responses[0].data.results.map((film) => axiosDataManagement(film));
        const tvShowResponse = responses[1].data.results.map((tvShow) => axiosDataManagement(tvShow));
        setResultsList(filmResponse);
        setResultsListTv(tvShowResponse);
        console.log(responses[0].data);
        console.log(responses[1].data);
      })
      .catch((err) => {
        console.error("ERRORE", err);
        navigate("/404");
      })
      .finally(() => setIsLoading(false));
  };

  //Funzione onclick x nuova ricerca
  const newSeachClick = () => {
    setUserSearch("");
    setResultsList([]);
    setResultsListTv([]);
  };

  return (
    <form onSubmit={formSubmit} className="d-flex ms-auto align-items-center">
      <input value={userSearch} onChange={(e) => setUserSearch(e.target.value)} type="text" className="form-control mx-1" id="filmSearch" placeholder="Cerca un titolo..." />
      <button type="submit" className="btn btn-dark mx-1">
        Cerca
      </button>
      <button onClick={newSeachClick} type="button" className="btn btn-dark mx-1 text-nowrap">
        Nuova ricerca
      </button>
    </form>
  );
}
