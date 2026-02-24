import { useSearch } from "../context/FilmSearchContext";

export default function MainSearch() {
  const { resultsList, userSearch, resultsListTv } = useSearch();
  return (
    <section className="container">
      <div>
        {!userSearch && (
          <div className="d-flex">
            <h1 className="mx-auto my-5">Cerca i tuoi titoli preferiti</h1>
          </div>
        )}
        {userSearch && (
          <p className="m-2">
            {resultsList.length} film trovati e {resultsListTv.length} serie tv trovate{" "}
          </p>
        )}

        <ul>
          {resultsList.map((film) => (
            <li key={film.id} className="card m-4">
              <h3>{film.title}</h3>
              {film.original_title && <p>{film.original_title}</p>}
              {film.flag && <img src={film.flag} alt={film.language} width="24" />}
              <p>{film.stars}</p>
            </li>
          ))}
        </ul>

        <ul>
          {resultsListTv.map((film) => (
            <li key={film.id} className="card m-4">
              <h3>{film.title}</h3>
              {film.original_title && <p>{film.original_title}</p>}
              {film.flag && <img src={film.flag} alt={film.language} width="24" />}
              <p>{film.stars}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
