import React from "react";

import HeaderMenu from "./components/Header/HeaderMenu";
import BalanceTab from "./components/Balance/BalanceTab";
import FormTab from "./components/Form/FormTab";

function App() {
  return (
    <React.Fragment>
      <HeaderMenu />
      <BalanceTab />
      <FormTab />
    </React.Fragment>
  );
}

export default App;
