import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import Name from "./components/Name";
import NameOfSociety from "./components/NameOfSocieties";
import Adresses from "./components/Adresses";
import States from "./components/States";
import SectorType from "./components/SectorTypes";
import AreaOfOperations from "./components/AreasOfOperations";
import Districts from "./components/Districts";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Header />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/name" element={<Name />} />
              <Route path="/nameofsociety" element={<NameOfSociety />} />
              <Route path="/address" element={<Adresses />} />
              <Route path="/states" element={<States />} />
              <Route path="/districts" element={<Districts />} />
              <Route path="/areaofoperation" element={<AreaOfOperations />} />
              <Route path="/sectortypes" element={<SectorType />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
