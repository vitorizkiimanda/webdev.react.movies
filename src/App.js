import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./container/Home/Home";
import Detail from "./container/Detail/Detail";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <Switch>
                <Route path="/detail" component={Detail} />
                <Route path="/" exact component={Home} />
            </Switch>
        );
    }
}
