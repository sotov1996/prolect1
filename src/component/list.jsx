import React, { useContext } from 'react'
import { Context } from '../context/context'

export const List = () => {

    const { items, setItems, setItemEdit } = useContext(Context)

    const handleDelete = (e) => {
        setItems((prevs) => prevs.filter(prev => prev !== e.target.name))
    }
    return (
        <ul>
            {items.map((item, i) => {
                return (
                    <li key={i}>
                        {item}
                        <input type="button" name={item} onClick={handleDelete} value="delete" />
                        <input type="button" name={item} onClick={(e) => setItemEdit(e.target.name)} value="edit" />
                    </li>)
            })}
        </ul>
    )
}