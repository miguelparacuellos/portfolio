import { Home, Skills } from "pages";
import { Route, Routes } from "react-router-dom";

const PageRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/work" element={<></>} />
      <Route path="/projects" element={<></>} />
      <Route path="/about" element={<></>} />
      <Route path="/contact" element={<></>} />
    </Routes>
  );
};

export default PageRouters;
