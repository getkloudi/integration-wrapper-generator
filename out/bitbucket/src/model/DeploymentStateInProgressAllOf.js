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

/**
 * The DeploymentStateInProgressAllOf model module.
 * @module model/DeploymentStateInProgressAllOf
 * @version 1.2.0
 */
class DeploymentStateInProgressAllOf {
    /**
     * Constructs a new <code>DeploymentStateInProgressAllOf</code>.
     * A Bitbucket Deployment IN_PROGRESS deployment state.
     * @alias module:model/DeploymentStateInProgressAllOf
     */
    constructor() { 
        
        DeploymentStateInProgressAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeploymentStateInProgressAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateInProgressAllOf} obj Optional instance to populate.
     * @return {module:model/DeploymentStateInProgressAllOf} The populated <code>DeploymentStateInProgressAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentStateInProgressAllOf();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('deployer')) {
                obj['deployer'] = Account.constructFromObject(data['deployer']);
            }
            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The name of deployment state (IN_PROGRESS).
 * @member {module:model/DeploymentStateInProgressAllOf.NameEnum} name
 */
DeploymentStateInProgressAllOf.prototype['name'] = undefined;

/**
 * Link to the deployment result.
 * @member {String} url
 */
DeploymentStateInProgressAllOf.prototype['url'] = undefined;

/**
 * @member {module:model/Account} deployer
 */
DeploymentStateInProgressAllOf.prototype['deployer'] = undefined;

/**
 * The timestamp when the deployment was started.
 * @member {Date} start_date
 */
DeploymentStateInProgressAllOf.prototype['start_date'] = undefined;





/**
 * Allowed values for the <code>name</code> property.
 * @enum {String}
 * @readonly
 */
DeploymentStateInProgressAllOf['NameEnum'] = {

    /**
     * value: "IN_PROGRESS"
     * @const
     */
    "IN_PROGRESS": "IN_PROGRESS"
};



export default DeploymentStateInProgressAllOf;

