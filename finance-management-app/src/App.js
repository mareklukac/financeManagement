import React, { useState } from "react";

import HeaderMenu from "./components/Header/HeaderMenu";
import BalanceTab from "./components/Balance/BalanceTab";
import FormTab from "./components/Form/FormTab";
import ChartsTab from "./components/Infographic/ChartsTab";
import BalanceProvider from "./components/store/BalanceProvider";

function App() {
  return (
    <BalanceProvider>
      <HeaderMenu />
      <main>
        <BalanceTab />
        <FormTab />
        <ChartsTab />
      </main>
    </BalanceProvider>
  );
}

export default App;
