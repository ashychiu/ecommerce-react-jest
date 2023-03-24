import { createContext, useContext, useState } from "react";

import { pricePerItem } from "../constants/index";

const OrderDetails = createContext();

// custom hook to check provider
export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);
  if (!contextValue) {
    throw new Error(
      "useOrderDetails must be called from within an OrderDetailsProvider"
    );
  }
  return contextValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {}, // eg {Chocolate: 1, Vanilla: 2}
    toppings: {}, // eg {"Gummy Bears": 1}
  });

  const updateItemCount = (itemName, newItemCount, optionType) => {
    // make a copy of existing state
    const newOptionCounts = { ...optionCounts };
    // update the copy
    newOptionCounts[optionType][itemName] = newItemCount;
    // update the state
    setOptionCounts(newOptionCounts);
  };

  const resetOrder = () => {
    setOptionCounts({
      scoops: {},
      toppings: {},
    });
  };

  const calculateTotal = (optionType) => {
    //get an array of counts for optionType
    const countsArray = Object.values(optionCounts[optionType]);

    // get the total of counts
    const totalCount = countsArray.reduce((total, value) => total + value, 0);

    return totalCount * pricePerItem[optionType];
  };

  const orderTotal = {
    scoops: calculateTotal("scoops"),
    toppings: calculateTotal("toppings"),
  };
  const value = { optionCounts, updateItemCount, resetOrder, orderTotal };
  return <OrderDetails.Provider value={value} {...props} />;
}
