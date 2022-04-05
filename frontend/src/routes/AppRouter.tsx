import { Route, Routes, useLocation } from "react-router-dom";
import { SignUpPage } from "pages/auth/signUp";
import { SignInPage } from "pages/auth/signIn";
import { BoardListPage } from "pages/board/list";
import { BoardCreatePage } from "pages/board/create";
import { BoardDetailPage } from "pages/board/detail";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        {/* auth */}
        <Route
          path="/signup"
          element={<PublicRoute element={<SignUpPage />} />}
        />
        <Route
          path="/signin"
          element={<PublicRoute element={<SignInPage />} />}
        />

        {/* board */}
        <Route
          path="/board/list"
          element={<PrivateRoute element={<BoardListPage />} />}
        />
        <Route
          path="/board/:id"
          element={<PrivateRoute element={<BoardDetailPage />} />}
        />
        <Route
          path="/board/create"
          element={<PrivateRoute element={<BoardCreatePage />} />}
        />
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/board/create"
            element={<PrivateRoute element={<BoardCreatePage />} />}
          />
        </Routes>
      )}
    </>
  );
};
