import React from 'react'
import { useSelector } from "react-redux"

export const UserPost = ({ userId }) => {
    const user = useSelector(state => state.users.find(user => user.id === userId))
    return <span>by {user ? user.name : "User doesn't exist"}</span>
}