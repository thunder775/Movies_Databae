import React from "react";
import Card from "../MovieCard";
import './styles.css';
import {BrowserRouter as Router, Link} from "react-router-dom";


class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: this.props.match.params.query === undefined ? 'https://api.themoviedb.org/3/discover/movie?api_key=9b153f4e40437e115298166e6c1b997c' : `https://api.themoviedb.org/3/search/movie?query=${this.props.match.params.query}&api_key=9b153f4e40437e115298166e6c1b997c`,
            moviesList: []
        }
    }

    async getMoviesData() {
        console.log("started");
        fetch(this.state.link)
            .then(async (response) => {
                let data = await response.json();
                console.log(data["results"]);
                this.setState({
                    moviesList: data["results"]
                })
            });
        console.log(this.state.moviesList);
    }

    componentDidMount() {
        this.getMoviesData()
    }

    render() {
        if (this.state.moviesList.length === 0) {
            return <div className={"main-page"}><p className={"loading-text"}>loading</p></div>;
        } else {
            return (
                <div className={"main-page"}>
                    <Link to={'/search'}>
                        <button className={"search-button"}>Search</button>
                    </Link>
                    <div className={"movies-grid"}>
                        {
                            this.state.moviesList.map((element) => {
                                return <Card
                                    cardDetails={element}
                                />
                            })
                        }
                    </div>
                </div>
            )
        }

    }
}

export default Grid;
