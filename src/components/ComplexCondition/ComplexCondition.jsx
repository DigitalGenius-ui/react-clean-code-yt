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

export default ComplexCondition