import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {AppThemeProvider} from "./context/AppThemeProvider";
import { BrowserRouter, Routes } from "react-router-dom";
import {Route} from "@mui/icons-material";


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                {/*<Route element={<Layout />}>*/}
                {/*    <Route path="/" element={<Home />} />*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);