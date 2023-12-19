import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/index";
import Form from "./pages/form/index";
import Header from "./components/header/index";
import Footer from "./components/footer/index";

function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form/>} />
      </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
