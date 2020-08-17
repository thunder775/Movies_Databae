import React, {useEffect, useState} from "react";
import Card from "../MovieCard";
import './styles.css';
import {Link} from "react-router-dom";
import SearchPage from "../searchPage";

function Grid(props) {
    let pageNumber = props.match.params.pageNumber === undefined ? 1 : props.match.params.pageNumber;
    let [moviesList, setMoviesList] = useState([]);

    async function getMoviesData(pageNumber) {
        console.log('------------------------')
        console.log(JSON.stringify(props));
        console.log("started");
        fetch(props.match.params.query === undefined ? 'https://api.themoviedb.org/3/discover/movie?api_key=9b153f4e40437e115298166e6c1b997c&page=' + pageNumber : `https://api.themoviedb.org/3/search/movie?query=${props.match.params.query}&api_key=9b153f4e40437e115298166e6c1b997c`,
        )
            .then(async (response) => {
                let data = await response.json();
                setMoviesList(data["results"])
            });
    }

    useEffect(() => {
        getMoviesData(props.match.params.pageNumber === undefined ? 1 : props.match.params.pageNumber)
    },)


    if (moviesList.length === 0) {
        return <div className={"main-page-loading"}><p className={"loading-text"}>loading</p></div>;
    } else {
        return (
            <div key={JSON.stringify(moviesList) + pageNumber} className={"main-page"}>

                <div className={"app-bar"}>
                    <img src={require("../assets/logo.PNG")} alt="" className={"app-bar-logo"}/>
                    <SearchPage/>
                </div>
                <div className={"movies-grid"}>
                    {
                        moviesList.map((element) => {
                            return <Card
                                cardDetails={element}
                            />
                        })
                    }
                </div>
                <div className={'footer'}>
                    <Link to={`/${Number(pageNumber) + 1}`}>
                        <i className="fa fa-angle-double-right search-button"/>
                    </Link>
                    {pageNumber > 1 && <Link to={`/${pageNumber - 1}`}>
                        <i className="fa fa-angle-double-left search-button"/>
                    </Link>}
                    <div className={"credits-section"}>
                        <p className={"tech-stack"}>Tech Used: React JS, HTML, CSS</p>
                    </div>


                </div>
            </div>
        )
    }


}


export default Grid;
