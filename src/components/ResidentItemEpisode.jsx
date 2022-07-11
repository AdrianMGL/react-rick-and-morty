import React, { useEffect, useState } from "react";
import axios from "axios";

const ResidentItemEpisode = ({ episode }) => {
  const [residentItemEpisode, setResidentItemEpisode] = useState([]);

  useEffect(() => {
    axios.get(episode).then((res) => setResidentItemEpisode(res.data));
  }, [episode]);

  // console.log(residentItemEpisode);

  return (
    <>
      <h6>
        <span className="resident__episode-id">{residentItemEpisode.id}</span>
      </h6>
    </>
  );
};

export default ResidentItemEpisode;
