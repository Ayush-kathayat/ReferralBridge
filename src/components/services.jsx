import SearchComponent from "./Search";
const Services = () => {
  return (
    <SearchComponent
      placeholder={"Search by Service ID or Brand Name...."}
      apiUrl={"https://dummyjson.com/products?limit=24"}
      dataType={"services"}
    />
  );
};

export default Services;
