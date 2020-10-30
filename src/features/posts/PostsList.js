import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { ReactionBtn } from './ReactionBtn'
import { Time } from './Time'
import { UserPost } from "./UserPost"


export const PostsList = () => {
    
    const posts = useSelector(state => state.posts)

    const orderPosts = posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderPosts.map(post => (

        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <div>
                <UserPost userId={post.user} />
                <Time timestamp={post.date}/>
            </div>
            <p>{post.content.substring(0, 100)}</p>
            <ReactionBtn post={post} />
            <Link to={`/posts/${post.id}`} className="button muted-button">
                View Post
            </Link>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}