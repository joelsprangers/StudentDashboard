import React, { Component } from "react";
import GraphLogic from "./Components/GraphLogic";
import Graph from "./Components/Graph";
import StudentInformation from "./Components/StudentInformation";
import Header from "./Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class BoardLogic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttons: [
        {
          name: "show difficulty",
          value: "1",
          isChecked: true,
          rankingType: "difficult",
        },
        {
          name: "show enjoyment",
          value: "2",
          isChecked: false,
          rankingType: "fun",
        },
        {
          name: "show all",
          value: "3",
          isChecked: false,
          rankingType: "fun and difficult",
        },
      ],
      studentDataDifficulty: GraphLogic.initialListDifficulty,
      studentDataFun: GraphLogic.initialListFun,
      rankingType: "difficult",
      studentList: GraphLogic.uniqueStudentNames,
      assignmentList: GraphLogic.uniqueAssigmentNames,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateStudentData = this.updateStudentData.bind(this);
  }

  // hier verder neuzen, want de logic komt niet goed door. het ligt aan de function create list
  updateStudentData() {
    const newStudentData = GraphLogic.createList(this.state.rankingType);
    console.log(newStudentData);
    this.setState((prevState) => {
      let newState = {
        ...prevState,
        studentData: newStudentData,
      };
      return newState;
    });
  }

  handleChange(event) {
    const { name } = event.target;
    let updatedRankingType = "";

    this.setState((prevState) => {
      const updatedIsChecked = prevState.buttons.map((button) => {
        if (button.name === name) {
          updatedRankingType = button.rankingType;
          return {
            ...button,
            isChecked: !button.isChecked,
          };
        }
        return {
          ...button,
          isChecked: false,
        };
      });

      return {
        buttons: updatedIsChecked,
        rankingType: updatedRankingType,
      };
    });

    //this.updateStudentData();
  }

  render() {
    return (
      <Container>
        <Row>
          <Header
            buttonList={this.state.buttons}
            handleChange={this.handleChange}
            studentList={this.state.studentList}
          />
        </Row>

        <Row>
          <Graph
            //hier net als bij CheckBox een mapfunctie voor de VictoryBars
            studentDataFun={this.state.studentDataFun}
            studentDataDifficulty={this.state.studentDataDifficulty}
            assignmentList={this.state.assignmentList}
            studentList={this.state.studentList}
            rankingType={this.state.rankingType}
          />
        </Row>
        <Row>
          <StudentInformation activeRanking={this.state.rankingType} />
        </Row>
      </Container>
    );
  }
}

export default BoardLogic;
