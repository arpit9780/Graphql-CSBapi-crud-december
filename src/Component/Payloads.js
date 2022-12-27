import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_PAYLOADS } from '../GraphQL/Queries'

export const Payloads = () => {
  const [payloadData,setPayloadData] = useState()
  const {loading, data, error } = useQuery(GET_PAYLOADS,{
    variables:{
        limit:10,
        offset:10
    }
  })

  useEffect(() => {
    setPayloadData(data)
  }, [data])
  
  console.log(85,loading)
  console.log(86,payloadData)
    return (
    <div>
         
    </div>
  )
}
