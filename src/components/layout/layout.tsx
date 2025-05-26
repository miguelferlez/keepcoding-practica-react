import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <h1 className="sr-only">Vited</h1>
      <Header />
      <main className="h-[calc(100vh-196px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
