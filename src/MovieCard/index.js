import React from "react";
import './styles.css'
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

class Card extends React.Component {
    render() {
        let path = "/details/" + this.props.id;
        return (
            <Link to={path}>
                <div className={"movie-card"}>
                    <img src={this.props.url} alt="" className={"image"}/>
                    <div className={"details"}>
                        <p className={"title"}>{this.props.title}</p>
                        <div className={"footer"}>
                            <div className={"bottom"}><p>{this.props.genres}</p>
                                <div className={"content-rating"}>
                                    <p>{this.props.contentRating}</p>
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