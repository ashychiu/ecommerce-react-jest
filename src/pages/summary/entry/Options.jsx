import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : null;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <div>{optionItems}</div>;
};

export default Options;
