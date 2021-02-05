import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";

import { formatDate } from "../../utils/utils";

export default function Card(props) {
    const { onClick, data } = props;
    return (
        <div className="card">
            <img
                src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${data.poster_path}`}
                className="card-img"
                alt=""
                onClick={onClick}
            />
            <div className="card-text-container">
                <div className="rating-container">
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
                        <div className="rating-text-container">
                            <strong className="rating-text-strong">
                                {data.vote_average * 10}
                            </strong>
                            %
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="card-text-title" onClick={onClick}>
                    {data.original_title}
                </div>
                <div className="card-text-release-date">
                    {formatDate(data.release_date)}
                </div>
            </div>
        </div>
    );
}
