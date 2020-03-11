const dev = {
  STRIPE_KEY: "pk_test_8l8Y1tSAroVQicyvommUmC6T00bMxSBpDN",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-172nv8sfhkyer"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://184m1sy524.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_296oZgVfI",
    APP_CLIENT_ID: "3nsedrs0i4h130gij74eudb413",
    IDENTITY_POOL_ID: "us-east-1:66fe08e6-8eda-414d-8c0e-6d2f35e99206"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_8l8Y1tSAroVQicyvommUmC6T00bMxSBpDN",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-drmu4l63t1qj"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://iqa2kpvpga.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_IHlapXncM",
    APP_CLIENT_ID: "qoarp1esig33epv98ke31rrk3",
    IDENTITY_POOL_ID: "us-east-1:7b2b1bc1-0da2-4c8e-9886-32ef82a1f394"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};