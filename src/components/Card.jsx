export default function Card({ element }) {
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
    <div className="col-6  col-lg-4">
      <div className="box card text-bg-dark border-info m-4">
        <img className="poster-img" height="500" src={`https://image.tmdb.org/t/p/w342/${element.img}`} alt={element.title} />
        <div className="info-card card-body">
          <h3 className="card-title">Titolo: {element.title}</h3>
          {element.original_title && <p className="card-text">{element.original_title}</p>}
          {element.flag && <img className="py-2" src={element.flag} alt={element.language} width="24" />}
          {element.overview && <p className="card-text">Trama: {element.overview}</p>}
          <p className="card-text">Rating: {starsSetter(element.stars)}</p>
        </div>
      </div>
    </div>
  );
}
