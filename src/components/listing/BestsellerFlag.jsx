import React from "react";

var BestsellerFlag = props => {
  if (props.isBestseller) {
    return <span className="hotel__best-seller-flag">Bestseller</span>;
  } else {
    return null;
  }
};

export default BestsellerFlag;
