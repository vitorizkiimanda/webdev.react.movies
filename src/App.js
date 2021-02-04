import logo from "./logo.svg";
import "./App.css";
import * as axios from "axios";

function App() {
    axios
        .get(
            "https://api.themoviedb.org/3/movie/now_playing?api_key=d6ea2204529c6bffd564fdcee6792a22&language=en-US&page=1"
        )
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
