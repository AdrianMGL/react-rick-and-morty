import React, { useEffect, useState } from "react";
import axios from "axios";

const ResidentItemEpisode = ({ epi }) => {
  const [residentItemEpisode, setResidentItemEpisode] = useState([]);

  useEffect(() => {
    axios.get(epi).then((res) => setResidentItemEpisode(res.data));
  }, [epi]);

  console.log(residentItemEpisode);

  return (
    <>
      <h6>
        <span className="resident__episode-id">{residentItemEpisode.id}</span>
      </h6>
    </>
  );
};

export default ResidentItemEpisode;
