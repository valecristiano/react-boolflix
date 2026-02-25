import { useSearch } from "../context/FilmSearchContext";
import ResultsList from "./ResultsList";

export default function MainSearch() {
  const { resultsList, resultsListTv } = useSearch();

  // condizione array non vuoto
  const listsLenght = resultsList.length > 0 || resultsListTv.length > 0;

  return (
    <section className="container">
      <div>
        {/* placeholder ricerca vuota */}
        {!listsLenght && (
          <div className="d-flex text-white">
            <h1 className="mx-auto my-5">Cerca i tuoi titoli preferiti</h1>
          </div>
        )}
        {/* indicazioni numero film e serie trovati */}
        {listsLenght && (
          <p className="text-white">
            {resultsList.length} film trovati e {resultsListTv.length} serie tv trovate{" "}
          </p>
        )}
        {/* list film */}
        <ResultsList category="Film" list={resultsList}></ResultsList>
        {/* lista serie tv */}
        <ResultsList category="Serie Tv" list={resultsListTv}></ResultsList>
      </div>
    </section>
  );
}
