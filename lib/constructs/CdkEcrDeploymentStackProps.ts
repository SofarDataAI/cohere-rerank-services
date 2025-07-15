import { NestedStackProps } from 'aws-cdk-lib';
import { CohereRerankServices } from '../CohereRerankServicesStackProps';

/**
 * Properties for CdkEcrDeploymentStack.
 */
export interface CdkErcDeploymentStackProps extends NestedStackProps, CohereRerankServices {
    /**
     * The build arguments for the Docker image.
     */
    readonly dockerBuildArgs?: Record<string, string> | undefined;
}
