import { About } from "./pages/About";
import { User } from "./pages/User";
import { Route, Routes,Navigate } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="user" element={<User />} />
        <Route
        path="*"
        element={<Navigate to="/" />}
    />
      </Routes>
  );
}

export default App;
