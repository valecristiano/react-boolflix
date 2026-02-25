import { useSearch } from "../context/FilmSearchContext";

export default function MainSearch() {
  const { resultsList, userSearch, resultsListTv } = useSearch();

  //funzione per array per stelline
  const starsSetter = (number) => {
    const starsLine = [];

    for (let i = 0; i < 5; i++) {
      if (i < number) {
        starsLine.push(<i className="bi bi-star-fill"></i>);
      } else {
        starsLine.push(<i className="bi bi-star"></i>);
      }
    }
    return starsLine;
  };

  return (
    <section className="container">
      <div>
        {/* placeholder ricerca vuota */}
        {!userSearch && (
          <div className="d-flex">
            <h1 className="mx-auto my-5">Cerca i tuoi titoli preferiti</h1>
          </div>
        )}
        {/* indicazioni numero film e serie trovati */}
        {(resultsList.length > 0 || resultsListTv.length > 0) && (
          <p className="m-2">
            {resultsList.length} film trovati e {resultsListTv.length} serie tv trovate{" "}
          </p>
        )}
        {/* list film */}

        <ul>
          {resultsList.map((film) => (
            <li key={film.id} className="card m-4">
              <h3>{film.title}</h3>
              {film.original_title && <p>{film.original_title}</p>}
              {film.flag && <img src={film.flag} alt={film.language} width="24" />}
              <p>{starsSetter(film.stars)}</p>
              <img src={`https://image.tmdb.org/t/p/w342/${film.img}`} width="100" alt={film.title} />
            </li>
          ))}
        </ul>
        {/* lista serie tv */}
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
