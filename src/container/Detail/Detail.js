import React from "react";

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.dummy = new Array(100).fill(true);

        console.log(this.dummy);
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="container">
                <div>DETAIL</div>
            </div>
        );
    }
}
