import React, { useEffect, useState } from "react";
import axios from "axios";
import ResidentItemEpisode from "./ResidentItemEpisode";

const ResidentItem = ({ resident }) => {
  const [residentItem, setResidentItem] = useState([]);

  useEffect(() => {
    axios.get(resident).then((res) => setResidentItem(res.data));
  }, [resident]);

  //  console.log(residentItem);

  return (
    <div className="resident__date-item">
      <div className="image">
        <figure className="card__image">
          <img src={residentItem.image} alt={residentItem.name} />
        </figure>
      </div>

      <div className="wrapper__resident">
        <figure className="resident__image">
          <img src={residentItem.image} alt={residentItem.name} />
        </figure>
        <div className="resident__name">
          <h5 className="resident__name-item">{residentItem.name}</h5>
        </div>
        <div className="date__basic">
          <h6>
            Origin:{" "}
            <span className="resident__origin-name">
              {residentItem.origin?.name}
            </span>
          </h6>
          <ul className="resident__episode">
            <h6> Episodes where appear: </h6>
            {residentItem.episode?.map((episode) => (
              <ResidentItemEpisode episode={episode} key={episode} />
            ))}
          </ul>
          <h6>
            Number of episodes: <span>{residentItem.episode?.length}</span>
          </h6>
          <h6>
            Status: <span className="status">{residentItem.status}</span>{" "}
            <span className={residentItem.status}> </span>
          </h6>
          <h6>
            Specie:{" "}
            <span className="resident__species">{residentItem.species}</span>
          </h6>
          <h6>
            Gender: <span>{residentItem.gender}</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ResidentItem;
