import React from "react";

var Perk = props => {
  if (props.hasPerk) {
    return <span className="hotel__perks border border-success m-1 rounded font-weight-bold">{props.perk}</span>;
  } else {
    return null;
  }
};

export default Perk;