import React, { useState } from 'react'

const ComplexCondition = ({ status }) => {
  const [printStatus, setPrintStatus] = useState("");
  
  if (status === "loading") {
    setPrintStatus('Loading...')
  } else if (status === "success") {
    setPrintStatus('Success!')
  } else if (status === 'error') {
    setPrintStatus('Error!')
  } else {
    setPrintStatus('Unknown Status!!')
  }


  return (
    <div>{ printStatus}</div>
  )
}

const statusObj = {
  loading: 'Loading...',
  success: 'Success!',
  error : 'Error!'
}

export const CleanCondition = ({ status }) => {
  return (
    <div>{statusObj[status] ?? <p>Unknown Status!!</p> }</div>
  )
}

export default ComplexCondition