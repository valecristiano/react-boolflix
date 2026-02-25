import { useSearch } from "../context/FilmSearchContext";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  //Consumo dati da context
  const { isLoading } = useSearch();

  //Loading
  if (isLoading)
    return (
      <div className="container layover">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

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
              {/* Form */}
              <SearchBar />
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
