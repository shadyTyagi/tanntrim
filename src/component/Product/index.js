import { useState } from "react";
import ProductItem from "../ProductItem";
import TabItem from "../TabItem";
import "./index.css";

const tabsList = [
  {
    tabId: "VANITY",
    displayText: "Vanity Pouch",
    bagImage:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713110851/Frame_50_cojllh.png",
  },
  {
    tabId: "TOTE",
    displayText: "Tote Bag",
    bagImage:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713110871/Frame_49_pbozxg.png",
  },
  {
    tabId: "DUFFLE",
    displayText: "Duffle Bag",
    bagImage:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713110895/Frame_13_grxjgl.png",
  },
  {
    tabId: "LAPTOP",
    displayText: "Laptop Sleeve",
    bagImage:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713110958/Frame_49_1_mmiaeh.png",
  },
  {
    tabId: "MESSENGER",
    displayText: "Messenger Bag",
    bagImage:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713110973/Frame_49_2_oqfl6g.png",
  },
  {
    tabId: "SLINGS",
    displayText: "Slings Bag",
    bagImage:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713111163/Frame_22_pn7irw.png",
  },
  {
    tabId: "HAND",
    displayText: "HandBag",
    bagImage:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713111174/Frame_20_qdr92h.png",
  },
];

const productData = [
  {
    id: 1,
    name: "THE BROWN METRO MOVERS",
    imageUrl:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713088237/Mask_group_bymg2m.png",
    price: 8999,
    discountPercentage: 50,
    type: "TOTE",
  },
  {
    id: 2,
    name: "THE BROWN METRO MOVERS",
    imageUrl:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713088256/SIPR04031_01_1_1_vgrktz.png",
    price: 8999,
    discountPercentage: 50,
    type: "TOTE",
  },

  {
    id: 3,
    name: "THE BROWN METRO MOVERS",
    imageUrl:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713088275/SIPR04085_01_1_1_fd4hup.png",
    price: 8999,
    discountPercentage: 50,
    type: "TOTE",
  },
  {
    id: 4,
    name: "THE BROWN METRO MOVERS",
    imageUrl:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713088296/SIPR04086_01_1_1_iakrwh.png",
    price: 8999,
    discountPercentage: 50,
    type: "TOTE",
  },
  {
    id: 5,
    name: "THE BROWN METRO MOVERS",
    imageUrl:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713088237/Mask_group_bymg2m.png",
    price: 8999,
    discountPercentage: 50,
    type: "TOTE",
  },
  {
    id: 6,
    name: "THE BROWN METRO MOVERS",
    imageUrl:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713088256/SIPR04031_01_1_1_vgrktz.png",
    price: 8999,
    discountPercentage: 50,
    type: "TOTE",
  },
  {
    id: 7,
    name: "THE BROWN METRO MOVERS",
    imageUrl:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713088275/SIPR04085_01_1_1_fd4hup.png",
    price: 8999,
    discountPercentage: 50,
    type: "TOTE",
  },
  {
    id: 8,
    name: "THE BROWN METRO MOVERS",
    imageUrl:
      "https://res.cloudinary.com/dzaz9bsnw/image/upload/v1713088296/SIPR04086_01_1_1_iakrwh.png",
    price: 8999,
    discountPercentage: 50,
    type: "TOTE",
  },
];

const Product = () => {
  const [activeTabId, setActiveTabId] = useState(tabsList[1].tabId);

  const filterProductBag = () => {
    const filteredData = productData.filter(
      (item) => item.type === activeTabId
    );
    return filteredData;
  };
  const updateActiveTabId = (tabId) => {
    setActiveTabId(tabId);
  };
  const filterProduct = filterProductBag();
  return (
    <div>
      <ul className="tab-item-card">
        {tabsList.map((item) => (
          <TabItem tabData={item} key={item.id} onClick={updateActiveTabId} />
        ))}
      </ul>
      <div className="product-item-container">
        <p className="category">
          Bags<span className="dot">.</span>Bagpacks
        </p>
        {filterProduct.length === 0 ? (
          <p className="no-item">Sorry, no items found</p>
        ) : (
          <ul className="product-item-card">
            {filterProduct.map((item) => (
              <ProductItem productData={item} key={item.id} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Product;
