import React from "react";
import SearchContainLeft from "./SearchContainLeft";
import SearchContainrRight from "./SearchContainrRight";
import "./SearchContain.css";

function SearchContain(props) {
  return (
    <div className="search__contain">
      <SearchContainLeft />
      <SearchContainrRight profils={props?.profils} found={props.found}/>
    </div>
  );
}

export default SearchContain;
