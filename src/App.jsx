import Inter from "/static/fonts/Inter.ttf?url";
import { ThemeProvider, CssBaseline, createTheme, Box } from "@mui/material";
import RootComponent from "./components/RootComponent";
import RootPage from "./components/RootPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/bodyComponents/Home/Home";
import Inventory from "./components/bodyComponents/Inventory/Inventory";
import Customer from "./components/bodyComponents/Customer/Customer";
import Revenue from "./components/bodyComponents/Revenue/Revenue";
import Growth from "./components/bodyComponents/Growth/Growth";
import Report from "./components/bodyComponents/Report/Report";
import Setting from "./components/bodyComponents/Settings/Setting";
import Order from "./components/bodyComponents/Order/Order";

function App() {
  const theme = createTheme({
    spacing: 4,
    palette: {
      mode: "light",
    },
    typography: {
      fontFamily: "Inter",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Raleway'), local('Raleway-Regular'), url(${Inter}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootComponent />}>
        <Route index element={<RootPage />} />
        <Route path="home" element={<Home />}></Route>
        <Route path="inventory" element={<Inventory />}></Route>
        <Route path="orders" element={<Order />}></Route>
        <Route path="customers" element={<Customer />}></Route>
        <Route path="revenue" element={<Revenue />}></Route>
        <Route path="growth" element={<Growth />}></Route>
        <Route path="reports" element={<Report />}></Route>
        <Route path="settings" element={<Setting />}></Route>
      </Route>
    ),
    {
      basename: '/SYS/'
    }
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
