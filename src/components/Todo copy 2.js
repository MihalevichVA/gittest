import React, { useState } from "react";
import "./App.css";

const SORTING = {
  "сначала популярные": (a, b) => a.rating - b.rating,
  "сначала дешевые": (a, b) => a.price - b.price,
  "by price ASC": (a, b) => b.price - a.price,
};

[].filter((p) => true);

function MultiSelect({ names, onSelect }) {
  const [set, setSet] = useState(new Set());

  const handleSelect = ({ target: { name } }) => {
    if (set.has(name)) {
     set.delete(name)
    }else {
      set.add(name)
    }


    const newSet - new Set
    setSet(new Set([...set.add(name)]));
    onSelect(set);
  };

  return (
    <div>
      {names.map((name) => (
        <div>
          <input type="checkbox" name={name} onClick={handleSelect} />
          {name}
        </div>
      ))}
    </div>
  );
}
export default function App() {
  const [sortingFn, setSortingConfig] = setState({});
  const [filteringConfig, setFilteringConfig] = setState({});

  const allProduct = useMemo(() => generateProduct(5000), []);

  
  const productToDisplay = useMemo(() => {
    return [allProduct.filter().sort(sortingFn),]
  }, [allProduct, filteringConfig.fn, sortingFn]);

  return (
    <div>
      <div>
        {Object.keys(SORTING).map((sorting) => (
          <button
            onClick={setSortingFn(SORTING[name])}
            style={{
              background: sortingFn === SORTING[name] ? "red" : "white",
            }}
          ></button>
        ))}
      </div>
   <div>
    <MultiSelect />
   </div>
   
    </div>
  );
}
