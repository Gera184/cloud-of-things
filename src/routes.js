import Main from "./components/main/Main";
import BeerPage from "./pages/beer-page/BeerPage";
import BeersPage from "./pages/beers-page/BeersPage";

export const routes = [
  {
    title: "Home",
    path: "/",
    element: <Main />,
  },
  {
    title: "Beers",
    path: "/beers",
    element: <BeersPage />,
  },
  {
    path: "/beers/:beerId",
    element: <BeerPage />,
  },
];
