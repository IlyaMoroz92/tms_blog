import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogPage } from "./pages/BlogPage/blogPage";
import { AllPage } from "./pages/AllPage/allPage";
import { SignInPage } from "./pages/SignInPage/signinPage";
import { SignUpPage } from "./pages/SignUpPage/signupPage";
import { FavoritesPage } from "./pages/FavoritesPage/favoritesPage";
import { PopularPage } from "./pages/PopularPage/popularPage";
import { VerifyPage } from "./pages/VerifyPage/verifyPage";
import { PostPage } from "./pages/PostPage/postPage";
import Layout from "./components/Layout/Layout";
import {store} from './redux/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/post/:id" element={<PostPage />} />
          <Route path="/" element={<App />}>
            <Route path="/" element={<AllPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/popular" element={<PopularPage />} />
          </Route>
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="verify" element={<VerifyPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Not Found</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
