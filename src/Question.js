import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function Question({ id, title, info }) {
  const [show, setShow] = useState();

  const clickIcon = () => {
    setShow(!show);
    console.log("clicked");
  };

  return (
    <div style={{ width: "35rem", borderBottom: "1px solid black" }}>
      <h3>{title}</h3>
      {show ? (
        <span>
          <button onClick={clickIcon}>
            <FaMinus />
          </button>
          <p>{info}</p>
        </span>
      ) : (
        <span>
          <button onClick={clickIcon}>
            <FaPlus />
          </button>
        </span>
      )}
    </div>
  );
}

export default Question;
