/**
 * Bitbucket API
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Account from './Account';
import DeploymentStateCompletedStatus from './DeploymentStateCompletedStatus';

/**
 * The DeploymentStateCompletedAllOf model module.
 * @module model/DeploymentStateCompletedAllOf
 * @version 1.2.0
 */
class DeploymentStateCompletedAllOf {
    /**
     * Constructs a new <code>DeploymentStateCompletedAllOf</code>.
     * A Bitbucket Deployment COMPLETED deployment state.
     * @alias module:model/DeploymentStateCompletedAllOf
     */
    constructor() { 
        
        DeploymentStateCompletedAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeploymentStateCompletedAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateCompletedAllOf} obj Optional instance to populate.
     * @return {module:model/DeploymentStateCompletedAllOf} The populated <code>DeploymentStateCompletedAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentStateCompletedAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('deployer')) {
                obj['deployer'] = Account.constructFromObject(data['deployer']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = DeploymentStateCompletedStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
            }
            if (data.hasOwnProperty('completion_date')) {
                obj['completion_date'] = ApiClient.convertToType(data['completion_date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The name of deployment state (COMPLETED).
 * @member {module:model/DeploymentStateCompletedAllOf.NameEnum} name
 */
DeploymentStateCompletedAllOf.prototype['name'] = undefined;

/**
 * Link to the deployment result.
 * @member {String} url
 */
DeploymentStateCompletedAllOf.prototype['url'] = undefined;

/**
 * @member {module:model/Account} deployer
 */
DeploymentStateCompletedAllOf.prototype['deployer'] = undefined;

/**
 * @member {module:model/DeploymentStateCompletedStatus} status
 */
DeploymentStateCompletedAllOf.prototype['status'] = undefined;

/**
 * The timestamp when the deployment was started.
 * @member {Date} start_date
 */
DeploymentStateCompletedAllOf.prototype['start_date'] = undefined;

/**
 * The timestamp when the deployment completed.
 * @member {Date} completion_date
 */
DeploymentStateCompletedAllOf.prototype['completion_date'] = undefined;





/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
DeploymentStateCompletedAllOf['NameEnum'] = {

    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED"
};



export default DeploymentStateCompletedAllOf;

