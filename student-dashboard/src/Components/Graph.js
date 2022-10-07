import { VictoryChart, VictoryBar, VictoryGroup } from "victory";
import React from "react";

const Graph = (props) => {
  return (
    <div>
      <VictoryChart
        horizontal
        domain={{ x: [0, props.assignmentList.length], y: [0, 5] }}
        padding={{ left: 250, top: 100, right: 200, bottom: 100 }}
        width={750}
        height={3000}
        animate={{ duration: 1000 }}
      >
        <VictoryGroup
          sortOrder="descending"
          sortKey="x"
          alignment="middle"
          barRatio={0.4}
          cornerRadius={{ topLeft: 2, topRight: 2 }}
          offset={20}
          colorScale={"qualitative"}
          style={{
            data: {
              fill: ({ datum }) => (datum.y > 2 ? "#4f8bc9" : "#c43a31"),
            },
            labels: { fontSize: ({ text }) => (text.length > 10 ? 6 : 12) },
            parent: { border: "5px solid #ccc" },
          }}
        >
  //hier net als bij CheckBox een mapfunctie maken
            {props.victoryList.map((victoryBar, idx) => (
  <VictoryBar
        data={victoryBar.studentdata}
    labels={({ datum }) => `mean fun: ${datum.y}`}
          />)
            </VictoryGroup>
      </VictoryChart>
    </div>
  );
};

export default Graph;
