import React, {useState} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";

export default function SearchPage(props) {
    let [path, setPath] = useState('/search');
    let [isElongated, setOnclick] = useState(false);
    return (
        <div className={'search-bar-div'}>
            <input type="text" id="input-field" className={`search-input-field ${isElongated && "elongated"}`}
                   onChange={(event) => setPath(`/search/${event.target.value}`)} onClick={() => setOnclick(true)}/>
            <Link to={path} onClick={() => setOnclick(false)}>
                <i className="fa fa-search search-button"/>
                {/*<button className={"search-button"} >Search</button>*/}
            </Link>
        </div>
    );
}


