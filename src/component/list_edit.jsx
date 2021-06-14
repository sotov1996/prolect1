import React, {useState} from 'react'

export const ListEdit = ({itemEdit,setItems, setItemEdit}) => {

    const [editValue, setEditValue] = useState('')

    const saveEdit = (e) => {
        e.preventDefault()
        if(!editValue) return
        setItems(prev => {
            const pred = prev.filter(el=> el != itemEdit)
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

    return (
        <div>
            <form onSubmit={saveEdit}>
                <input onChange={changeValue} defaultValue={itemEdit}/>
                <input type="submit" value="save" />
                <input type="button" onClick={handleClose} value="close" />
            </form>
        </div>
    )
}