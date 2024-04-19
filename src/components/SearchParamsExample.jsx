import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchParamsExample = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isFilterActive = searchParams.get("filter") === "active";

  const handleActiveUsers = () => {
    setSearchParams({ filter: "active" });
  };
  const handleResetUsers = () => {
    setSearchParams({});
  };

  return (
    <div>
      <h1>Users</h1>
      <h2>{isFilterActive ? "Active Users" : "All users"}</h2>
      <div>
        <button onClick={handleActiveUsers}>Active Users</button>
        <br />
        <button onClick={handleResetUsers}>Reset Users</button>
      </div>
    </div>
  );
};

export default SearchParamsExample;
