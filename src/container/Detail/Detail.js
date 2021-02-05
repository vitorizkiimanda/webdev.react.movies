import React from "react";
import { withRouter } from "react-router-dom";

import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";

import { formatDate, formatDateYear } from "../../utils/utils";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderGenres() {
        const { data, genres } = this.props.location.state;
        return data.genre_ids.map((val) => {
            const seledted = genres.find((a) => a.id === val);
            if (seledted) return seledted.name;
            return null;
        });
    }

    render() {
        const { data } = this.props.location.state;
        const backdropUrl = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}`;
        const linearGradient =
            "to bottom right, rgba(3.53%, 7.45%, 12.94%, 1.00), rgba(3.53%, 7.45%, 12.94%, 0.84)";
        return (
            <div
                className="container"
                style={{
                    backgroundSize: "cover",
                    background: `linear-gradient(${linearGradient}), url(${backdropUrl})`,
                    width: "100%",
                }}
            >
                <div className="container-detail">
                    <img
                        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`}
                        alt=""
                        className="detail-img"
                    />
                    <div className="detail-text-container">
                        <div className="detail-text-title">
                            {`${data.original_title} `}
                            <span className="detail-text-release-date">
                                {`(${formatDateYear(data.release_date)})`}
                            </span>
                        </div>
                        <div className="detail-text-description">
                            {`${formatDate(data.release_date)}(${
                                data.original_language
                            }) - ${this.renderGenres()}`}
                        </div>
                        <div className="rating-container-detail">
                            <div className="rating-sub-container-detail">
                                <CircularProgressbarWithChildren
                                    value={data.vote_average}
                                    maxValue={10}
                                    strokeWidth={6}
                                    background
                                    backgroundPadding={6}
                                    styles={buildStyles({
                                        strokeLinecap: "round",
                                        trailColor: "rgba(35,208,122, 0.3)",
                                        pathColor: "rgba(35,208,122, 1)",
                                        backgroundColor: "#091c23",
                                    })}
                                >
                                    <div className="rating-text-container-detail">
                                        <strong className="rating-text-strong-detail">
                                            {data.vote_average * 10}
                                        </strong>
                                        %
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div className="rating-text-label-detail">
                                User
                                <br />
                                Score
                            </div>
                        </div>

                        <div className="detail-text-sub-title">Overview</div>
                        <div className="detail-text-description">
                            {data.overview}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Detail);
