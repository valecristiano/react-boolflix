import { useSearch } from "../context/FilmSearchContext";

export default function MainSearch() {
  const { resultsList, userSearch } = useSearch();
  return (
    <section className="container">
      <div>
        {!userSearch && (
          <div className="d-flex">
            <h1 className="mx-auto my-5">Cerca i tuoi titoli preferiti</h1>
          </div>
        )}
        {userSearch && <p className="m-2">{resultsList.length} film trovati</p>}
        <ul>
          {resultsList.map((film) => (
            <ul key={film.id} className="card m-4">
              <li>{film.title}</li>
              {film.original_title ?? <li>{film.original_title}</li>}
              <li>{film.language}</li>
              <li>{film.stars}</li>
            </ul>
          ))}
        </ul>
      </div>
    </section>
  );
}
