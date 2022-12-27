import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { ADD_TODO } from '../GraphQL/Mutations'

export const AddTodo = () => {
    const [type, setType] = useState()
    let input;
    const [value, { loading, data, error }] = useMutation(ADD_TODO)

    useEffect(()=>{

    },[data])

    const handleSubmit = (e) => {
        e.preventDefault();
        value({ variables: { type } }); 
    }
    if(loading){return(<p>Loading.....</p>)}
    return (
        <div>
            <h1>Add Todos</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" className='form-group col-md-3' onChange={(e)=>setType(e.target.value)} />
              <button type='submit' className='btn btn-primary'>Add Todo</button>
            </form>
        </div>
    )
}
