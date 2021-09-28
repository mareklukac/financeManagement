import React, { useContext } from "react";
import { Formik } from "formik";
// import { SubmitButton } from "formik-semantic-ui-react";

import styles from "./FormTab.module.css";
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
  { text: "incomes", value: "incomes" },
  { text: "expenses", value: "expenses" },
];

const FormTab = (props) => {
  const balanceCtx = useContext(BalanceContext);

  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [action, setAction] = useState("");
  // const [date, setDate] = useState("");
  // const [about, setAbout] = useState("");

  // const onTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };
  // const onAmountChange = (event) => {
  //   setAmount(event.target.value);
  // };
  // const onActionChange = (event) => {
  //   setAction(event.target.innerText);
  // };
  // const onDateChange = (event) => {
  //   setDate(event.target.value);
  // };
  // const onAboutChange = (event) => {
  //   setAbout(event.target.value);
  // };

  const onSubmitHandler = (values) => {
    console.log(values);
    balanceCtx.addItem({
      id: Math.random().toString(),
      title: values.title,
      amount: +values.amount,
      action: values.action,
      date: values.date,
      about: values.about,
    });

    // setTitle("");
    // setAmount("");
    // setAction("");
    // setDate("");
    // setAbout("");
  };

  return (
    <section id="form-tab-section" className={styles.formSection}>
      <Container>
        <Formik
          initialValues={{
            title: "",
            action: "",
            amount: 0,
            date: "",
            about: "",
          }}
          onSubmit={(values) => {
            onSubmitHandler(values);
          }}
        >
          {(props) => (
            <Form
              size={"big"}
              inverted
              onSubmit={(values) => {
                props.handleSubmit(values);
              }}
              className={styles.formContainer}
            >
              <Form.Group widths="equal">
                <Form.Field
                  name="title"
                  // value={props.values.title}
                  control={Input}
                  label="Title"
                  placeholder="Title"
                  required
                  onChange={props.handleChange}
                  className={styles.formField}
                />
                <Form.Field
                  name="action"
                  // value={props.values.action}
                  required
                  control={Select}
                  label="Action"
                  options={options}
                  placeholder="Action"
                  onChange={(_, { value }) =>
                    props.setFieldValue("action", value)
                  }
                  className={styles.formField}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field
                  name="amount"
                  // value={props.values.amount}
                  min="0.01"
                  step="0.01"
                  required
                  control={Input}
                  label="Amount"
                  placeholder="Amount"
                  type="number"
                  onChange={props.handleChange}
                  className={styles.formField}
                />
                <Form.Field
                  name="date"
                  // value={props.values.date}
                  control={Input}
                  label="Date"
                  placeholder="Date"
                  type="date"
                  required
                  onChange={props.handleChange}
                />
              </Form.Group>
              <Form.Field
                name="about"
                // value={props.values.about}
                control={TextArea}
                label="About"
                placeholder="Write more about action..."
                onChange={props.handleChange}
              />
              {/* <Form.Field control={SubmitButton} content="Submit"></Form.Field> */}
              <Button type="submit" content="Submit"></Button>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
};

export default FormTab;
