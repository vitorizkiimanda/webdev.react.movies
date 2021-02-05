import React from "react";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";

import Card from "../../components/Card/Card";
import CardSkeleton from "../../components/CardSkeleton/CardSkeleton";

import { getGenres, getNowPlaying } from "../../service/movieservice";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isLoadingMore: false,
            dataMovies: [],
        };

        this.handleScroll = this.handleScroll.bind(this);

        this.page = 1;
        this.totalPage = 99; // defaul value
        this.genres = [];
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);

        this.getGenres();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    getGenres() {
        this.setState({ isLoading: true });
        getGenres()
            .then((res) => {
                if (res.statusCode === 200) {
                    this.genres = res.data.genres;
                    this.getMovies();
                } else {
                    throw new Error("Gagal Menarik Data");
                }
            })
            .catch((err) => {
                console.log("err", err);
                this.setState({ isLoading: true, isLoadingMore: false });
            });
    }

    getMovies() {
        getNowPlaying(this.page)
            .then((res) => {
                if (res.statusCode === 200) {
                    this.totalPage = res.data.total_pages;
                    this.setState({
                        isLoading: false,
                        isLoadingMore: false,
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
                this.setState({ isLoading: true, isLoadingMore: false });
            });
    }

    handleOnClickDetail(data) {
        this.props.history.push({
            pathname: "/detail",
            search: `?id=${data.id}`,
            state: { data: data, genres: this.genres },
        });
    }

    handleScroll() {
        const windowHeight =
            "innerHeight" in window
                ? window.innerHeight
                : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        const windowBottom = windowHeight + window.pageYOffset;

        const { isLoadingMore } = this.state;
        if (windowBottom >= docHeight && !isLoadingMore) {
            this.page += 1;
            if (this.page <= this.totalPage)
                this.setState({ isLoadingMore: true }, () => this.getMovies());
        }
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
                    onClick={this.handleOnClickDetail.bind(this, val)}
                />
            );
        });
    }

    renderLoadingMore() {
        return (
            <div className="container-loading-more">
                <Loader type="Bars" color="#022641" height={35} />
            </div>
        );
    }

    render() {
        const { isLoading, isLoadingMore } = this.state;
        return (
            <>
                <div
                    className="container"
                    style={{ paddingTop: 16, paddingBottom: 16 }}
                >
                    {isLoading ? this.renderListSkeleton() : this.renderList()}
                </div>
                {isLoadingMore && this.renderLoadingMore()}
            </>
        );
    }
}

export default withRouter(Home);
