import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, pais: '', cidade: '', imagem: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { pais, value } = event.target

		setUser({ ...user, [pais]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.pais || !user.cidade || !user.imagem ) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Pais</label>
			<input type="text" name="pais" value={user.pais} onChange={handleInputChange} />
			<label>Cidade</label>
			<input type="text" name="cidade" value={user.cidade} onChange={handleInputChange} />
			<label>Imagem</label>
			<input type="file" name="imagem" value={user.imagem} onChange={handleInputChange} />
			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm