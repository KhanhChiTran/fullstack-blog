import logo from "./logo.svg"
import "./App.css"
import { Route, Switch, Link } from "react-router-dom"
import About from "./pages/about"
import Login from "./pages/login"

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Blog !!</h1>
      <span>Done Basic setup</span>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  )
}

export default App
