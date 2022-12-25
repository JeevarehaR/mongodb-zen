// Commands to task in MongoDB

// use ZenClassDB

// Creating users
db.createCollection("users");
db.users.inserMany([
  {
    userid: 1,
    name: "Wyman Rau",
    email: "Wyman@gmail.com",
  },
  {
    userid: 2,
    name: "Adrain Monahan",
    email: "adrainm12@gmail.com",
  },
  {
    userid: 3,
    name: "Glen Jones",
    email: "jonesglen@gmail.com",
  },
  {
    userid: 4,
    name: "Kallie Smitham",
    email: "kallie@gmail.com",
  },
  {
    userid: 5,
    name: "Ozella Morar",
    email: "ozellam@gmail.com",
  },
  {
    userid: 6,
    name: "Corene Beier",
    email: "corene@gmail.com",
  },
  {
    userid: 7,
    name: "Jamaal Robel",
    email: "jamaalrob@gmail.com",
  },
  {
    userid: 8,
    name: "Lisette Lowe",
    email: "lisettel@gmail.com",
  },
  {
    userid: 9,
    name: "Rosamond Schinner",
    email: "Rosamond@gmail.com",
  },
  {
    userid: 10,
    name: "Price Crona",
    email: "pc320ad@gmail.com",
  },
  {
    userid: 11,
    name: "Mike Ross",
    email: "rossmike@gmail.com",
  },
  {
    userid: 12,
    name: "Dayana",
    email: "dayana21@gmail.com",
  },
  {
    userid: 13,
    name: "Yeshwanth Hama",
    email: "yeswanthhe@gmail.com",
  },
  {
    userid: 14,
    name: "Surya Kiran",
    email: "kiransurya@gmail.com",
  },
  {
    userid: 15,
    name: "Mickey J",
    email: "mickeyJ@gmail.com",
  },
  {
    userid: 16,
    name: "Das Mohan",
    email: "dasmohan21@gmail.com",
  },
]);

// Creating Codekata Collection
db.createCollection("codekata");
db.codekata.insert([
  {
    problemid: 1,
    answered_by: [1, 5, 6, 8, 11, 13, 16],
  },
  {
    problemid: 2,
    answered_by: [2, 7, 9, 12, 14, 11],
  },
  {
    problemid: 3,
    answered_by: [1, 2, 4, 3, 8, 9, 15, 13],
  },
  {
    problemid: 4,
    answered_by: [9, 7, 5, 3, 2, 1, 15, 16, 14],
  },
  {
    problemid: 5,
    answered_by: [4, 5, 8, 13, 14, 15],
  },
  {
    problemid: 6,
    answered_by: [6, 7, 12],
  },
  {
    problemid: 7,
    answered_by: [5, 9, 7, 6],
  },
  {
    problemid: 8,
    answered_by: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15],
  },
]);

// Creating attendance and topics covered and tasks
db.createCollection("classdetails");
db.classdetails.insert([
  {
    topic: ["httpMethods", "Basics of JavaScript"],
    class_date: new Date("2020-10-21"),
    attended_by: [8, 7, 9, 6, 5],
    task_name: "Write on HTTPMethods",
    submitted_by: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
  {
    topic: ["Basics of JavaScript", "DataTypes"],
    class_date: new Date("2020-10-22"),
    attended_by: [2, 3, 4, 5],
    task_name: "Solve Codekata",
    submitted_by: [2, 7, 5, 3, 8],
  },
  {
    topic: ["HTML", "CSS"],
    class_date: new Date("2020-10-23"),
    attended_by: [1, 7, 2, 6, 8, 9, 11],
    task_name: "Read about advanced CSS methods ",
    submitted_by: [9, 6, 1, 3, 2, 8],
  },
  {
    topic: ["CSS", "Advanced JS"],
    class_date: new Date("2020-10-22"),
    attended_by: [2, 3, 4, 5],
    task_name: "Solve codekata",
    submitted_by: [1, 9, 2, 3, 6, 7],
  },
  {
    topic: ["React", "ES6"],
    class_date: new Date("2020-11-2"),
    attended_by: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    task_name: "Solve the codekata react problems",
    submitted_by: [1, 3, 4, 5, 6, 7, 8],
  },
]);

// Creating company_drive collection
db.createCollection("companydrives");
db.companydrives.insert([
  {
    drive_date: new Date("2020-10-9"),
    attended_by: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    firm: "Global Tech",
  },
  {
    drive_date: new Date("2020-10-15"),
    attended_by: [1, 2, 3, 4, 5, 9],
    firm: "Syns Tech",
  },
  {
    drive_date: new Date("2020-09-29"),
    attended_by: [2, 3, 4, 6, 7, 8, 9],
    firm: "Retri Tech Co",
  },
]);

// Creating Mentor
db.createCollection("mentors");
db.mentors.insert([
  {
    mentor_id: 1,
    mentees: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
  {
    mentor_id: 2,
    mentees: [6, 7, 8, 9, 10],
  },
  {
    mentor_id: 3,
    mentees: [1, 2, 3, 4, 5],
  },
  {
    mentor_id: 4,
    mentees: [11, 12, 13, 14, 15],
  },
]);

/*************Queries*************************/

//To Find all the topics and tasks which are taught in the month of October
db.classdetails.find(
  {
    $and: [
      {
        class_date: { $gt: ISODate("2021-10-01"), $lt: ISODate("2021-10-31") },
      },
    ],
  },
  { topic: 1, task_name: 1 }
);

// Company drives which appeared between 15-oct and 31 oct
db.companydrives.find({
  $and: [
    { drive_date: { $gt: ISODate("2020-10-15"), $lt: ISODate("2020-10-31") } },
  ],
});

// All the company drives and students who are appeared for the placement
db.companydrives.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "attended_by",
      foreignField: "answered_by",
      as: "results",
    },
  },
  { $match: { userid: 1 } },
  { $project: { results: 1, _id: 0 } },
  { $project: { countp: { $size: "$results" } } },
]);

// To Find the number of problems solved by the user in codekata.
db.users.aggregate([
  {
    $lookup: {
      from: "codekata",
      localField: "userid",
      foreignField: "answered_by",
      as: "results",
    },
  },
  { $match: { userid: 1 } },
  { $project: { results: 1, _id: 0 } },
  { $project: { countp: { $size: "results" } } },
]);

// To find all the mentors with who has the mentee's count more than 15
db.mentors.find({ $expr: { $gt: [{ $size: "$mentees" }, 15] } });

// To find the number of users who are absent and task is not submitted  between 15 oct - 2020 and 31 - oct - 2020
let result = db.classdetails.aggregate([
  {
    $match: {
      $and: [
        {
          class_date: {
            $gt: ISODate("2020-10-15"),
            $lt: ISODate("2020-10-31"),
          },
        },
      ],
    },
  },
  {
    $projects: {
      allvalues: { $setUnion: ["$attended_by", "$submitted_by"] },
    },
  },
  { $project: { allvalues: 1, _id: 0 } },
  { $unwind: "$allvalues" },
  { $group: { _id: 0, allvalues: { $addToSet: "$allvalues" } } },
  { $projects: { allvalues: 1, _id: 0 } },
]);

let { allvalues } = result;
db.users.find({ userid: { $in: allvalues } }.count());
