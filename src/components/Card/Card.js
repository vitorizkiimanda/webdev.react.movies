import {
    CircularProgressbarWithChildren,
    buildStyles,
} from "react-circular-progressbar";

export default function App(props) {
    const { onClick } = props;
    return (
        <div className="card">
            <img
                src="https://www.themoviedb.org/t/p/w440_and_h660_face/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg"
                className="card-img"
                alt=""
                onClick={onClick}
            />
            <div className="card-text-container">
                <div className="rating-container">
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
                        <div className="rating-text-container">
                            <strong className="rating-text-strong">73</strong>%
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="text-title" onClick={onClick}>
                    Title
                </div>
                <div className="text-release-date">Release Date</div>
            </div>
        </div>
    );
}
