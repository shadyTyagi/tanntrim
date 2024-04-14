import React from "react";
import "./index.css";

const TabItem = (props) => {
  const { tabData } = props;
  const { bagImage, displayText } = tabData;
  return (
    <li className="tab-item-list">
      <img src={bagImage} alt={displayText} />
      <p>{displayText}</p>
    </li>
  );
};

export default TabItem;
