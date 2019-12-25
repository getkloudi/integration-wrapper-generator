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
 * The DeploymentPayload model module.
 * @module model/DeploymentPayload
 * @version 1.4.1
 */
class DeploymentPayload {
    /**
     * Constructs a new <code>DeploymentPayload</code>.
     * @alias module:model/DeploymentPayload
     */
    constructor() { 
        
        DeploymentPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeploymentPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentPayload} obj Optional instance to populate.
     * @return {module:model/DeploymentPayload} The populated <code>DeploymentPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentPayload();

            if (data.hasOwnProperty('deploy_user')) {
                obj['deploy_user'] = ApiClient.convertToType(data['deploy_user'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = ApiClient.convertToType(data['environment'], 'String');
            }
            if (data.hasOwnProperty('room_id')) {
                obj['room_id'] = ApiClient.convertToType(data['room_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} deploy_user
 */
DeploymentPayload.prototype['deploy_user'] = undefined;

/**
 * @member {String} environment
 */
DeploymentPayload.prototype['environment'] = undefined;

/**
 * @member {Number} room_id
 */
DeploymentPayload.prototype['room_id'] = undefined;






export default DeploymentPayload;

