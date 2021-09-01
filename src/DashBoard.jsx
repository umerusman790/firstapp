import React, { useState } from "react";
import { useEffect } from "react";

const DasBoard = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    let values = [];
    let keys = Object.keys(localStorage);
    let len = keys.length;

    while (len--) {
      values.push(JSON.parse(localStorage.getItem(keys[len])));
    }
    setList(values);
    console.log(list);
  }, []);

  return (
    <div>
      {list.map((val) => {
        return (
          <div>
            <h3>{val.email}</h3>
            <h3>{val.password}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default DasBoard;
