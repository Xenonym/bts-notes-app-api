export default {
	MAX_ATTACHMENT_SIZE: 5000000,
	s3: {
		REGION: "us-east-1",
		BUCKET: "bts-notes-app-uploads"
	},
	apiGateway: {
		REGION: "us-east-1",
		URL: "https://kia0bfs9rk.execute-api.us-east-1.amazonaws.com/dev"
	},
	cognito: {
		REGION: "us-east-1",
		USER_POOL_ID: "us-east-1_pwnYPQE4I",
		APP_CLIENT_ID: "3uklq03h2cd0abetgaole8kp0h",
		IDENTITY_POOL_ID: "us-east-1:c2e569fe-b240-4524-ab09-8d1fcb09d637"
	}
}
