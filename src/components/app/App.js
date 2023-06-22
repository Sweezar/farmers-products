import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import advantagesList from "/src/mocks/advantages-list";
import { GlobalStyle } from "./styles";
import productsList from "/src/mocks/products-list";
import { AppRoute } from "/src/const";
import MainPage from "../pages/main-page/main-page";
import BuyPage from "../pages/buy-page/buy-page";
import ScrollToTop from "../ui/scroll-to-top/scroll-to-top";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage advantages={advantagesList} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={
                <BuyPage advantages={advantagesList} products={productsList} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
