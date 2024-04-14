import React from "react";
import "./index.css";

const TabItem = (props) => {
  const { tabData, onClick } = props;
  const { bagImage, displayText, tabId } = tabData;
  const onClickTabItem = () => {
    onClick(tabId);
  };
  return (
    <li className="tab-item-list">
      <button className="tab-button" onClick={onClickTabItem}>
        <img className="bag-tab-img" src={bagImage} alt={displayText} />
        <p className="display-text">{displayText}</p>
      </button>
    </li>
  );
};

export default TabItem;
