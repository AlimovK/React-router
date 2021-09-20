import { Navbar } from "./navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import { Movies } from "./contact";
import { Logo } from "./logo";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/about"} component={About} />
      <Route exact path={"/logo"} component={Logo} />
      <Route exact path={"/movies"} component={Movies} />
    </Router>
  );
}

export default App;
