import React from 'react'

const Component = ({data}) => {
  const printData = data.map((item) => item.title.ToUpperCase())
    return (
        <div>
            {printData.map((item) => (
                <h1 key={item.id}>{ item.title}</h1>
            ))}
        </div>
    )
}

export default Component