import "./App.css";
import Loader from "./components/ui/loader";
import Layout from "./components/layout/layout";
import AdvertsPage from "./pages/adverts/adverts-page";
import NewAdvertPage from "./pages/adverts/new-advert-page";
// import LoginPage from "./pages/auth/login-page";
import NotFoundPage from "./pages/error/not-found-page";
import { Navigate, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
// TODO 5. apply auth provider and require auth in their sites

const LoginPage = lazy(() => import("./pages/auth/login-page"));

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
      <Route path="/adverts" element={<Layout />}>
        <Route index element={<AdvertsPage />} />
        <Route path="/adverts/new" element={<NewAdvertPage />} />
      </Route>
      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}

export default App;
