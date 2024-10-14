import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Homes, Contact, Footer, Story, ScrollToTop } from "./pages/index.js";
import { stories } from "./datas/data.js";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Homes />} />
        {stories.story_list.map((story, idx) => (
          <Route
            key={idx}
            path={`/story${idx + 1}`}
            element={<Story Info={{ id: !story ? -1 : idx, stories }} />}
          />
        ))}
      </Routes>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
