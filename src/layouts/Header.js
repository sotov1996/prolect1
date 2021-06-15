import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <ul>
            <li>
                <Link to='/list'>list</Link>
            </li>
            <li>
                <Link to='/forma'>Form</Link>
            </li>
        </ul>
    )
}