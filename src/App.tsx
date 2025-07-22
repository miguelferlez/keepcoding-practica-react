import "./App.css";
import Loader from "./components/ui/loader";
import Layout from "./components/layout/layout";
// import AdvertsPage from "./pages/adverts/adverts-page";
// import AdvertPage from "./pages/adverts/advert-page";
// import NewAdvertPage from "./pages/adverts/new-advert-page";
// import LoginPage from "./pages/auth/login-page";
import NotFoundPage from "./pages/error/not-found-page";
import { Navigate, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import RequireAuth from "./pages/auth/require-auth";

const LoginPage = lazy(() => import("./pages/auth/login-page"));
const AdvertsPage = lazy(() => import("./pages/adverts/adverts-page"));
const NewAdvertPage = lazy(() => import("./pages/adverts/new-advert-page"));
const AdvertPage = lazy(() => import("./pages/adverts/advert-page"));

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        }
      />
      <Route
        path="/adverts"
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <AdvertsPage />
            </Suspense>
          }
        />
        <Route
          path="new"
          element={
            <RequireAuth>
              <Suspense fallback={<Loader />}>
                <NewAdvertPage />
              </Suspense>
            </RequireAuth>
          }
        />
        <Route
          path=":advertId"
          element={
            <RequireAuth>
              <Suspense fallback={<Loader />}>
                <AdvertPage />
              </Suspense>
            </RequireAuth>
          }
        />
      </Route>
      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}

export default App;
