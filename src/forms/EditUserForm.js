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
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
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
      <input type="text"  name="imagem" value={user.imagem} onChange={handleInputChange} />
      <button>Atualizar Destino</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm