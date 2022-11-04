import React, { Component } from "react";
import GraphLogic from "./Components/GraphLogic";
import Graph from "./Components/Graph";
import Header from "./Components/Header";
import { Row } from "react-bootstrap";

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
      studentList: GraphLogic.studentList,
      assignmentList: GraphLogic.uniqueAssigmentNames,
      studentData: GraphLogic.initialList,
      currentStudent: "all students",
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateSelectedStudent = this.updateSelectedStudent.bind(this);
  }

  updateSelectedStudent(event) {
    let studentName = event;
    let updatedStudentSelection = "";
    this.setState((prevState) => {
      const updatedIsSelected = prevState.studentList.map((student) => {
        if (student.name === studentName) {
          updatedStudentSelection = student.name;
          return {
            ...student,
            isSelected: !student.isSelected,
          };
        }
        return {
          ...student,
          isSelected: false,
        };
      });

      return {
        ...prevState,
        studentList: updatedIsSelected,
        currentStudent: updatedStudentSelection,
        studentData: GraphLogic.createList(this.state.rankingType, studentName),
      };
    });
  }

  handleChange(e) {
    const buttonName = e.target.name;
    let updatedRankingType = "";

    this.setState((prevState) => {
      const updatedIsChecked = prevState.buttons.map((button) => {
        if (button.name === buttonName) {
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
        ...prevState,
        buttons: updatedIsChecked,
        rankingType: updatedRankingType,
        studentData: GraphLogic.createList(
          updatedRankingType,
          this.state.currentStudent
        ),
      };
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Header
            buttonList={this.state.buttons}
            handleChange={this.handleChange}
            studentList={this.state.studentList}
            updateSelectedStudent={this.updateSelectedStudent}
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
      </div>
    );
  }
}

export default BoardLogic;
