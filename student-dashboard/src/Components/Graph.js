import { VictoryChart, VictoryBar, VictoryLine } from "victory";
import React from "react";
import testData from "../Assets/data/student-information.json";

const Graph = () => {
  return (
    <div>
      <VictoryChart horizontal>
        <VictoryBar
          categories={{
            x: ["birds", "cats", "dogs", "fish", "frogs"],
          }}
          data={[
            { x: "cats", y: 1 },
            { x: "dogs", y: 2 },
            { x: "birds", y: 3 },
            { x: "fish", y: 2 },
            { x: "frogs", y: 1 },
          ]}
        />
      </VictoryChart>
    </div>
  );
};

export default Graph;
