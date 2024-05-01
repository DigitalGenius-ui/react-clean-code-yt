import { useState } from "react"
import { GetContextData } from "../context/PostContext";

export const GrandParentComp = () => {
    const {data} = GetContextData()
    return (
        <ParentComp/>
    )
}

export const ParentComp = () => {
    const {data} = GetContextData()
    return (
        <ChildComp />
    )
}

export const ChildComp = () => {
    const {data} = GetContextData()
    return (
        <div>
            {data.map((item, index) => (
                <h1 key={index}>{ item.title}</h1>
            ))}
        </div>
    )
}