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
          isChecked: false,
          rankingType: "difficulty",
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
          isChecked: true,
          rankingType: "both",
        },
      ],
      rankingType: "both",
      studentList: GraphLogic.uniqueStudentNames,
      assignmentList: GraphLogic.uniqueAssigmentNames,
      studentData: GraphLogic.initialList,
      currentStudent: "select student",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleStudentChange = this.handleStudentChange.bind(this);
  }

  handleStudentChange(event) {
    const { name } = event.target;
    console.log("hoi");
    this.setState((prevState) => {
      return {
        currentStudent: name,
      };
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
        studentData: GraphLogic.createList(updatedRankingType),
      };
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Header
            buttonList={this.state.buttons}
            handleChange={this.handleChange}
            studentList={this.state.studentList}
            updateStudentData={this.updateStudentData}
            handleStudentChange={this.handleStudentChange}
            currentStudent={this.state.currentStudent}
          />
        </Row>
        <Row>
          <Graph
            assignmentList={this.state.assignmentList}
            studentList={this.state.studentList}
            rankingType={this.state.rankingType}
            studentData={this.state.studentData}
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
