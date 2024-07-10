import { useState, useEffect } from "react";
import "./search.css";

import companiesData from "../staticData/companiesData.json";

import CompanyCard from "./companyCard";
const SearchComponent = () => {
  const [data, setData] = useState(companiesData.companies);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(companiesData.companies);

  useEffect(() => {
    // Fetch the JSON data when the component mounts
    fetch("companiesData.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.companies); // Assuming the JSON structure you provided
        setFilteredData(jsonData.companies); // Initially display all data
      });
  }, []);

  useEffect(() => {
    // Filter data based on search query, considering both name and industry
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.industry &&
          item.industry.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search by name or industry..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="search-results">
      {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <CompanyCard key={index} company={item} />
          ))
        ) : (
          <p className="no-search-results">No companies found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
