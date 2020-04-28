import React from "react";
import "./styles.css"

class DetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null
        }
    }

    componentDidMount() {
        this.getMovieData()
    }

    async getMovieData() {
        console.log("started");
        fetch('https://api.themoviedb.org/3/movie/' + this.props.match.params.id + '?api_key=9b153f4e40437e115298166e6c1b997c')
            .then(async (response) => {
                let data = await response.json();
                console.log(data);
                this.setState({
                    movie: data
                })
            });
    }


    render() {
        if (this.state.movie === null) {
            return <div className={"main-page"}><p className={"loading-text"}>loading</p></div>;
        } else {
            return (
                <div className={"details-page"}
                     style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + this.state.movie.backdrop_path})`}}>
                    <div className={"overlay"}></div>
                    <div className={"details-div"}>
                        <img src={"https://image.tmdb.org/t/p/original" + this.state.movie.poster_path} alt=""
                             className={"details-poster"}/>
                        <div className={"details-text"}>
                            <p className={"details-title"}>{this.state.movie.original_title}</p>
                            <p className={"details-overview"}>{this.state.movie.overview}</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default DetailsPage;