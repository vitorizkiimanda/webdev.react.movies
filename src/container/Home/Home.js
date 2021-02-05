import React from "react";
import { withRouter } from "react-router-dom";

import Card from "../../components/Card/Card";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.dummy = new Array(100).fill(true);

        console.log(this.dummy);
        console.log(props);
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="container">
                {this.dummy.map((val, index) => {
                    return (
                        <Card
                            key={index}
                            data={val}
                            onClick={() => this.props.history.push("/detail")}
                        />
                    );
                })}
            </div>
        );
    }
}

export default withRouter(Home);
