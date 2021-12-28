import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export default function ItemsList({ getItems }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        const newItems = getItems(19)
        setItems(newItems)
        console.log('render')
    }, [getItems])

    return (
        <ul>
            { items.map(i => <li key={i}>{i}</li>) }
        </ul>
    )
}

