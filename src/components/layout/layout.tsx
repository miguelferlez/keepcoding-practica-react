import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <h1 className="sr-only">Nodepop</h1>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
