import React from 'react'

const Error = ({error}) => {
  return (
    <p style={{padding: "10px 0",color: "red", fontSize: "16px"}}>{error}</p>
  )
}

export default Error