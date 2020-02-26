export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "sa-east-1",
      BUCKET: "serverless-estudo-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://8ai36g23g7.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_tgyaa7bef",
      APP_CLIENT_ID: "49g4pl03oqc7tr7o82v6jddg4o",
      IDENTITY_POOL_ID: "us-east-1:3ee89d1f-a568-470d-88c0-14a85871e87f"
    }
};