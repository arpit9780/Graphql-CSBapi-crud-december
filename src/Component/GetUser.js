import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_CORE } from '../GraphQL/Queries'
import { ViewUser } from './ViewUser'

const GetUser = () => {
    const [users, setUsers] = useState()
    const [userData, setUserData] = useState()
    const [isVisible, setIsVisible] = useState(false)
    const { error, data, loading } = useQuery(GET_CORE)

    useEffect(() => {
        if (data) {
            setUsers(data.cores);
        }
    }, [data])

    console.log("GetUser", users)

    // const viewUser = (userData) => {
    //  setUserData(userData)
    //  setIsVisible(true)
    // }


    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NAME</th>
                        <th scope="col">ACTION</th>
                        
                    </tr>
                </thead>
                <tbody>
                    
                    {users?.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.id}</td>
                                {
                                    item?.missions?.map((value,i) => {
                                        return(
                                            <td key={i}> {value.name}</td>
                                        )
                                    })
                                }
                                <td>
                                    {/* <button className='btn btn-primary' onClick={()=>viewUser({item})}>View</button> */}
                                    <button className='btn btn-danger' style={{margin : "10px"}}>Delete</button>
                                    <button className='btn btn-info'>Update</button>
                                </td>

                            </tr>

                        )
                    })}
                </tbody>


            </table>
            {/* {isVisible ? <ViewUser data={userData} /> : null } */}
        </div>
    )
}

export default GetUser