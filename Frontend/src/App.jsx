import AddData from "./Components/AddData";
import AllData from "./Components/AllData";
import Main from "./Components/Main";
import Navbar from "./Components/Navabr";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all" element={<AllData />} />
        <Route path="/add" element={<AddData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
