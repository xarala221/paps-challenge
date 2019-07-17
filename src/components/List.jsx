import React, { Component } from "react";
import { getUsers } from "../services/userServices";

class List extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    const users = getUsers();
    this.setState({ users });
    const transformedUsers = Object.assign({}, users);
    console.log("Transform ", transformedUsers);
  }

  render() {
    const { users } = this.state;
    return (
      <React.Fragment>
        <h2>List des utilisateurs </h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gendre</th>
              <th>Email</th>
              <th>IP</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user =>
              user.id % 2 === 0 ? (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.ip_address}</td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default List;
