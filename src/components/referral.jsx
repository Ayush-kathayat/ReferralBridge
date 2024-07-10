import SearchComponent from "./Search";

const Referral = () => {
  return (
    <>
      <SearchComponent
        placeholder={"Search By Title or Category...."}
        apiUrl={"https://dummyjson.com/products?limit=24"}
        dataType={"referral"}
      />
    </>
  );
};

export default Referral;
