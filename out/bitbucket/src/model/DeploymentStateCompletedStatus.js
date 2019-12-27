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
import ModelObject from './ModelObject';

/**
 * The DeploymentStateCompletedStatus model module.
 * @module model/DeploymentStateCompletedStatus
 * @version 1.1.0
 */
class DeploymentStateCompletedStatus {
    /**
     * Constructs a new <code>DeploymentStateCompletedStatus</code>.
     * @alias module:model/DeploymentStateCompletedStatus
     * @extends module:model/ModelObject
     * @implements module:model/ModelObject
     * @param type {String} 
     */
    constructor(type) { 
        ModelObject.initialize(this, type);
        DeploymentStateCompletedStatus.initialize(this, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type) { 
    }

    /**
     * Constructs a <code>DeploymentStateCompletedStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStateCompletedStatus} obj Optional instance to populate.
     * @return {module:model/DeploymentStateCompletedStatus} The populated <code>DeploymentStateCompletedStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentStateCompletedStatus();
            ModelObject.constructFromObject(data, obj);
            ModelObject.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement ModelObject interface:
/**
 * @member {String} type
 */
ModelObject.prototype['type'] = undefined;




export default DeploymentStateCompletedStatus;

