import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import Menu from "./screens/Menu";

export default function AppRouter() {
    return (
        <BrowserRouter basename="/Pizzaria_LandingPage">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                {/* <Route path="*" component={NotFound} /> */}
            </Routes>
        </BrowserRouter>
    );
}