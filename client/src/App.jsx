import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./components/About";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import SingleBook from "./components/SingleBook";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/api/v1/book/:id"
          element={<SingleBook />}
          loader={({ params }) =>
            fetch(`http://localhost:3000/api/v1/books/${params._id}`)
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
