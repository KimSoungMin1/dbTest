import { useEffect } from "react";
import { useState } from "react";
import docsSnap from "../database/db";
import { Link } from "react-router-dom";

const Posting = () => {
  const [state, setState] = useState([]);
  const list = () => {
    docsSnap.then((result) => {
      result.forEach((doc) => {
        doc.data();
        console.log(doc);
      });
    });
  };

  return (
    <Link to="/">
      <div>{state.like}</div>;
    </Link>
  );
};

export default Posting;
