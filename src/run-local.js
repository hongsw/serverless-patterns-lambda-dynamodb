process.env.AWS_REGION='ap-northeast-2';
process.env.DatabaseTable='sam-app-hongsw-DynamoTable-VHRZUMIM72GB'; 
(async () => {
    const asyncMsg = await require('./app').handler(require('../event.json'));
    console.log(asyncMsg);
})();