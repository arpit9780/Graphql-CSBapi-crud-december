import { useLazyQuery, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { GET_A_DRAGON, GET_DRAGONS } from '../GraphQL/Queries';

export const ViewUser = () => {
  const [dragonData, setDragonData] = useState()
  const [dragonId, setDragonId] = useState("dragon1")
  
  const { loading, data, error } = useQuery(GET_A_DRAGON,
    { variables: { dragonId} },)

  useEffect(() => {
    setDragonData(data?.dragon)
  }, [data])
  console.log("ViewDragon1", dragonData);
  console.log("Loading", loading);

  return (
    
    <div>
            <h2 >{dragonData?.id} </h2>
            <h5>{dragonData?.__typename}</h5> 
           
    </div>
  )
}
