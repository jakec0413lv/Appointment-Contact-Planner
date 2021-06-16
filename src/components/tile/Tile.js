import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{props.contact.name}</p>
      <p className="tile">{props.contact.email}</p>
      <p className="tile">{props.contact.phoneNumber}</p>
    </div>
  );
};
