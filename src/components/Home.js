import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const voteClass = (vote) => {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
}

const Home = ({ title, poster_path, overview, vote_average }) => (
    <div className="movie">
        <img src={poster_path ? IMG_API + poster_path : "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} alt={title} />
        <div className="movie-info">
            <h4 className="title">{title}</h4>
            <span className={`tagVote ${voteClass(vote_average)}`}>{vote_average}</span>
        </div>

        <div className="movie-over">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
    </div>
);

export default Home;