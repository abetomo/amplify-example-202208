export type AmplifyDependentResourcesAttributes = {
    "function": {
        "ApiBackend": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "auth": {
        "amplifyexample": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "Api": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}