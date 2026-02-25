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
          <div className="d-flex text-white">
            <h1 className="mx-auto my-5">Cerca i tuoi titoli preferiti</h1>
          </div>
        )}
        {/* indicazioni numero film e serie trovati */}
        {(resultsList.length > 0 || resultsListTv.length > 0) && (
          <p className="text-white">
            {resultsList.length} film trovati e {resultsListTv.length} serie tv trovate{" "}
          </p>
        )}
        {/* list film */}
        <div className="row mt-4">
          {(resultsList.length > 0 || resultsListTv.length > 0) && <h2>Film</h2>}
          {resultsList
            .filter((film) => film.img !== null)
            .map((film) => (
              <div className="col-6  col-lg-4">
                <div key={film.id} className="box card text-bg-dark border-info m-4">
                  <img className="poster-img" height="500" src={`https://image.tmdb.org/t/p/w342/${film.img}`} alt={film.title} />
                  <div className="info-card card-body">
                    <h3 className="card-title">Titolo: {film.title}</h3>
                    {film.original_title && <p className="card-text">{film.original_title}</p>}
                    {film.flag && <img className="py-2" src={film.flag} alt={film.language} width="24" />}
                    {film.overview && <p className="card-text">Trama: {film.overview}</p>}
                    <p className="card-text">Rating: {starsSetter(film.stars)}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* lista serie tv */}
        <div className="row mt-4">
          {(resultsList.length > 0 || resultsListTv.length > 0) && <h2>Serie Tv</h2>}
          {resultsListTv
            .filter((film) => film.img !== null)
            .map((film) => (
              <div className="col-6  col-lg-4">
                <div key={film.id} className="box card text-bg-dark border-info m-4">
                  <img className="poster-img" height="500" src={`https://image.tmdb.org/t/p/w342/${film.img}`} alt={film.title} />
                  <div className="info-card card-body">
                    <h3 className="card-title">Titolo: {film.title}</h3>
                    {film.original_title && <p className="card-text">{film.original_title}</p>}
                    {film.flag && <img className="py-2" src={film.flag} alt={film.language} width="24" />}
                    {film.overview && <p className="card-text">Trama: {film.overview}</p>}
                    <p className="card-text">Rating: {starsSetter(film.stars)}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
