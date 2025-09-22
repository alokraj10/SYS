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
import Home from "./components/bodyComponents/Home/Home.jsx";
import Inventory from "./components/bodyComponents/inventory/Inventory.jsx";
import Customer from "./components/bodyComponents/customer/Customer.jsx";
import Revenue from "./components/bodyComponents/revenue/Revenue.jsx";
import Growth from "./components/bodyComponents/growth/Growth.jsx";
import Report from "./components/bodyComponents/report/Report.jsx";
import Setting from "./components/bodyComponents/Settings/Setting.jsx";
import Order from "./components/bodyComponents/order/Order.jsx";

function App() {
  const theme = createTheme({
    spacing: 4,
    palette: { mode: "light" },
    typography: { fontFamily: "Inter" },
    components: {
      MuiCssBaseline: {
        styleOverrides: `@font-face { font-family: 'Inter'; src: local('Raleway'), url(${Inter}) format('woff2'); }`,
      },
    },
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootComponent />}>
        <Route index element={<RootPage />} />
        <Route path="home" element={<Home />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="orders" element={<Order />} />
        <Route path="customers" element={<Customer />} />
        <Route path="revenue" element={<Revenue />} />
        <Route path="growth" element={<Growth />} />
        <Route path="reports" element={<Report />} />
        <Route path="settings" element={<Setting />} />
      </Route>
    ),
    { basename: '/SYS/' }
  );

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
