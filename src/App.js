import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import { AddUser } from "./scenes/team";
import Products from "./scenes/product";
import { AddProduct, DetailCard } from "./scenes/product/Product";
import { Login } from "./Authen/login";
import MainLayout from "./layouts/MainLayout";
import MinimalLayout from "./layouts/MinimalLayout";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(false);

  const location = useLocation();
  const isAuthPage = location.pathname == "/login";

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {isAuthPage ? (
          <MinimalLayout>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          </MinimalLayout>
        ) : (
          <MainLayout isSidebar={isSidebar} setIsSidebar={isSidebar}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/team/addUser" element={<AddUser />} />
              <Route path="/produk" element={<Products />} />
              <Route path="/produk/:id" element={<DetailCard />} />
              <Route path="/produk/create" element={<AddProduct />} />
              <Route path="/invoices" element={<Invoices />} />

              {/* <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </MainLayout>
        )}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
