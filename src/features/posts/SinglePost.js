import React from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { UserPost } from "./UserPost"
import { Time } from './Time'
import { ReactionBtn } from './ReactionBtn'

export const SinglePost = ({ match }) => {
    const { postId } = match.params

    const post = useSelector(state => state.posts.find(post => post.id === postId))

    if(!post) {
        return (
            <section>
                <h2>Post Not Found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="post">
                <UserPost userId={post.user} />
                <h2>{post.title}</h2>
                <div>
                    <UserPost userId={post.user} />
                    <Time timestamp={post.date} />
                </div>
                <p className="post-content">{post.content}</p>
                <ReactionBtn post={post} />
                <Link to={`/editPost/${post.id}`} className="button">Edit</Link>
            </article>
        </section>
    )
}
