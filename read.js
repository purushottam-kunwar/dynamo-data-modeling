const { v4: uuidv4 } = require('uuid');
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1"});

const dynamodb = new AWS.DynamoDB.DocumentClient();

// Find an organization Happy Inc
// var params = {
//     TableName : 'happy-projects',
//     Key: {
//       PK: "ORG#4fc21f4d-0b43-4273-bd69-2e97fb29276c",
//       SK: "#METADATA#4fc21f4d-0b43-4273-bd69-2e97fb29276c"
//     }
//   };
    
//   documentClient.get(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
//   });

  // Find an project of Happy Inc
  // var params = {
  //   TableName: "happy-projects",
  //   KeyConditionExpression: "#PK = :PK and begins_with(#SK, :SK)",
  //   ExpressionAttributeNames: { "#PK": "PK", "#SK": "SK" },
  //   ExpressionAttributeValues: {
  //     ":PK": "ORG#4fc21f4d-0b43-4273-bd69-2e97fb29276c",
  //     ":SK": "#PRO#"
  //   }
  // };
  
  // dynamodb.query(params, function(err, data) {
  //    if (err) console.log(err);
  //    else console.log(data);
  // });


//Find employee assigned to projectX of Happy Inc
// const happyInc = "ad2071fc-857b-40c5-bca0-3238aa168bf5"; 
// const projectX = "2cf91339-7834-4d64-897f-e50d7a474fa5";
// const projectY = "8322241b-191e-48f7-8e68-93f092ce5cfb";

// var params = {
//   TableName: "happy-projects",
//   KeyConditionExpression:"#PK = :PK",
//   ExpressionAttributeNames: { "#PK": "PK" },
//   ExpressionAttributeValues: {
//     ":PK": `ORG#ad2071fc-857b-40c5-bca0-3238aa168bf5#PRO#2cf91339-7834-4d64-897f-e50d7a474fa5 `
//   }
// };

// dynamodb.query(params, function(err, data) {
//    if (err) console.log(err);
//    else console.log(data);
// });

//Find project and employee part of -using an nverted index
const happyInc = "ad2071fc-857b-40c5-bca0-3238aa168bf5"; 
const apple = "ad2071fc-857b-40c5-bca0-3238aa168bf5 "

var params = {
  TableName: "happy-projects",
  IndexName: "SK-PK-index",
  KeyConditionExpression:"#SK = :SK",
  ExpressionAttributeNames: { "#SK": "SK" },
  ExpressionAttributeValues: {
    ":SK": `ORG#${happyInc}#EMP#${apple}`
  }
};

dynamodb.query(params, function(err, data) {
   if (err) console.log(err);
   else console.log(data);
});

