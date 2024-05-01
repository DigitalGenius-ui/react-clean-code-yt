import React, { useEffect, useState } from 'react'

export const GetUserData = () => {
    const [userData, setUserData] = useState([]);
    const [userDataLoading, setUserDataLoading] = useState(false);
    const [userDataError, setUserDataError] = useState(false);

    useEffect(() => {
        setUserDataLoading(true)
        const fetchData = async () => {
            try {
                const res = await fetch("api-userProfile")
                const data = await res.json();
                setUserData(data);
            } catch (error) {
                console.log(error);
                setUserDataError(error.message)
            } finally {
                setUserDataLoading(false)
            }
        }
        fetchData()
    }, [])

    if(userDataError) return <h1>Something went wrong!!</h1>
  return (
      <div>
          {userDataLoading ? <p>Loading...</p> : userData.map((user) => (
              <h1 key={user.id}>{ user.username}</h1>
          ))}
    </div>
  )
}

export const GetUserPost = () => {
    const [userPost, setUserPost] = useState([]);
    const [userPostError, setUserPostError] = useState(false);
    const [userPostLoading, setUserPostLoading] = useState(false);

     useEffect(() => {
        setUserPostLoading(true)
        const fetchData = async () => {
            try {
                const res = await fetch("api-userPost-data")
                const data = await res.json();
                setUserPost(data);
            } catch (error) {
                console.log(error);
                setUserPostError(error.message)
            } finally {
                setUserPostLoading(false)
            }
        }
        fetchData()
    }, [])
    
     if(userPostError) return <h1>Something went wrong!!</h1>
  return (
      <div>
          {userPostLoading ? <p>Loading...</p> : userPost.map((post) => (
              <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
              </div>
          ))}
    </div>
  )
}