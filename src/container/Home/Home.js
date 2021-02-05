import React from "react";
import { withRouter } from "react-router-dom";

import Card from "../../components/Card/Card";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };

        this.dummy = new Array(100).fill(true);
        this.handleOnClickDetail = this.handleOnClickDetail.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 2500);
    }

    componentWillUnmount() {}

    handleOnClickDetail() {
        this.props.history.push({
            pathname: "/detail",
            search: "?id=movie_id",
            state: { data: { title: "Movie Title" } },
        });
    }

    renderListSkeleton() {
        const skeletonData = new Array(100).fill(true);
        return skeletonData.map((val, index) => {
            return (
                <CardSkeleton
                    key={index}
                    data={val}
                    onClick={this.handleOnClickDetail}
                />
            );
        });
    }
    renderList() {
        return this.dummy.map((val, index) => {
            return (
                <Card
                    key={index}
                    data={val}
                    onClick={this.handleOnClickDetail}
                />
            );
        });
    }

    render() {
        const { isLoading } = this.state;
        return (
            <div
                className="container"
                style={{ paddingTop: 16, paddingBottom: 16 }}
            >
                {isLoading ? this.renderListSkeleton() : this.renderList()}
            </div>
        );
    }
}

export default withRouter(Home);
