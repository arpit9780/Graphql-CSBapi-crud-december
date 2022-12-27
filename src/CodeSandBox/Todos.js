import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_TODOS } from '../GraphQL/Queries'
import { UpdateTodo } from './UpdateTodo'

export const Todos = () => {
    const [value, setValue] = useState()
    const [isVisible,setIsVisible] = useState(false)
    const [forUpdate,setForUpdate] = useState({})

    const { loading, data, error } = useQuery(GET_TODOS)

    useEffect(() => {
        setValue(data?.todos)
    }, [data])

    console.log("Todos", value)

    const handleUpdate = (e) => {
        setIsVisible(true)
        setForUpdate(e.item)   
    }
    if(loading){return(<p>Loading.....</p>)}

    return (
        <>
            <h1>Todos</h1>
            <div className='container'>


                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">TYPE</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value?.map((item, i) => {
                            return (

                                // <p>{item.type}</p>

                                <tr>
                                    <th scope="row" key={i}>{i + 1}</th>
                                    <td>{item.id}</td>
                                    <td>{item.type}</td>
                                    <td><button className='btn btn-info' onClick={()=>handleUpdate({item})}>UPDATE</button></td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            </div>
            {isVisible ? <UpdateTodo data={forUpdate}/> : null}
        </>
    )
}
