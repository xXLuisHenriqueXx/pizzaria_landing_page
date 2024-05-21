import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Menu from "./screens/Menu";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                {/* <Route path="*" component={NotFound} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;