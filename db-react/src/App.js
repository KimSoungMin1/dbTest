import logo from "./logo.svg";
import "./App.css";
import Posting2 from "./components/Posting2";
import Posting from "./components/Posting";
import Upload from "./page/Upload";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/Profile" element={<Posting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
