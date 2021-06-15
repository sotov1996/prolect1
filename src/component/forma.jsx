import React, { useState, useContext, useReducer } from 'react'
import { Context } from '../context/context'
import { reducer } from '../reducer/reducer'

export const Forma = () => {
    const [data, dispatch] = useReducer(reducer, { name: '', click: false })

    const { setItems } = useContext(Context)

    const handleSubmit = (e) => {
        e.preventDefault()
        setItems((prev) => [...prev, data.name])
        dispatch({ type: 'set_name', payload: {click: true} })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) =>  dispatch({ type: 'set_name', payload: { name: e.target.value }})} value={data.name} />
            <button type="submit">Save</button>
        </form>
    );
}