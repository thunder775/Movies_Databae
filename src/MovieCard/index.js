import React from "react";
import './styles.css'
import {Link,} from "react-router-dom";

class Card extends React.Component {
    card = this.props.cardDetails;

    render() {
        let path = "/details/" + this.card["id"];
        return (
            <Link to={path}>
                <div className={"movie-card"}>

                    <img src={"https://image.tmdb.org/t/p/original" + this.card["poster_path"]} alt=""
                         className={"image"}/>
                    <div className={"grid-item-hover"}/>
                         <div className={"details"}>
                        <p className={"title"}>{this.card["original_title"]}</p>
                        <div className={"footer-card"}>
                            <div className={"bottom"}><p>{this.card["overview"].substring(0, 100)}</p>
                                <div className={"content-rating"}>
                                    <p>{this.card["vote_average"]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}

export default Card;