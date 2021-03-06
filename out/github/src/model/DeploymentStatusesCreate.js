/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeploymentStatusesCreate model module.
 * @module model/DeploymentStatusesCreate
 * @version 1.4.6
 */
class DeploymentStatusesCreate {
    /**
     * Constructs a new <code>DeploymentStatusesCreate</code>.
     * @alias module:model/DeploymentStatusesCreate
     */
    constructor() { 
        
        DeploymentStatusesCreate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeploymentStatusesCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentStatusesCreate} obj Optional instance to populate.
     * @return {module:model/DeploymentStatusesCreate} The populated <code>DeploymentStatusesCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentStatusesCreate();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('target_url')) {
                obj['target_url'] = ApiClient.convertToType(data['target_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
DeploymentStatusesCreate.prototype['description'] = undefined;

/**
 * @member {String} state
 */
DeploymentStatusesCreate.prototype['state'] = undefined;

/**
 * @member {String} target_url
 */
DeploymentStatusesCreate.prototype['target_url'] = undefined;






export default DeploymentStatusesCreate;

