import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { AddPostForm } from './features/posts/AddPostForm'
import {PostsList} from "./features/posts/PostsList"
import {SinglePost} from "./features/posts/SinglePost"
import { EditPost } from './features/posts/EditPost'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostsList />
              </>
            )}
          />
          <Route exact path="/posts/:postId" component={SinglePost} />
          <Route exact path="/editPost/:postId" component={EditPost} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
