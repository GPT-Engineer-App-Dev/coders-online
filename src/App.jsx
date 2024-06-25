import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CodeEditor from "./components/CodeEditor.jsx";
import Index from "./pages/Index.jsx";
import Courses from "./pages/Courses.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/code-editor" element={<CodeEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
