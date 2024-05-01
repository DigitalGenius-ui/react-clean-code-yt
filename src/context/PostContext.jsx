import React, { createContext, useContext, useState } from 'react'

const PostContextGenerate = createContext();

const PostContext = ({ children }) => {
    const [data, setData] = useState([]);
  return (
      <PostContextGenerate.Provider value={{data, setData}}>{ children}</PostContextGenerate.Provider>
  )
}

export default PostContext

export const GetContextData = () => useContext(PostContextGenerate)