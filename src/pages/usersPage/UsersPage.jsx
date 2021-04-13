import { useState } from 'react';
import { useUsers } from '../../providers/UserProvider';

const UsersPage = () => {
  const { users, setUsers } = useUsers();
  const [newUser, setNewUser] = useState();

  const handleInputChange = () => (e) => {
    const { value, name } = e.target;
    setNewUser((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const makeUser = () => {
    setUsers((state) => [...state, { ...newUser, id: state.length + 1 }]);
  };

  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                className="form-control form-control-sm"
                type="text"
                name="name"
                onChange={handleInputChange()}
                placeholder="Name"
              />
            </td>
            <td>
              <input
                className="form-control form-control-sm"
                type="text"
                name="username"
                onChange={handleInputChange()}
                placeholder="Username"
              />
            </td>
            <td>
              <input
                className="form-control form-control-sm"
                type="text"
                name="email"
                onChange={handleInputChange()}
                placeholder="Email"
              />
            </td>
            <td>
              <input
                className="form-control form-control-sm"
                type="text"
                name="phone"
                onChange={handleInputChange()}
                placeholder="Phone"
              />
            </td>
            <td>
              <input
                className="form-control form-control-sm"
                type="text"
                name="website"
                onChange={handleInputChange()}
                placeholder="Website"
              />
            </td>
            <td>
              <button
                onClick={makeUser}
                className="btn btn-outline-light btn-sm">
                Add User
              </button>
            </td>
          </tr>

          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td colSpan="2">{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
