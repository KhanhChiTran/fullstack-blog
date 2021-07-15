import "./App.css"
import { Route, Switch, Link } from "react-router-dom"
import About from "./pages/about"
import Login from "./pages/login"
import Register from "./pages/register"
import Blog from "./pages/blog"
import { BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/home"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
