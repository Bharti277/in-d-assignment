export default function InputContainer(props) {
    const {
      onChangeCoordinates,
      onChangePageNumber,
      pageNo,
      coordinates
    } = props;
    return (
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%" }}>
          <span>x1</span>
          <input
            style={{ width: "100%" }}
            name="x1"
            value={coordinates.x1}
            onChange={onChangeCoordinates}
          />
        </div>
        <div style={{ width: "100%" }}>
          <span>y1</span>
          <input
            style={{ width: "100%" }}
            name="y1"
            value={coordinates.y1}
            onChange={onChangeCoordinates}
          />
        </div>
        <div style={{ width: "100%" }}>
          <span>x2</span>
          <input
            style={{ width: "100%" }}
            name="x2"
            value={coordinates.x2}
            onChange={onChangeCoordinates}
          />
        </div>
        <div style={{ width: "100%" }}>
          <span>y2</span>
          <input
            style={{ width: "100%" }}
            name="y2"
            value={coordinates.y2}
            onChange={onChangeCoordinates}
          />
        </div>
        <div style={{ marginTop: "10px", width: "100%" }}>
          <span style={{ marginRight: "10px" }}>Page Number</span>
          <input
            style={{ width: "100%" }}
            value={pageNo}
            onChange={onChangePageNumber}
          />
        </div>
      </div>
    );
  }
  