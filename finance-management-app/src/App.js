import React, { useState } from "react";

import HeaderMenu from "./components/Header/HeaderMenu";
import BalanceTab from "./components/Balance/BalanceTab";
import FormTab from "./components/Form/FormTab";
import ChartsTab from "./components/Infographic/ChartsTab";
import BalanceProvider from "./components/store/BalanceProvider";

const DUMMY_LIST = [
  {
    title: "Najom",
    amount: 300,
    action: "expenses",
    date: "2021-09-10",
    about: "Lorem Ipsum neviem co dalej",
  },
  {
    title: "Benzin",
    amount: 50,
    action: "expenses",
    date: "2020-04-05",
    about: "Lorem Ipsum neviem co dalej",
  },
  {
    title: "Vyplata",
    amount: 1200,
    action: "incomes",
    date: "2021-09-10",
    about: "Lorem Ipsum neviem co dalej",
  },
];

function App() {
  const [balanceList, setBalanceList] = useState(DUMMY_LIST);

  const formSubmitHandler = (enteredFormData) => {
    // const formData = {
    //   ...enteredFormData,
    //   id: Math.random().toString(),
    // };

    setBalanceList((prevBalanceList) => {
      return [enteredFormData, ...prevBalanceList];
    });
    console.log(balanceList);
  };

  return (
    <BalanceProvider>
      <HeaderMenu />
      <main>
        <BalanceTab items={balanceList} />
        <FormTab onFormSubmit={formSubmitHandler} />
        <ChartsTab />
      </main>
    </BalanceProvider>
  );
}

export default App;
