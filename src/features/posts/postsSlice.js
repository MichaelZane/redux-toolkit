import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = [
    {id: 1, title: 'first post', content: 'Hello!'},
    {id: 2, title: 'second post', content: 'What up Slice!'},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            },
        
        postUpdate(state, action) {
            const { id, title, content } = action.payload
            const existingPost = state.find(post => post.id === id)
            if(existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
}

})
export const { 
    postAdded,
    postUpdate
 } = postsSlice.actions

export default postsSlice.reducer