import "./App.css";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import page1 from "./page/page1";
import Blog from "./page/Blog";
import page2 from "./page/page2";
import Error from "./page/Error";
import BlogMain from "./page/BlogMain";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={page1} />
        <Route exact path="/blog-main" component={BlogMain} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about-us" component={page2} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
