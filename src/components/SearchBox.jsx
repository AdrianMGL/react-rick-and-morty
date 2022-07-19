import axios from "axios";
import { useEffect, useState } from "react";
import "/src/assets/styles/SearchBox.css";
import ResidentItem from "./ResidentItem";
import contImage from "/src/assets/images/bg.gif";
import cardImage from "/src/assets/images/bg-header.png";
import Spinner from "./spinner/Spinner";
import Pagination from "./Pagination";

const SearchBox = () => {
  const [location, setLocation] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [locationSuggestions, setLocationSuggestions] = useState([]);

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}/`)
      .then((res) => setLocation(res.data));
    setLoading(false);
  }, []);

  const searchType = (location) => {
    setLocation(location);
    setLoading(false);
    reset();
  };

  //console.log(location);

  /** */
  useEffect(() => {
    if (searchValue !== "") {
      axios
        .get(`https://rickandmortyapi.com/api/location/?name=${searchValue}`)
        .then((res) => setLocationSuggestions(res.data.results))
        .then((error) => console.log(error));
    } else {
      setLocationSuggestions([]);
    }
  }, [searchValue]);

  //console.log(locationSuggestions)

  /** Current Pages */
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFisrtPost = indexOfLastPage - postsPerPage;
  const currentPosts = location.residents?.slice(
    indexOfFisrtPost,
    indexOfLastPage
  );

  /** */
  const reset = () => {
    setSearchValue("");
  };

  /** Change Page */
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container">
        <figure className="container__image-header">
          <img src={cardImage} alt="" />
        </figure>
        <figure className="container__image">
          <img src={contImage} alt="" />
        </figure>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="serie__name">
              <h2>Rick and Morty</h2>
            </div>
            <div className="form">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search location"
              />
              {locationSuggestions.map((suggestion) => (
                <div
                  key={suggestion.name}
                  className="suggestions"
                  onClick={() => searchType(suggestion)}
                >
                  <span className="suggestions-item">{suggestion.name}</span>
                </div>
              ))}
              {/* <button onClick={() => searchType(suggestion)} type='button' >Search</button> */}
            </div>
            <h1 className="location__name">{location.name}</h1>
            <div className="location__dates">
              <div className="location__dates-item">
                <h4>
                  Type: <span>{location.type}</span>
                </h4>
                <h4>
                  Dimension: <span>{location.dimension}</span>
                </h4>
                <h4>
                  Population: <span>{location.residents?.length}</span>
                </h4>
              </div>
            </div>
            <div className="residents">
              <ul className="residents__dates">
                {currentPosts?.map((resident) => (
                  <ResidentItem resident={resident} key={resident} />
                ))}
              </ul>
              {/*  */}
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={location.residents?.length}
                paginate={paginate}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchBox;
