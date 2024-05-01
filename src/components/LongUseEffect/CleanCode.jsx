import React from 'react'
import useFetchHook from '../hook/useFetchHook';

export const GetUserData = () => {
const { data,
        userDataError,
        userDataLoading } = useFetchHook({ apiLink });
    
    if(userDataError) return <h1>Something went wrong!!</h1>
  return (
      <div>
          {userDataLoading ? <p>Loading...</p> : data.map((user) => (
              <h1 key={user.id}>{ user.username}</h1>
          ))}
    </div>
  )
}

export const GetUserPost = () => {
    const { data,
        userDataError,
        userDataLoading } = useFetchHook({apiLink});
     if(userDataError) return <h1>Something went wrong!!</h1>
  return (
      <div>
          {userDataLoading ? <p>Loading...</p> : data.map((post) => (
              <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
              </div>
          ))}
    </div>
  )
}