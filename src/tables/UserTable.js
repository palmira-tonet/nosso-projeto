import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Pais</th>
        <th>Cidade</th>
        <th>Imagem</th>
        <th>Funções</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.pais}</td>
            <td>{user.cidade}</td>
            <td><img className="imagem" src={user.imagem}/></td>
            
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable