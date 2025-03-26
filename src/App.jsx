import React from "react";
import RootLayout from "./_root/RootLayout";
import { Route, Routes } from "react-router-dom";
import { Article, Home } from "./_root/sites";

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="article/:id" element={<Article />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
