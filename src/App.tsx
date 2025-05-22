import "./App.css";
import AdvertsPage from "./pages/adverts/adverts-page";
import NotFoundPage from "./pages/error/not-found-page";
import Layout from "./components/layout/layout";
import { Navigate, Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/adverts" element={<Layout />}>
        <Route index element={<AdvertsPage />} />
      </Route>
      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}

export default App;
