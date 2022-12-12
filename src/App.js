import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CryptoDetails from "./Pages/CryptoDetails";
import CryptoHome from "./Pages/CryptoHome";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetails />} />
      </Routes>
    </>
  );
}

export default App;
