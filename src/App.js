import React, {Suspense} from "react";
import {Navigate, useRoutes} from "react-router-dom";

import Navigation from "./Navigation";
import About from "./About/lazy";
import Posts from "./Posts";
import styles from "./styles";
import Footer from "./Footer";

function App() {
  const links = [
    {
      path: "/posts",
      element: <Posts/>,
      name: "Posts",
    },
    {
      path: "/",
      element: <About/>,
      name: "About",
    },
    {
      path: "*",
      element: <Navigate to="/" replace/>,
    },
  ];
  const someRoute = useRoutes(links);
  return (
    <div style={styles.app}>
      <Navigation links={links}/>
      <Suspense fallback={<Loading/>}>
        {someRoute}
      </Suspense>
      <Footer/>
    </div>
  );
}

function Loading() {
  return (
    <div style={styles.loading}>Now loading...</div>
  );
}

export default App;
