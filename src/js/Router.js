import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../js/App';
import HexToRGB from '../js/HexToRGB';
import NotFound from '../js/NotFound';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/hex-to-rgb" element={<HexToRGB />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
