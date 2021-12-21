import React from "react";

import { Provider } from "react-redux";
import { store } from "../redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Post } from "../pages";

export const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
