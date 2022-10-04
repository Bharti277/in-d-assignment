
const SearchComponent = ({ renderSearchProps }) => {
  const onChange = (e) => {
    renderSearchProps.setKeyword(e.target.value);
  };
  const onSearch = (e) => {
    if ((e.keyCode === 13 || e.type === "click") && renderSearchProps.keyword) {
      renderSearchProps.search();
    }
  };
  return (
    <div
      style={{
        border: "2px solid grey",
        borderRadius: "10px",
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: "1px"
      }}
    >
      <input
        style={{
          border: "none",
          padding: "8px",
          width: "70%",
          outline: "none"
        }}
        placeholder="Enter to search"
        type="text"
        onChange={onChange}
        onKeyDown={onSearch}
      />
      <div
        style={{
          width: "10%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <button
          style={{
            color: "green",
            backgroundColor: "white",
            width: "50%",
            height: "100%",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer"
          }}
          onClick={onSearch}
        >
          Search
        </button>
        <button
          style={{
            color: "red",
            backgroundColor: "white",
            width: "50%",
            height: "100%",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer"
          }}
          onClick={renderSearchProps.clearKeyword}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
