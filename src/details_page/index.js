import React from "react";
import "./styles.css"

class DetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            playVid: false
        }
    }

    componentDidMount() {
        this.getMovieData()
    }

    toggleYoutube() {
        this.setState({
            playVid: !this.state.playVid
        })
    }

    closeYoutube() {
        this.setState({
            playVid: false
        })
    }

    async getMovieData() {
        console.log("started");
        fetch('https://api.themoviedb.org/3/movie/' + this.props.match.params.id + '?api_key=9b153f4e40437e115298166e6c1b997c&append_to_response=videos')
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
            return <div className={"main-page-loading"}><p className={"loading-text"}>Loading</p></div>;
        } else {
            return (
                <div className={"details-page"}
                     style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + this.state.movie.backdrop_path})`}}>
                    <div className={"overlay"}/>
                    <div className={"details-div"}>
                        <div className={"details-image-youtube"}>
                            <i className="fa fa-youtube-play youtube-icon" onClick={() => this.toggleYoutube()}/>
                            <img src={"https://image.tmdb.org/t/p/original" + this.state.movie.poster_path} alt=""
                                 className={"details-poster"}/>
                        </div>
                        <div className={"details-text"}>
                            <p className={"details-title"}>{this.state.movie.original_title}</p>
                            <p className={"details-overview"}>{this.state.movie.overview}</p>
                        </div>
                    </div>
                    {this.state.playVid && <div className={"youtube-overlay"} onClick={()=>this.closeYoutube()}/>}
                    {this.state.playVid && <YouTube id={`${this.state.movie.videos.results[0].key}`}/>}
                </div>
            );
        }
    }
}

function YouTube(props) {
    return (
        <div className={"youtube-popup"}>
            <iframe
                style={{
                    position: "absolute",
                    top: "25%",
                    left: "25%",
                    width: "50%",
                    height: "50%"
                }}
                src={`https://www.youtube.com/embed/${props.id}`}
                frameBorder="0"
            />
        </div>
    );
};

export default DetailsPage;