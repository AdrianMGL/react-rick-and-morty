import axios from "axios";
import { useEffect, useState } from "react";
import "/src/assets/styles/SearchBox.css";
import ResidentItem from "./ResidentItem";
import contImage from "/src/assets/images/bg-desktop.gif";

function SearchBox() {
  const [location, setLocation] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}/`)
      .then((res) => setLocation(res.data));
    setLoading(false);
  }, []);

  const searchType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchValue}/`)
      .then((res) => setLocation(res.data));
    setLoading(false);
  };

  //console.log(location);

  return (
    <div className="container">
      <figure className="container__image">
        <img src={contImage} alt="" />
      </figure>
      <div className="serie__name">
        <h2>Rick and Morty</h2>
      </div>
      <div className="form">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={searchType}>Search</button>
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
          {location.residents?.map((resident) => (
            <ResidentItem resident={resident} key={resident} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBox;
