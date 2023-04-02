import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AllNews from "./pages/AllNews";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Search from "./pages/Search";

const App = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/search/:query" element={<Search />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
