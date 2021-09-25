import React, { Component } from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Select,
  TextArea,
} from "semantic-ui-react";

const options = [
  { key: "i", text: "Incomes", value: "incomes" },
  { key: "e", text: "Expenses", value: "expenses" },
];

class FormTab extends Component {
  state = {
    submittedTitle: "",
    submittedAmount: "",
    submittedAction: "",
    submittedDate: "",
    submittedAbout: "",
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { title, amount, action, date, about } = this.state;

    this.setState({
      submittedTitle: title,
      submittedAmount: amount,
      submittedAction: action,
      submittedDate: new Date().toDateString(),
      submittedAbout: about,
    });
  };

  render() {
    const { title, amount, action, date, about } = this.state;
    return (
      <section>
        <Container>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Field
                name="title"
                value={title}
                control={Input}
                label="Title"
                placeholder="Title"
                required
                onChange={this.handleChange}
              />
              <Form.Field
                name="action"
                value={action}
                required
                control={Select}
                label="Action"
                options={options}
                placeholder="Action"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field
                name="amount"
                value={amount}
                required
                control={Input}
                label="Amount"
                placeholder="Amount"
                type="number"
                onChange={this.handleChange}
              />
              <Form.Field
                name="date"
                value={date}
                control={Input}
                label="Date"
                placeholder="Date"
                type="date"
                required
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Field
              name="about"
              value={about}
              control={TextArea}
              label="About"
              placeholder="Write more about action..."
              onChange={this.handleChange}
            />
            <Form.Field control={Button} content="Submit"></Form.Field>
          </Form>
        </Container>
      </section>
    );
  }
}

export default FormTab;
