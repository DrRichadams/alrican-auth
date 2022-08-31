import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import RerouteHandler from "./pages/RerouteHandler";
import Signup from "./pages/Signup";
import DonePage from "./pages/DonePage";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AppContainer>
      <AuthContextProvider>
        <Routes>
              <Route path='/' element={<RerouteHandler />} />
              <Route path='/signup/:uid' element={<Signup />} />
              <Route path='/done_page' element={<DonePage />} />
        </Routes>
      </AuthContextProvider>
    </AppContainer>
  );
}


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
