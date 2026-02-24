import { useSearch } from "../context/FilmSearchContext";

export default function MainSearch() {
  const { resultsList } = useSearch();
  return (
    <section className="container">
      <div>
        {resultsList && <p className="m-2">{resultsList.length} film trovati</p>}
        <ul>
          {resultsList.map((film) => (
            <ul key={film.id} className="card m-4">
              <li>{film.title}</li>
              <li>{film.original_title}</li>
              <li>{film.original_language}</li>
              <li>{film.vote_average}</li>
            </ul>
          ))}
        </ul>
      </div>
    </section>
  );
}
