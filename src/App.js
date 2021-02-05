import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./container/Home/Home";
import Detail from "./container/Detail/Detail";

export default function App() {
    return (
        <Switch>
            <Route path="/detail" component={Detail} />
            <Route path="/" exact component={Home} />
        </Switch>
    );
}
