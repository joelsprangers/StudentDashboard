import data from "../Assets/data/student-information.json";

// create list of unique student names
const uniqueStudentNames = [
  ...new Set(
    data.map((student) => {
      const studentName = student["Wie ben je?"];
      return studentName;
    })
  ),
];

//create list of unique assignmets
const uniqueAssigmentNames = [
  ...new Set(
    data.map((assignment) => {
      const assignmentName =
        assignment["Welke opdracht of welk project lever je nu in?"];
      return assignmentName;
    })
  ),
];

// get list of unique student names
const getUniqueStudentNames = () => [
  ...new Set(
    data.map((student) => {
      const studentName = student["Wie ben je?"];
      return studentName;
    })
  ),
];

//get list of unique assignmets
const getUniqueAssigmentNames = () => [
  ...new Set(
    data.map((assignment) => {
      const assignmentName =
        assignment["Welke opdracht of welk project lever je nu in?"];
      return assignmentName;
    })
  ),
];

//get all records of the same assignment
const createAssignmentList = (assignmentName) => {
  const assignmentList = [];
  data.filter((record) => {
    if (
      record["Welke opdracht of welk project lever je nu in?"] ===
      assignmentName
    ) {
      assignmentList.push(record);
    }
  });
  return assignmentList;
};

//get average of an assignment given
const calculateMeanScore = (assignmentList, rankingType) =>
  assignmentList
    .map((assignment) => {
      return assignment[rankingType];
    })
    .reduce((initialScore, assignmentScore) => {
      return parseInt(assignmentScore) + initialScore;
    }, 0) / assignmentList.length;

//create list of all Assigments, seperated per each assignment
const listOfAllperAssigments = (uniqueAssigmentNames) => {
  const totalList = [];
  uniqueAssigmentNames.map((name) => {
    totalList.push(createAssignmentList(name));
  });
  return totalList;
};

//create list of all Assignments separated with mean
const listOfAllPerAssignmentWithMean = (sortedAssignments, rankingType) => {
  const totalListWithMean = [];
  sortedAssignments.map((assignmentList) => {
    const name = assignmentList[0];
    totalListWithMean.push({
      x: name["Welke opdracht of welk project lever je nu in?"],
      y: calculateMeanScore(assignmentList, rankingType),
    });
  });
  return totalListWithMean;
};

const createList = (rankingType) => {
  const allAssignments = getUniqueAssigmentNames();
  const listOfAssignments = listOfAllperAssigments(allAssignments);
  const listOfStudentData = [];

  if (rankingType === "difficulty") {
    const listOfStudentData = [
      {
        rankingType: rankingType,
        data: listOfAllPerAssignmentWithMean(
          listOfAssignments,
          "Hoe moeilijk vond je deze opdracht?"
        ),
      },
    ];
    return listOfStudentData;
  } else if (rankingType === "fun") {
    const listOfStudentData = [
      {
        rankingType: rankingType,
        data: listOfAllPerAssignmentWithMean(
          listOfAssignments,
          "Hoe leuk vond je deze opdracht?"
        ),
      },
    ];
    return listOfStudentData;
  } else {
    const listOfStudentData = [
      {
        rankingType: "fun",
        data: listOfAllPerAssignmentWithMean(
          listOfAssignments,
          "Hoe leuk vond je deze opdracht?"
        ),
      },
      {
        rankingType: "difficulty",
        data: listOfAllPerAssignmentWithMean(
          listOfAssignments,
          "Hoe moeilijk vond je deze opdracht?"
        ),
      },
    ];
    return listOfStudentData;
  }
};

const initialList = [...new Set(createList("both"))];

//export default
export default {
  uniqueStudentNames,
  uniqueAssigmentNames,
  createList,
  initialList,
  listOfAllperAssigments,
};
