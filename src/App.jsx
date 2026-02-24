import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import { SearchProvider } from "./context/FilmSearchContext";

export default function App() {
  return (
    <>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route index Component={HomePage}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </>
  );
}
