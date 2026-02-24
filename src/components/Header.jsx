import axios from "axios";
import { useSearch } from "../context/FilmSearchContext";

const apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=0884b4dae30455ae610cbf84ab65d490&query=";

export default function Header() {
  const { userSearch, setUserSearch, setResultsList } = useSearch();

  const formSubmit = (e) => {
    e.preventDefault();
    console.log("submit", userSearch);

    axios.get(`${apiUrl}${userSearch}`).then((res) => {
      setResultsList(res.data.results);
    });
  };

  const newSeachClick = () => {
    setResultsList([]);
    setUserSearch("");
  };

  return (
    <header className="bg-light">
      <section className="container">
        <div className="row">
          <div className="col-6 p-2">
            <h1>BoolFlix</h1>
          </div>
          <div className="col-6">
            <form onSubmit={formSubmit} className="row row-cols-lg-auto g-3 justify-content-end align-items-center m-auto">
              <div className="col-12">
                <div className="input-group">
                  <label className="col-4 form-label m-auto" htmlFor="filmSearch">
                    Ricerca titoli
                  </label>
                  <input value={userSearch} onChange={(e) => setUserSearch(e.target.value)} type="text" className="form-control" id="filmSearch" />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-dark mx-1">
                  Cerca
                </button>
                <button onClick={newSeachClick} type="button" className="btn btn-dark mx-1">
                  Nuova ricerca
                </button>
              </div>
            </form>
          </div>
        </div>
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
