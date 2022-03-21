import React from "react";
export default function Search() {
  return (
    <form id="seach-form">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Type a city.."
            className="form-control"
            id="search-input"
          />
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="Search"
            className="form-control btn-primary"
            id="search"
          />
        </div>
        <div className="col-2">
          <button id="currant" className="form-control btn-primary">
            Currant
          </button>
        </div>
      </div>
    </form>
  );
}
