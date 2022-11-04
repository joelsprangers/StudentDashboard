import { VictoryChart, VictoryBar, VictoryGroup } from "victory";
import React from "react";
import { Container } from "react-bootstrap";

const Graph = (props) => {
  return (
    <Container>
      <VictoryChart
        horizontal
        domain={{ x: [0, props.assignmentList.length], y: [0, 5] }}
        padding={{ left: 250, top: 30, right: 200, bottom: 100 }}
        width={750}
        height={3000}
        animate={{ duration: 1000 }}
      >
        <VictoryGroup
          sortOrder="descending"
          sortKey="x"
          alignment="middle"
          barRatio={0.4}
          offset={20}
          colorScale={"qualitative"}
          style={{
            data: {
              fill: ({ datum }) => (datum.y > 2 ? "#4f8bc9" : "#ffb213"),
            },
            labels: { fontSize: ({ text }) => (text.length > 10 ? 6 : 12) },
            parent: { border: "5px solid #ccc" },
          }}
        >
          {props.studentData.map((dataSet, idx) => (
            <VictoryBar
              key={idx}
              data={dataSet.data}
              cornerRadius={{ topLeft: 5, topRight: 5 }}
              labels={({ datum }) => `${dataSet.rankingType}: ${datum.y}`}
            />
          ))}
        </VictoryGroup>
      </VictoryChart>
    </Container>
  );
};

export default Graph;
