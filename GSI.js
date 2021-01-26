const { v4: uuidv4 } = require('uuid');
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1"});

const dynamodb = new AWS.DynamoDB.DocumentClient();

//GSI QUERY
var params = {
  TableName: "happy-projects",
  IndexName: "Filter-By-Name",
  KeyConditionExpression:"#PK = :PK and begins_with(#SK, :SK)",
  ExpressionAttributeNames: { "#PK":"PK", "#SK": "Data" },
  ExpressionAttributeValues: {
    ":PK": `ORG#ad2071fc-857b-40c5-bca0-3238aa168bf5`,
    ':SK': 'PRO#P'
  }
};

dynamodb.query(params, function(err, data) {
   if (err) console.log(err);
   else console.log(data);
});

