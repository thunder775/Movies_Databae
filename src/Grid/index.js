import React from "react";
import Card from "../MovieCard";
import './styles.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";


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
        await fetch(this.state.link)
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
            return <div><p>loading</p></div>;
        } else {
            return (
                <div className={"main-page"}>
                    <Link to={'/search'}>
                        <button className={"search-button"}>Search</button>
                    </Link>
                    <div className={"movies-grid"}>

                        {
                            this.state.moviesList.map((element) => {
                                return <Card id={element["id"]}
                                             url={"https://image.tmdb.org/t/p/original" + element["poster_path"]}
                                             title={element["original_title"]}
                                             genres={element["overview"].substring(0, 100)}
                                             contentRating={element["vote_average"]}
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
