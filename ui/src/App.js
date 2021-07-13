import "./App.css"
import { Route, Switch, Link } from "react-router-dom"
import About from "./pages/about"
import Login from "./pages/login"
import { BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/home"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
