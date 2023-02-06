import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import reqs from "../Req";
import Row from "../Row";
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={reqs.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={reqs.fetchTrending} />
      <Row title="Top Rated" fetchUrl={reqs.fetchTopRate} />
      <Row title="Action Movies" fetchUrl={reqs.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={reqs.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={reqs.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={reqs.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={reqs.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
