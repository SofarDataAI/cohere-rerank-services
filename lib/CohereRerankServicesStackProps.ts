import { StackProps } from "aws-cdk-lib";

export interface CohereRerankServicesStackProps extends StackProps, CohereRerankServices, CohereRerankServiceArgs {
}

export interface CohereRerankServices {
    /**
     * The name of the application.
     */
    readonly appName: string;
    /**
     * Prefix used for naming AWS resources.
     */
    readonly resourcePrefix: string;
    /**
     * The version of the Docker image.
     */
    readonly ecrRepositoryImageTag: string;
    /**
     * The name of the Dockerfile.
     */
    readonly dockerfileName: string;
    /**
     * The name of the ECR repository.
     */
    readonly ecrRepositoryName: string;
    /**
     * The environment where the CDK stack will be deployed.
     */
    readonly cdkDeployEnvironment: string;
    /**
     * The platform for the deployment.
     */
    readonly cdkDeployPlatform: string;
    /**
     * The port number for the application.
     */
    readonly cdkDeployPort: string;
    /**
     * The AWS region where the stack will be deployed.
     */
    readonly cdkDeployRegion: string;
    /**
     * The string representation of the platform for the deployment.
     */
    readonly cdkDeployPlatformString: string;
    /**
     * The cpu type for the deployment.
     */
    readonly cdkDeployCpuType: string;
    /**
     * The memory type for the deployment.
     */
    readonly cdkDeployMemoryType: string;
    /**
     * The vpcId for the deployment.
     */
    readonly vpcId: string;
}

export interface CohereRerankServiceArgs {
    /**
     * The API key for Cohere services.
     */
    readonly cohereApiKey: string;
    /**
     * The model for Cohere services.
     */
    readonly cohereRerankModel: string;
}
