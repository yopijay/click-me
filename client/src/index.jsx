// Libraries
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

// Constants
import App from "./App"; // Layouts
import 'assets/font/font.css'; // Font
import 'assets/css/global.css'; // Global CSS
import 'assets/css/scrollbar.css'; // Scrollbar CSS
import { Light } from "core/theme/global.theme"; // Theme

const container = document.getElementById('root');
const root = createRoot(container);
const client = new QueryClient();

 root.render(
    <ThemeProvider theme= { Light }>
        <CssBaseline />
        <QueryClientProvider client= { client }><App /></QueryClientProvider>
    </ThemeProvider>
 )