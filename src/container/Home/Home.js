import React from "react";
import { withRouter } from "react-router-dom";

import Card from "../../components/Card/Card";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";

import { getNowPlaying } from "../../service/movieservice";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataMovies: [],
        };

        this.handleOnClickDetail = this.handleOnClickDetail.bind(this);

        this.page = 1;
    }

    componentDidMount() {
        this.getMovies();
    }

    componentWillUnmount() {}

    getMovies() {
        this.setState({ isLoading: true });
        getNowPlaying(this.page)
            .then((res) => {
                if (res.statusCode === 200) {
                    this.setState({
                        isLoading: false,
                        dataMovies: [
                            ...this.state.dataMovies,
                            ...res.data.results,
                        ],
                    });
                } else {
                    throw new Error("Gagal Menarik Data");
                }
            })
            .catch((err) => {
                console.log("err", err);
                this.setState({ isLoading: true });
            });
    }

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
        const { dataMovies } = this.state;
        return dataMovies.map((val, index) => {
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
