import { Home } from "pages/Home";
import { Route, Routes } from "react-router-dom";

const PageRouters = () => {
  return (
    <Routes>
      <Route path="/" element={Home()} />
      <Route path="/skills" element={<></>} />
      <Route path="/work" element={<></>} />
      <Route path="/projects" element={<></>} />
      <Route path="/about" element={<></>} />
      <Route path="/contact" element={<></>} />
    </Routes>
  );
};

export default PageRouters;
