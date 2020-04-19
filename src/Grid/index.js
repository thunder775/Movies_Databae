import React from "react";
import Card from "../MovieCard";
import './styles.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";


class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesList: []
        }
    }

    async getMoviesData() {
        console.log("started");
        await fetch('https://api.themoviedb.org/3/discover/movie?api_key=9b153f4e40437e115298166e6c1b997c')
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

    async handleSearch() {
        this.setState({
            moviesList: []
        });
        let query = document.getElementById('input-field').value;
        console.log({query});
        await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=9b153f4e40437e115298166e6c1b997c`)
            .then(async (response) => {
                let data = await response.json();
                console.log(data["results"]);
                this.setState({
                    moviesList: data["results"]
                })
            });
    }

    render() {
        if (this.state.moviesList.length === 0) {
            return <div><p>loading</p></div>;
        } else {
            return (
                <div className={"main-page"}>
                    <input type="text" id="input-field" className={"search-input-field"}/>
                    <button className={"search-button"} onClick={() => this.handleSearch()}>Search</button>
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
