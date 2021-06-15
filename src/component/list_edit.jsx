import React, { useState, useContext } from 'react'
import { Context } from '../context/context'

export const ListEdit = () => {

    const [editValue, setEditValue] = useState('')

    const { setItems, itemEdit, setItemEdit } = useContext(Context)

    const saveEdit = (e) => {
        e.preventDefault()
        if (!editValue) return
        setItems(prev => {
            const pred = prev.filter(el => el !== itemEdit)
            return [...pred, editValue]
        })
        setItemEdit('')
    }

    const handleClose = (e) => {
        setItemEdit('')
    }

    const changeValue = (e) => {
        setEditValue(e.target.value)
    }
    if (!itemEdit) return null

    return (
        <div>
            <form onSubmit={saveEdit}>
                <input onChange={changeValue} defaultValue={itemEdit} />
                <input type="submit" value="save" />
                <input type="button" onClick={handleClose} value="close" />
            </form>
        </div>
    )
}