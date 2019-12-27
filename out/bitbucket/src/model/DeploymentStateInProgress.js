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
import DeploymentState from './DeploymentState';
import DeploymentStateInProgressAllOf from './DeploymentStateInProgressAllOf';

/**
 * The DeploymentStateInProgress model module.
 * @module model/DeploymentStateInProgress
 * @version 1.1.0
 */
class DeploymentStateInProgress {
    /**
     * Constructs a new <code>DeploymentStateInProgress</code>.
     * @alias module:model/DeploymentStateInProgress
     * @implements module:model/DeploymentState
     * @implements module:model/DeploymentStateInProgressAllOf
     * @param type {String} 
     */
    constructor(type) { 
        DeploymentState.initialize(this, type);DeploymentStateInProgressAllOf.initialize(this);
        DeploymentStateInProgress.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
        obj['type'] = type;
    }

    /**
     * Constructs a <code>DeploymentStateInProgress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateInProgress} obj Optional instance to populate.
     * @return {module:model/DeploymentStateInProgress} The populated <code>DeploymentStateInProgress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentStateInProgress();
            DeploymentState.constructFromObject(data, obj);
            DeploymentStateInProgressAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
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
 * @member {String} type
 */
DeploymentStateInProgress.prototype['type'] = undefined;

/**
 * The name of deployment state (IN_PROGRESS).
 * @member {module:model/DeploymentStateInProgress.NameEnum} name
 */
DeploymentStateInProgress.prototype['name'] = undefined;

/**
 * Link to the deployment result.
 * @member {String} url
 */
DeploymentStateInProgress.prototype['url'] = undefined;

/**
 * @member {module:model/Account} deployer
 */
DeploymentStateInProgress.prototype['deployer'] = undefined;

/**
 * The timestamp when the deployment was started.
 * @member {Date} start_date
 */
DeploymentStateInProgress.prototype['start_date'] = undefined;


// Implement DeploymentState interface:
/**
 * @member {String} type
 */
DeploymentState.prototype['type'] = undefined;
// Implement DeploymentStateInProgressAllOf interface:
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
DeploymentStateInProgress['NameEnum'] = {

    /**
     * value: "IN_PROGRESS"
     * @const
     */
    "IN_PROGRESS": "IN_PROGRESS"
};



export default DeploymentStateInProgress;

