import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="container">
      <section className="homepage row align-items-end justify-content-end ">
        <div className="col-12 col-md-6"></div>
        <div className="col-12 col-md-6 align-self-center">
          <h1>La pagina che stai cercando non è stata trovata</h1>
          <Link to="/" className="btn btn-outline-light text-white text-decoration-none my-5 mx-3">
            Torna alla Home
          </Link>
        </div>
      </section>
    </section>
  );
}
