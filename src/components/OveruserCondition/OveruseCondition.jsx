import React from 'react'

const OveruseCondition = ({user}) => {
  return (
      <div>
          {user ? <h1>{user.name}</h1> : <p>User is not found</p>}
          {user && user.posts ? (
              <ul>
                  {user.post.map((post) => (
                      <li key={post.id}>{ post.title}</li>
                  ))}
              </ul>
          ) : (
                <li>No post is found!!</li>
          )}
    </div>
  )
}

export default OveruseCondition