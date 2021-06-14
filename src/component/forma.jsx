import React, { useState } from 'react'
import { List } from './list'

export const Forma = () => {
    const [name, setName] = useState('')
    const [items, setItems] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) return
        setItems((prev) => [...prev, name])
        setName('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setName(e.target.value)} value={name} />
                <button type="submit">Save</button>
            </form>
            <List items={items} setItems={setItems} />
        </>
    );
}