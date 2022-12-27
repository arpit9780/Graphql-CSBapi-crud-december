import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_TODOS } from '../GraphQL/Queries'

export const GetTodos = () => {
    const [todos,setTodos] = useState()
    const {loading, data, error}= useQuery(GET_TODOS,{
   
      pollInterval: 500,
      
    })
    useEffect(()=>{
      if(data){
        setTodos(data.todos)
      }
    },[data])

    

    console.log("GetTodos",todos);
  return (
    <div>
         <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">TODOS</th>                        
                    </tr>
                </thead>
                <tbody>
                    {todos?.map((item, i) => {
                        return (<tr>
                          <td>{data.id}</td>
                          <td>{data.description}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
    </div>
  )
}
