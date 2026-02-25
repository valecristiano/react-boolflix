import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import { SearchProvider } from "./context/FilmSearchContext";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage}></Route>
              <Route path="*" Component={NotFoundPage}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  );
}
