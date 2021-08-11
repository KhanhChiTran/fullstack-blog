import { useEffect } from "react"
import "./App.css"
import { Route, Switch, Link } from "react-router-dom"
import About from "./pages/about"
import Login from "./pages/login"
import Register from "./pages/register"
import Blog from "./pages/blog"
import { BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/home"
import firebase from "./firebase"
import NewPost from "./pages/newpost"
import AllPosts from "./pages/allposts"
import PostTemplate from "./pages/post-template"

function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("USER IS ", user)
      } else {
        console.log("NO SUCH USER")
      }
    })
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/blog/:id" component={PostTemplate} />
          <Route path="/blog" component={Blog} />
          <Route path="/login" component={Login} />
          <Route path="/account/newpost" component={NewPost} />
          <Route path="/account/myposts" component={AllPosts} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
