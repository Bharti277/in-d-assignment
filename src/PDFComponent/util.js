import { highlightPlugin, Trigger } from "@react-pdf-viewer/highlight";

export const getArea = (props) => {
  const { x1, y1, x2, y2, pageNo: pageIndex } = props;
  const getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };
  // For height calclation 20-1pow2 + 10-1pow2 =21
  const height = getDistance(x1, y1, x2, y2);
  const width = getDistance(x1, y1, x2, y2);
  return [
    {
      pageIndex,
      height,
      width,
      left: x1,
      top: y1
    }
  ];
};

export const getPlugin = (area) => {
  const renderHighlights = (props) => (
    <div>
      {area
        .filter((area) => area.pageIndex === props.pageIndex)
        .map((area, idx) => (
          <div
            key={idx}
            className="highlight-area"
            style={Object.assign(
              {},
              {
                background: "yellow",
                opacity: 0.4
              },
              props.getCssProperties(area, props.rotation)
            )}
          />
        ))}
    </div>
  );

  const highlightPluginInstance = highlightPlugin({
    renderHighlights,
    trigger: Trigger.none
  });
  return highlightPluginInstance;
};

export const throttling = (cb) => {
  let timerID = null;
  return (e) => {
    if (!timerID) {
      timerID = setTimeout(() => {
        cb(e);
        timerID = null;
      }, 300);
    }
  };
};
