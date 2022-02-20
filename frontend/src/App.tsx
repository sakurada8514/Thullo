import React, { Suspense, VFC } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AppRouter } from "./routes/AppRouter";
// import "./index.css";

export const App: VFC = () => (
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Suspense fallback={<div>Loading..</div>}>
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
