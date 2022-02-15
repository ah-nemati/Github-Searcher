import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { User } from "./pages/User";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
