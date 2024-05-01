import React from 'react'

const userCondition = (user) => user ? <h1>{user.name}</h1> : <p>User is not found</p>
const printUser = (user) => {
  return (
    <>
    {user && user.posts ? (
      <ul>
          {user.post.map((post) => (
              <li key={post.id}>{ post.title}</li>
          ))}
      </ul>
      ) : (
        <li>No post is found!!</li>
      )}
    </>
  )
}

const OveruseCondition = ({user}) => {
  return (
      <div>
          {userCondition(user)}
          {printUser(user)};
    </div>
  )
}

export default OveruseCondition