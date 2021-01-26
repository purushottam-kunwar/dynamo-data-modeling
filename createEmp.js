const { v4: uuidv4 } = require('uuid');
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1"});

const dynamodb = new AWS.DynamoDB.DocumentClient();

//Create Employee
// const happyInc = "ad2071fc-857b-40c5-bca0-3238aa168bf5"; 
// const empId2 = uuidv4();


// var params = {
//     TableName : 'happy-projects',
//     Item: {
//        PK: `ORG#${happyInc}`,
//        SK: `#PRO#agile#${empId2}`,
//        name: "Egg Fish",
//        emai: "egg.fish@gmail.com"
//     }
//   };
  
//   dynamodb.put(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
//   });


  //Asign project to employee
const happyInc = "ad2071fc-857b-40c5-bca0-3238aa168bf5"; 
const projectX = "f23603f8-cf94-4514-b595-b61d8d03ce98";
const projectY = "8322241b-191e-48f7-8e68-93f092ce5cfb";
const projectF = "2cf91339-7834-4d64-897f-e50d7a474fa5";
const empId2 = uuidv4();

const apple = "ace6d4bb-d17e-46a2-8a6d-1fede2d8fb65"
const cat = "4f811f05-cca4-49ae-b21b-bbae773f0216"
const egg = "e443bf59-a42c-4065-9a6c-92e3af97f8d0"

var params = {
    TableName : 'happy-projects',
    Item: {
       PK: `ORG#${happyInc}#PRO#${projectY}`,
       SK: `#PRO#agile#${empId2}#EMP#${egg}`,
       name: "Egg",
       project: "Project X",
       emai: "egg.fish@gmail.com",
       date_of_join: new Date().toUTCString()
    }
  };
  
  dynamodb.put(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
  });
