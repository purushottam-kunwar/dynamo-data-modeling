const { v4: uuidv4 } = require('uuid');
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1"});

const dynamodb = new AWS.DynamoDB.DocumentClient();

  //3. edit an organization
  const ancOrgId = "ad2071fc-857b-40c5-bca0-3238aa168bf5";

  var params = {
    TableName: 'happy-projects',
    Key: { PK : `ORG#${ancOrgId}`, SK: `#METADATA#${ancOrgId}` },
    UpdateExpression: "set #org_id = :org_id",
    ExpressionAttributeNames: {"#org_id" : "org_id"},
    ExpressionAttributeValues: {
      ":org_id" :ancOrgId,
    }
  };
  
  dynamodb.update(params, function(err, data) {
     if (err) console.log(err);
     else console.log(data);
  });


















