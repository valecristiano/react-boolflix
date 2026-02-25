import axios from "axios";
import { useSearch } from "../context/FilmSearchContext";
import { Link, useNavigate } from "react-router-dom";

const apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=0884b4dae30455ae610cbf84ab65d490&query=";
const apiUrlTv = " https://api.themoviedb.org/3/search/tv?api_key=0884b4dae30455ae610cbf84ab65d490&query=";

export default function Header() {
  //Consumo dati da context
  const { userSearch, setUserSearch, setResultsList, setResultsListTv, isLoading, setIsLoading, errorApi, setErrorApi } = useSearch();

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

  //Funzione submit della search
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
      })
      .finally(() => setIsLoading(false));
  };

  if (isLoading)
    return (
      <div className="container layover">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  //Funzione onclick x nuova ricerca
  const newSeachClick = () => {
    setUserSearch("");
    setResultsList([]);
    setResultsListTv([]);
  };

  return (
    <header className="bg-light">
      <section className="">
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body p-1 m-3" data-bs-theme="dark">
          <div className="container-fluid">
            <div className="m-2">
              <Link to="/" className="navbar-brand">
                BoolFlix
              </Link>
            </div>
            <div className="m-2">
              {/* FORM */}
              <form onSubmit={formSubmit} className="d-flex ms-auto align-items-center">
                <input value={userSearch} onChange={(e) => setUserSearch(e.target.value)} type="text" className="form-control mx-1" id="filmSearch" placeholder="Cerca un titolo..." />

                <button type="submit" className="btn btn-dark mx-1">
                  Cerca
                </button>
                <button onClick={newSeachClick} type="button" className="btn btn-dark mx-1 text-nowrap">
                  Nuova ricerca
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
}

{
  /* <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div> */
}
