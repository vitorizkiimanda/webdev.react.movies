import React from "react";
import { withRouter } from "react-router-dom";

import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        const backdropUrl =
            "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/srYya1ZlI97Au4jUYAktDe3avyA.jpg";
        const linearGradient =
            "to bottom right, rgba(3.53%, 7.45%, 12.94%, 1.00), rgba(3.53%, 7.45%, 12.94%, 0.84)";
        return (
            <div
                className="container"
                style={{
                    backgroundSize: "cover",
                    background: `linear-gradient(${linearGradient}), url(${backdropUrl})`,
                }}
            >
                <div className="container-detail">
                    <img
                        src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg"
                        alt=""
                        className="detail-img"
                    />
                    <div className="detail-text-container">
                        <div className="detail-text-title">
                            Title{" "}
                            <span className="detail-text-release-date">
                                (release year)
                            </span>
                        </div>
                        <div className="detail-text-description">
                            release date(lang) - genres
                        </div>
                        <div className="rating-container-detail">
                            <div className="rating-sub-container-detail">
                                <CircularProgressbarWithChildren
                                    value={7.3}
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
                                            73
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
                            lorem ipsum dolor sir amet
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Detail);
