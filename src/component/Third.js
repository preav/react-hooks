import React, { useContext } from "react";
import { AddressContext } from "../context";

function Third() {
  const place = useContext(AddressContext);
  return (
    <div className="third">
      <b>This is Third component</b>
      <div>
        Place: {place.city}, {place.state}
      </div>
      <div>Country: {place.country}</div>
    </div>
  );
}

export default Third;
