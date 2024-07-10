import { useState, useEffect } from "react";
import "./search.css";

import companiesData from "../staticData/companiesData.json";
import CompanyCard from "./card/companyCard";
import ReferralCard from "./card/referralCard";
import ServiceCard from "./card/servicesCard";

const SearchComponent = ({ placeholder, apiUrl, dataType }) => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (apiUrl && dataType !== "static") {
      // Fetch the data from the provided API URL if dataType is not "static"
      fetch(apiUrl)
        .then((response) => response.json())
        .then((jsonData) => {
          const dataToSet = jsonData.products;
          setData(dataToSet);
          setFilteredData(dataToSet);
        })
        .catch((error) => console.error("Failed to fetch data:", error));
    } else {
      // Use static data if no API URL is provided or dataType is "static"
      setData(companiesData.companies);
      setFilteredData(companiesData.companies);
    }
  }, [apiUrl, dataType]);

  useEffect(() => {
    // Filter data based on search query
    if (apiUrl && dataType == "referral") {
      const filtered = data.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.category &&
            item.category.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredData(filtered);
    } else if (apiUrl && dataType == "services") {
      const filtered = data.filter(
        (item) =>
          item.id
            .toString()
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          (item.brand &&
            item.brand.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredData(filtered);
    } else {
      //! filtering the static data only
      const filtered = data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.industry &&
            item.industry.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredData(filtered);
    }
  }, [searchQuery, data]);

  const renderCard = (item, index) => {
    switch (dataType) {
      case "referral":
        return <ReferralCard key={index} referral={item} />;
      case "services":
        return <ServiceCard key={index} service={item} />;
      case "static":
      default:
        return <CompanyCard key={index} company={item} />;
    }
  };

  return (
    <>
      {dataType === "static" ? (
        <div className="search-container">
          <div className="search-bar-container">
            <input
              className="search-bar"
              type="text"
              placeholder={placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="search-results">
            {filteredData.length > 0 ? (
              filteredData.map(renderCard)
            ) : (
              <p className="no-search-results">
                No companies found matching your search criteria.
              </p>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="search-bar-container">
            <input
              className="search-bar"
              type="text"
              placeholder={placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="home-card-container">
            {filteredData.length > 0 ? (
              filteredData.map(renderCard)
            ) : (
              <p className="no-search-results">
                No companies found matching your search criteria.
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default SearchComponent;
