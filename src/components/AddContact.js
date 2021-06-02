import { Component } from "react"; // named import; same thing as extends React.Component
import { Link } from "react-router-dom";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are required!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({
      name: "",
      email: "",
    });
    this.props.history.push("/"); // programmatic route from one component to another
  };

  render() {
    return (
      <div className="ui main" style={{ marginTop: "58px" }}>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add Contact</button>
          <Link to="/">
            <button className="ui button blue right floated">
              Back to Contact List
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default AddContact;
