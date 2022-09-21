import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { pais, value } = event.target

    setUser({ ...user, [pais]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Pais</label>
      <input type="text" name="pais" value={user.pais} onChange={handleInputChange} />
      <label>Cidade</label>
      <input type="text" name="cidade" value={user.cidade} onChange={handleInputChange} />
      <label>Imagem</label>
      <input type="file" name="imagem" value={user.imagem} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm