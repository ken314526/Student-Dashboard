import React from "react";
import Header from "./Header";
import data from "../data/dummyData";

export default function Adresses() {
  return (
    <div>
      <Header title="Addresses" subtitle="" />
      <ol className="m-5" style={{ fontSize: "20px" }}>
        {data.map((d) => (
          <li className="col-md-8 m-3 p-1">{d.address}</li>
        ))}
      </ol>
    </div>
  );
}
