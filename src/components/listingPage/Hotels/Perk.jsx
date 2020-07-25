import React from "react";

var Perk = props => {
  if (props.hasPerk) {
    return <span className="hotel__perks">{props.perk}</span>;
  } else {
    return null;
  }
};

export default Perk;
