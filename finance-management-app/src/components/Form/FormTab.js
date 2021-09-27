import React, { useContext, useState } from "react";

import BalanceContext from "../store/balance-context";

import {
  Button,
  Container,
  Form,
  Input,
  Select,
  TextArea,
} from "semantic-ui-react";

const options = [
  { key: "i", text: "incomes", value: "incomes" },
  { key: "e", text: "expenses", value: "expenses" },
];

const FormTab = (props) => {
  const balanceCtx = useContext(BalanceContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState("");
  const [date, setDate] = useState("");
  const [about, setAbout] = useState("");

  // state = {
  //   title: "",
  //   amount: "",
  //   action: "",
  //   date: "",
  //   about: "",
  // };

  // handleChange = (e, { name, value }) => this.setState({ [name]: value });
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const onActionChange = (event) => {
    setAction(event.target.innerText);
  };
  const onDateChange = (event) => {
    setDate(event.target.value);
  };
  const onAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // const balanceItem = {
    //   title: title,
    //   amount: +amount,
    //   action: action,
    //   date: date,
    //   about: about,
    // };
    // console.log(balanceItem);

    balanceCtx.addItem({
      id: Math.random().toString(),
      title: title,
      amount: +amount,
      action: action,
      date: date,
      about: about,
    });

    // props.onFormSubmit(balanceItem);

    setTitle("");
    setAmount("");
    setAction("");
    setDate("");
    setAbout("");

    // this.setState({ title: "", amount: "", action: "", date: "", about: "" });
  };

  // const { title, amount, action, date, about } = this.state;

  return (
    <section>
      <Container>
        <Form inverted onSubmit={onSubmitHandler}>
          <Form.Group widths="equal">
            <Form.Field
              name="title"
              value={title}
              control={Input}
              label="Title"
              placeholder="Title"
              required
              onChange={onTitleChange}
            />
            <Form.Field
              name="action"
              value={action}
              required
              control={Select}
              label="Action"
              options={options}
              placeholder="Action"
              onChange={onActionChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              name="amount"
              value={amount}
              min="0.01"
              step="0.01"
              required
              control={Input}
              label="Amount"
              placeholder="Amount"
              type="number"
              onChange={onAmountChange}
            />
            <Form.Field
              name="date"
              value={date}
              control={Input}
              label="Date"
              placeholder="Date"
              type="date"
              required
              onChange={onDateChange}
            />
          </Form.Group>
          <Form.Field
            name="about"
            value={about}
            control={TextArea}
            label="About"
            placeholder="Write more about action..."
            onChange={onAboutChange}
          />
          <Form.Field control={Button} content="Submit"></Form.Field>
        </Form>
      </Container>
    </section>
  );
};

export default FormTab;
