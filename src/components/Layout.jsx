import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useStore } from "../context/Store";

export default function Layout() {
  const { toast, dismissToast } = useStore();

  return (
    <div className="site">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {toast && (
        <button className="toast" onClick={dismissToast} type="button">
          {toast.message}
        </button>
      )}
    </div>
  );
}
