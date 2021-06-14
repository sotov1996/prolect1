import React, { useState } from 'react'
import { ListEdit } from './list_edit'

export const List = ({ items, setItems }) => {
    const [itemEdit, setItemEdit] = useState('')

    const handleDelete = (e) => {
        setItems((prevs) => prevs.filter(prev => prev != e.target.name))
    }
    return (
        <>
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
            {itemEdit ? <ListEdit itemEdit={itemEdit} setItems={setItems} setItemEdit={setItemEdit} /> : null}
        </>
    )
}