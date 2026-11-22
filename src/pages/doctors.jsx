import React from 'react'
import { useParams } from 'react-router-dom'

const doctors = () => {

  const {speciality} =  useParams()
  console.log(speciality);
  return (
    <div>
      
    </div>
  )
}

export default doctors
