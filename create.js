const { v4: uuidv4 } = require('uuid');
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1"});

const dynamodb = new AWS.DynamoDB.DocumentClient();

// 1. Create an organization
// Create Happy Inc
// const orgId = uuidv4();

// var params = {
//     TableName : 'happy-projects',
//     Item: {
//        PK: `ORG#${orgId}`,
//        SK: `#METADATA#${orgId}`,
//        name: "Abc Inc",
//        tier: "professional"

//     }
//   };
  
//   dynamodb.put(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
//   });



// // Create Abc Inc
// const orgId = uuidv4();

// var params = {
//     TableName : 'happy-projects',
//     Item: {
//        PK: `ORG#${orgId}`,
//        SK: `#METADATA#${orgId}`,
//        name: "Abc Inc",
//        tier: "professional"

//     }
//   };
  
//   dynamodb.put(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
//   });



// 2. create an agile project in Happi Inc
// Project X
// const happyOrgId = "4fc21f4d-0b43-4273-bd69-2e97fb29276c"; // from dynamodb aws which is created before
// const projectId = uuidv4();


// var params = {
//     TableName : 'happy-projects',
//     Item: {
//        PK: `ORG#${happyOrgId}`,
//        SK: `#PRO#agile#${projectId}`,
//        name: "Project X",
//        projectId: projectId

//     }
//   };
  
//   dynamodb.put(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
//   });

  //Project Y
// const happyOrgId = "4fc21f4d-0b43-4273-bd69-2e97fb29276c"; // from dynamodb aws which is created before
// const projectId = uuidv4();


// var params = {
//     TableName : 'happy-projects',
//     Item: {
//        PK: `ORG#${happyOrgId}`,
//        SK: `#PRO#agile#${projectId}`,
//        name: "Project Y",
//        projectId: projectId

//     }
//   };
  
//   dynamodb.put(params, function(err, data) {
//     if (err) console.log(err);
//     else console.log(data);
//   });

// 2. create an fix-bit project in Happi Inc
// Project F1
const abcInc = "ad2071fc-857b-40c5-bca0-3238aa168bf5"; // from dynamodb aws which is created before

const projectId = uuidv4();


var params = {
    TableName : 'happy-projects',
    Item: {
       PK: `ORG#${abcInc}`,
       SK: `#PRO#agile#${projectId}`,
       name: "Project F1",
       projectId: projectId

    }
  };
  
  dynamodb.put(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
  });


