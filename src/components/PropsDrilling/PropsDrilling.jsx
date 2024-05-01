import { useState } from "react"

export const GrandParentComp = () => {
    const [data, setData] = useState([1, 2, 3, 4]);
    return (
        <ParentComp data={ data} />
    )
}

export const ParentComp = ({data}) => {
    return (
        <ParentComp data={ data} />
    )
}

export const ChildComp = ({data}) => {
    return (
        <div>
            {data.map((item) => (
                <h1 key={item.id}>{ item.title}</h1>
            ))}
        </div>
    )
}