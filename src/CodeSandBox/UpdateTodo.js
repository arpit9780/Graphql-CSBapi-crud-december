import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { UPDATE_TODO } from '../GraphQL/Mutations'

export const UpdateTodo = (props) => {
  const [type, setType] = useState()
  const [updateTodo, { loading, data, error }] = useMutation(UPDATE_TODO)
  
  
  useState(() => {
    setType(props.data.type)
  },[props])
  if(loading){return <p>Loading.......</p>}
  console.log("UpdatedData", data);

  const handleSubmit = (e) => {
  updateTodo({variables:{ id : props.data.id, type}})
  }

  return (
    
    <div>
      <form onSubmit={handleSubmit}>
      <p>ID :- {props.data.id}</p>
      <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      <button className='btn btn-danger' type='submit'>Update</button>
      </form>
    </div>
  )
}
