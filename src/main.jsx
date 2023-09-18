import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";

import Home from "./pages/Home.jsx";
import Contato from "./pages/Contato.jsx";
import SobreNos from "./pages/SobreNos.jsx";
import SobreProblema from "./pages/SobreProblema.jsx";
import BeneficioImpacto from "./pages/BeneficioImpacto.jsx";
import Solucao from "./pages/Solucao.jsx";

import Tabs from "./components/Tabs.jsx";

import "./scss/styles.scss";
import "./scss/footer.scss";
import "./scss/carousel.scss";
import "./scss/sobrenos.scss";
import "./scss/beneficio.scss";
import "./scss/sobreproblema.scss";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import * as bootstrap from "bootstrap";
import ChallengePage from "./pages/Challenge.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: "/", element: <Home /> },
      { path: "/Tabs", element: <Tabs /> },
      { path: "/Solucao", element: <Solucao /> },
      { path: "/SobreProblema", element: <SobreProblema /> },
      { path: "/SobreNos", element: <SobreNos /> },
      { path: "/Contato", element: <Contato /> },
      { path: "/BeneficioImpacto", element: <BeneficioImpacto /> },
      // { path: "/challenge", element: <ChallengePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
