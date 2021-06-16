import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      <ul>
        {props.contacts.map((contact, index) =>{
        return (
        <li key={index}>
          <Tile contact={contact}/>
        </li>
        )
      })}
      </ul>
      
    </div>
  );
};
